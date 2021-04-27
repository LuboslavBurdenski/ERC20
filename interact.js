require('dotenv').config();
const { ethers } = require("ethers");
const LimeToken = require('./build/LimeToken.json')

const run = async function () {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")
    const wallet = new ethers.Wallet("0x7ab741b57e8d94dd7e1a29055646bafde7010f38a900f55bbd7647880faa6ee8", provider)
    const limeTokenContract = new ethers.Contract("0xc9707e1e496c12f1fa83afbba8735da697cdbf64", LimeToken.abi, wallet)

}