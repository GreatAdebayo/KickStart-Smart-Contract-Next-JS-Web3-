import web3 from "./web3";
import campaignFactory from "../ethereum/build/CampaignFactory.json";
const address = "0x24460a9167bB6533f00545c47EA57135eBDBdecA";
export default new web3.eth.Contract(campaignFactory.abi, address);
