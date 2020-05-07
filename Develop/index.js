const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub Username?"
},
{
    type: "input",
    name: "projectTitle",
    message: "What is the name of your Project?"
},
{
    type: "input",
    name: "description",
    message: "What is your Project about?"
},
{
    type: "input",
    name: "install",
    message: "How should the application install?"
},
{
    type: "input",
    name: "usage",
    message: "What is the usage of Project?"
},
{
    type: "input",
    name: "license",
    message: "What is your license?"
},
{
    type: "input",
    name: "contributing",
    message: "How do you contribute?"
},
{
    type: "input",
    name: "tests",
    message: "How to run a test?"
}
];

async function init() {
    const answer = await inquirer.prompt(questions)
    const gitResp = await api.userInfo(answer.username)

    const data = {
        title: answer.projectTitle,
        description: answer.description,
        install: answer.install,
        usage: answer.usage,
        license: answer.license,
        contributing: answer.contributing,
        tests: answer.tests,
        image: gitResp.data.avatar_url,
        username: gitResp.data.login,
        email: gitResp.data.email
    }

    const markString = generateMarkdown(data)
    

    fs.writeFile("README.md", markString, (err) => {
        if (err) throw err;
        console.log("README.md has been successfully saved!");
      });
}


init();
