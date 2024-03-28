#! /usr/bin/env node

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let myPin = 1234;
let myBalace = 10000;

let input = await inquirer.prompt({
    name:"Atm Card",
    type:"input",
    message:"Enter Your Atm Card \n Press Enter"
})


let pinNumber = await inquirer.prompt([{
  name:"Pin",
  type:"number",
  message:`Please Enter your pin number:` 
}]);

if(pinNumber.Pin == myPin){
    console.log(`You ENTER A Right Pin Number`)

    let operations = await inquirer.prompt({
        name:"option",
        type:"list",
        message:"kindly select what you want to do:",
        choices:["Withdraw","Check balance","Fast track"],
    })

    if(operations.option == "Withdraw"){

        let balance = await inquirer.prompt({
            name:"Amount",
            type:"number",
            message:"Pleaase Enter an Amount you want to Withdraw"
        })
         
         if(balance.Amount > myBalace){
            console.log(`Insufficient Balance to withdraw this Amount`)
         }else{
            myBalace -= balance.Amount
         console.log(`Your Current balance is  ${myBalace}`)
         }
             
    }else if(operations.option == "Check balance"){
        console.log(`This is your current balance: ${myBalace}`)
    
    
    }else if (operations.option == "Fast track"){
        let quickWithdraw = await inquirer.prompt({
            name:"quickPay",
            type:"list",
            message:"Select the Amount:",
            choices:["2000", "5000", "10000", "15000" ]
        })
        if(quickWithdraw.quickPay > myBalace){
            console.log(`Insufficient Balance to withdraw this Amount`)
        }else{
            myBalace -= quickWithdraw.quickPay
         console.log(`Your Current balance is  ${myBalace}`)

        }
    
  
}

}else{
    console.log(`Incorrect Piin Number`)

}