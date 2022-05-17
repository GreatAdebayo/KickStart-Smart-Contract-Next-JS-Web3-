import { useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

const ContributeForm = ({ address }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  let campaign = Campaign(address);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    if (!amount) {
      setLoading(false);
      setErrorMsg("value cant be empty");
    } else {
      try {
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3.utils.toWei(amount, "ether"),
        });
        setLoading(false);
        refreshData();
      } catch (error) {
        setLoading(false);
        setErrorMsg(error.message);
      }
    }
  };

  return (
    <Form onSubmit={onSubmit} error={!!errorMsg}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </Form.Field>
      <Message error header="Oops!" content={errorMsg} />
      <Button primary loading={loading}>
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
