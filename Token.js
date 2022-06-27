const {expect} = require("chai");
const{ethers} = require("hardhat");

describe("ERC20_ contract",function(){
    it ("should transfer tokens between accounts",async function(){
        const [owner,addr1,addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        await hardhatToken.transfer(addr1.address,10);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);


        await hardhatToken.connect(addr1).transfer(addr2.address,5);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    })
})










// const { expect } = require("chai");
// const { ethers } = require("ethers");
// // const {ethers} = require("ethers");

// describe("Token contract", function () {
//   it("Deployment should assign the total supply of tokens to the owner", async function () {


//     const [owner] = await ethers.getSigners();

//     console.log(owner)

//     const Token = await ethers.getContractFactory("Token");
//     console.log(Token);

//     const hardhatToken = await Token.deploy();

//     const ownerBalance = await hardhatToken.balanceOf(owner.address);
//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//   });
// });

// const { inputToConfig } = require("@ethereum-waffle/compiler");
// const { expect } = require("chai");
// const { ethers } = require("hardhat");
// console.log(ethers);

// describe("Token Contract", function () {
//     let Token;
//     let hardhatToken;
//     let owner;
//     let add1;
//     let add2;
//     let addrs;


//     beforeEach(async function () {
//         Token = await ethers.getContractFactory("Token");
//         [owner, add1, add2, ...addrs] = await ethers.getSigners();
//         hardhatToken = await Token.deploy();
//     });

//     describe("Deployment", function () {
//         it("should set the right owner", async function () {
//             expect(await hardhatToken.owner()).to.equal(owner.address);
//         })
//         it("should assign the total supply of tokens to the owner", async function () {
//             const ownerBalance = await hardhatToken.balanceOf(owner.address);
//             expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//         })
//     })

//     describe("transaction", function () {
//         it("should transfer token between accounts", async function () {
//             //owner account to add1.address
//             await hardhatToken.transfer(add1.address, 100);
//             const add1Balance = await hardhatToken.balanceOf(add1.address);
//             expect(add1Balance).to.equal(100);

//             await hardhatToken.connect(add1).transfer(add2.address, 50);
//             const add2Balance = await hardhatToken.balanceOf(add2.address);
//             expect(add2Balance).to.equal(50);
//         });

//         it("should fail if sender doesn't have enough tokens", async function () {
//             const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
//             await expect(
//                 hardhatToken.connect(add1).transfer(owner.address, 1))
//                 .to.be.revertedWith("token");
//             expect(await hardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
//         });

//         it("should update balances after transfers", async function () {
//             const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
//             await hardhatToken.transfer(add1.address, 100);
//             await hardhatToken.transfer(add2.address, 200);

//             const finalOwnerBalance = await hardhatToken.balanceOf(owner.address);
//             expect(finalOwnerBalance).to.equal(initialOwnerBalance - 300);

//             const add1Balance = await hardhatToken.balanceOf(add1.address);
//             expect(add1Balance).to.equal(100);
//             const add2Balance = await hardhatToken.balanceOf(add2.address);
//             expect(add2Balance).to.equal(200);
//         })
//     })
// })

