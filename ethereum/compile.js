// compile code will go here
const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const buildPath = path.resolve(__dirname, "build");

fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contract", "Campaign.sol");

const source = fs.readFileSync(campaignPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output = solc.compile(JSON.stringify(input));
output = JSON.parse(output).contracts["Campaign.sol"];

fs.ensureDirSync(buildPath); //creates a new build folder

//creates new  json file for each contract
for (contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, `${contract}.json`),
    output[contract]
  );
}
