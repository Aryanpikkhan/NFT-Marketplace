
/*** @type import('hardhat/config').HardhatUserConfig*/
require("@nomiclabs/hardhat-ethers"); require('dotenv').config();
const { API_URL_KEY, PRIVATE_KEY } = process.env; 
module.exports = { 
  solidity: "0.8.17", defaultNetwork: "goerli", networks: { hardhat: {}, goerli: { url: "https://aged-fluent-pool.ethereum-sepolia.discover.quiknode.pro/07a25441de7e5757b6ec46517ef50482534d1be2/", accounts: [`0x${ "358110262a1b7de16e2e1fd3aa4240ca04507aec93944003a154d01bb1f54c33"}`] } }, }
