import React from "react";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import { Button, Table } from "semantic-ui-react";
import Campaign from "../../../../ethereum/campaign";
import RequestRow from "../../../../components/RequestRow";

const Requests = ({ requests, approversCount }) => {
  const router = useRouter();
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    return requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={router.query.address}
          approversCount={approversCount}
        />
      );
    });
  };
  return (
    <Layout>
      <h3>Requests</h3>
      <Button
        primary
        onClick={() => {
          router.push(`/campaigns/requests/${router.query.address}/new`);
        }}
      >
        Add Request
      </Button>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {requests.length} requests.</div>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { address } = query;
  const campaign = Campaign(address);
  let requestCount = await campaign.methods.getRequestCount().call();
  requestCount = parseInt(requestCount);
  const approversCount = await campaign.methods.approversCount().call();
  //javascript trick
  const requests = await Promise.all(
    Array(requestCount)
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return {
    props: {
      requests: JSON.parse(JSON.stringify(requests)),
      approversCount: approversCount,
    },
  };
};

export default Requests;
