const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./utils/generateMarkDown")

const questions = [{
        type: "input",
        name: "title",
        message: "Enter your project title on the command line."
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description here."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter instructions on how to install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter information on how to use the project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter any contributions from other projects."
    },
    {
        type: "input",
        name: "test",
        message: "Enter any instructions for testing this project."
    },
    {
        type: "input",
        name: "license",
        message: "Enter what type of license you are using."
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    },
];

function writeHTML(filename, data) {
    fs.writeFile("index.html", html(data), function(err) {
        if (err) {
            console.log("Why...", err)
        } else {
            console.log("You Did IT, Person!!")
        }
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile("README.md", data)
        });
}

init();