#! /usr/bin/env node
import inquirer from 'inquirer';

const calc = await inquirer.prompt([{
    message :"Please Enter First Number :",
    type: "number",
    name:"Num1",
},{
    message :"Please Enter Second Number :",
    type: "number",
    name:"Num2",   
},{
    message :"Choose Your Operator To Perform :",
    type: "list",
    name:"Operators",
    choices :["+","-","*","/","^","%","Remainder"]   
}
]);
if (calc.Operators === "+") {
    console.log(`Your Answer IS : ${calc.Num1} + ${calc.Num2} = `, calc.Num1 + calc.Num2);
}
else if (calc.Operators === "-"){
    console.log(`Your Answer IS : ${calc.Num1} - ${calc.Num2} = `, calc.Num1 - calc.Num2);
}
else if (calc.Operators === "*"){
    console.log(`Your Answer IS : ${calc.Num1} * ${calc.Num2} = `, calc.Num1 * calc.Num2);
}
else if (calc.Operators === "/"){
    console.log(`Your Answer IS : ${calc.Num1} / ${calc.Num2} = `, calc.Num1 / calc.Num2);
}
else if (calc.Operators === "^"){
    console.log(`Your Answer IS : ${calc.Num1} ^ ${calc.Num2} = `, calc.Num1 ** calc.Num2);
}
else if (calc.Operators === "%"){
    console.log(`Your Answer IS : ${calc.Num1} * ${calc.Num2} % = `, calc.Num1 * calc.Num2 / 100);
}
else if (calc.Operators === "Remainder"){
    console.log(`Your Answer IS : ${calc.Num1} / ${calc.Num2} Remainder Will Be = `, calc.Num1 % calc.Num2);
}
else{
    console.log("PLease Enter Your Value");
}