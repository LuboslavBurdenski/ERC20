require('dotenv').config();
const { ethers } = require("ethers");
const USElection = require('./build/LimeToken.json')

const run = async function () {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")

    const wallet = new ethers.Wallet("0x7ab741b57e8d94dd7e1a29055646bafde7010f38a900f55bbd7647880faa6ee8", provider)


}