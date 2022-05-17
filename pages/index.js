import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import Link from "next/link";

const HomePage = ({ campaigns }) => {
  const renderCampaign = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <Link href={`/campaigns/${address}`}>View Campaign</Link>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  };
  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link href="/campaigns/new">
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
        </Link>
        {renderCampaign()}
      </div>
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps = async () => {
  // Fetch data from external API
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  // Pass data to the page via props
  return { props: { campaigns } };
};

export default HomePage;
