import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

const New = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    description: "",
    value: "",
    recipient: "",
  });

  const { description, value, recipient } = request;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (description && value && recipient) {
      const campaign = Campaign(router.query.address);
      try {
        const accounts = await web3.eth.getAccounts();
        await campaign.methods
          .createRequest(
            description,
            web3.utils.toWei(value, "ether"),
            recipient
          )
          .send({ from: accounts[0] });
        setLoading(false);
        router.push(`/campaigns/requests/${router.query.address}`);
      } catch (error) {
        setErrorMsg(error.message);
        setLoading(false);
      }
    } else {
      setLoading(false);
      setErrorMsg("Please fill all fields");
    }
  };

  const onChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };
  return (
    <Layout>
      <Link href={`/campaigns/requests/${router.query.address}`}>
        <a>Back</a>
      </Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit} error={!!errorMsg}>
        <Form.Field>
          <label>Description</label>
          <Input value={description} onChange={onChange} name="description" />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input value={value} onChange={onChange} name="value" />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input value={recipient} onChange={onChange} name="recipient" />
        </Form.Field>
        <Message error header="Oops!" content={errorMsg} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

export default New;
