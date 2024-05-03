#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter your From Currency. ",
        choices: ["GBP", "PKR", "USD", "EUR", "INR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter your To Currency. ",
        choices: ["GBP", "PKR", "USD", "EUR", "INR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount "
    }
]);
let fromcurrency = currency[answer.from];
let tocurrency = currency[answer.to];
let amount = answer.amount;
let basecurrency = Math.floor(amount / fromcurrency * tocurrency);
console.log(basecurrency);
// let currencyconvert = basecurrency * tocurrency
// console.log(currencyconvert)
