import web3 from "./web3";
import campaign from "../ethereum/build/Campaign.json";

export default (address) => {
  return new web3.eth.Contract(campaign.abi, address);
};
