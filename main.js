#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "What is encapsulation in OOP?",
        choices: ["a) Hiding the internal state and requiring all interaction to be performed through an object's methods.", "b) Creating new objects.", "c) Using methods of another object.", "d) The ability of different objects to respond to the same function call."]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Which of the following best describes inheritance?",
        choices: ["a) The process by which one class takes on the attributes and methods of another", "b) The process of bundling data and methods.", "c) The concept of hiding implementation details.", "d) None of the above."]
    },
    {
        name: "Question_3",
        type: "list",
        message: "Polymorphism allows:?",
        choices: ["a) Multiple forms of a single function.", "b) Hiding internal state.", "c) Creation of new objects.", "d) Inheriting properties."]
    },
    {
        name: "Question_4",
        type: "list",
        message: "In the context of OOP, what is abstraction?",
        choices: ["a) The process of hiding complex implementation details.", "b) The process of creating instances.", "c) A feature that allows one interface to be used for a general class of actions.", "d) The capability of an object to take on many forms."]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Which of the following is an example of encapsulation?",
        choices: ["a) Inheriting methods from another class.", "b) Creating multiple forms of a method.", "c) Restricting access to certain components.", "d) None of the above."]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "a) Hiding the internal state and requiring all interaction to be performed through an object's methods.":
        console.log("1. correct");
        ++score;
        break;
    default:
        console.log("incorrect");
}
switch (quiz.Question_2) {
    case "a) The process by which one class takes on the attributes and methods of another":
        console.log("2. correct");
        ++score;
        break;
    default:
        console.log("incorrect");
}
switch (quiz.Question_3) {
    case "a) Multiple forms of a single function.":
        console.log("3. correct");
        ++score;
        break;
    default:
        console.log("incorrect");
}
switch (quiz.Question_4) {
    case "a) The process of hiding complex implementation details.":
        console.log("4. correct");
        ++score;
        break;
    default:
        console.log("incorrect");
}
switch (quiz.Question_5) {
    case "c) Restricting access to certain components.":
        console.log("5. correct");
        ++score;
        break;
    default:
        console.log("incorrect");
}
console.log(`Score: ${score}`);
