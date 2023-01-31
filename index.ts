#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


var currency:string[] = [];
var amount:number;
var value:number;
async function getInput()
{
    const amountOfCurrency = await inquirer.prompt([{
        name:"value",
        type: "number",
        message: "Enter the amount of currency: " 
    }]);

    return amountOfCurrency.value;

}


async function PrimaryCurrency()
{
    const currencySelect = await inquirer.prompt([{
        name: "curre",
        type: "list",
        choices: ["Rs","$","€","£"],
        message: "Which Primary currency would you like to select?"
        
    },
    
    {
    name: "secondary",
    type: "list",
    choices: ["Rs","$","€","£"],
    message: "Which Secondary Currency would like to Select?"

    }]);

    amount = await getInput();
 
    if(currencySelect.curre === "Rs")
    {
        switch(currencySelect.secondary)
        {
            case "Rs":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1 * amount}`);
                break;
            case "$":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.0043 * amount}`)
                break;
            case "€":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.0040 * amount}`)
                break;
            case "£":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.0035 * amount}`)
                break;

        }


    }

    else if(currencySelect.curre === "$")
    {
        switch(currencySelect.secondary)
        {
            case "Rs":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${229.93 * amount}`)
                break;
            case "$":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1 * amount}`)
                break;
            case "€":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.93 * amount}`)
                break;
            case "£":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.81 * amount}`)
                break;
                
        }


    }

    else if(currencySelect.curre === "€")
    {
        switch(currencySelect.secondary)
        {
            case "Rs":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${248.63 * amount}`)
                break;
            case "$":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1.08 * amount}`)
                break;
            case "€":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1 * amount}`)
                break;
            case "£":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.88 * amount}`)
                break;
                
        }


    }


    else if(currencySelect.curre === "£")
    {
        switch(currencySelect.secondary)
        {
            case "Rs":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${283.54 * amount}`)
                break;
            case "$":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1.23 * amount}`)
                break;
            case "€":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${0.22 * amount}`)
                break;
            case "£":
                console.log(`Currency from ${currencySelect.curre} to ${currencySelect.secondary}: ${1 * amount}`)
                break;
                
        }


    }



}

var  ch:string;

do{
await PrimaryCurrency();
const decide = await inquirer.prompt([{
    name:"char",
    type: "string",
    message: "Do you want to continue?"
}]);

ch = decide.char;

}
while(ch === "Y" || ch === 'y');