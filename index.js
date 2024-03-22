#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game!");
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("You guessed the wrong number");
}
