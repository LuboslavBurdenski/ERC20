require('dotenv').config();
const { ethers } = require("ethers");
const LimeToken = require('./build/LimeToken.json')

const run = async function () {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const wallet = new ethers.Wallet("0x7ab741b57e8d94dd7e1a29055646bafde7010f38a900f55bbd7647880faa6ee8", provider);
    const limeTokenContract = new ethers.Contract("0xc9707e1e496c12f1fa83afbba8735da697cdbf64", LimeToken.abi, wallet);

    const mint = await limeTokenContract.mint("0xd9995bae12fee327256ffec1e3184d492bd94c31", ethers.BigNumber.from("2000000000000000000"));
    const mintReceipt = await mint.wait();

    const balanceAcc = async (address) => await (await limeTokenContract.balanceOf(address)).toString();
    console.log(await balanceAcc("0xd9995bae12fee327256ffec1e3184d492bd94c31"))

    const transfer = await limeTokenContract.transfer(
        "0x465b2b6CC578268BA33f24A7e151D144b0E44D29",
        ethers.BigNumber.from("1430000000000000000"));

    console.log(await balanceAcc("0x465b2b6CC578268BA33f24A7e151D144b0E44D29"))

    const leftoverDeployer = await balanceAcc("0xd9995bae12fee327256ffec1e3184d492bd94c31");
    const burnLeftover = await limeTokenContract.burn(leftoverDeployer)
    console.log(await balanceAcc("0xd9995bae12fee327256ffec1e3184d492bd94c31"))
}
run()