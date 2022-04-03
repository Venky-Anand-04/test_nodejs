// let os = require("os");
// let name = os.userInfo().username;
// let email = os.userInfo().uid;
// console.log("The Name is: ", name);
// console.log("The Name is: ", email);

// let os = require("os");
// console.log(os.userInfo());

// let path = require("path");
// let userName = process.env["USERPROFILE"].split(path.sep)[2];
// let loginId = path.join("domainName", userName);
// console.log(loginId);

// console.log(WindowsIdentity.GetCurrent());
// let os = require("os");
// console.log(os.hostname());

// var username = require('username');

// console.log(username.sync());

// var WinNetwork = new ActiveXObject("WScript.Network");
// console.log(WinNetwork.UserName);

// import os module
const os = require("os");

// check the available memory
const userHomeDir = os.homedir();
let output = userHomeDir.slice(9);
console.log(output);
