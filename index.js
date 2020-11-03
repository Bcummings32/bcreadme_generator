const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');

const responses = 
 [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?"
        
        // default: '',
        // validate: function (answer){
        //     if (answer.length < 1) {
        //         return console.log("A valid name is required.");
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
        
        // default: '',
        // validate: function (answer){
        //     if (answer.length < 1) {
        //         return console.log("A valid name is required.");
        //     }
        //     return true;
        // },

    },
    {
    type: 'input',
    name: 'username',
    message: "What is your Github username?"
    
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid name is required.");
    //     }
    //     return true;
    // }
    },
    {  
    type: 'input',
    name: 'title',
    message: "What is your ReadMe title?"
  
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid title is required.");
    //     }
    //     return true;
    // }
    },
    {
    type: 'input', 
    name: 'description',
    message: "Enter a brief description"
   
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid name is required.");
    //     }
    //     return true;
    // }
    },
    {
    type: 'input',
    name: 'guidelines',
    message: "Are there any guidlines for how developers can contribute to your project?"
    
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid name is required.");
    //     }
    //     return true;
    // }
    },
    {
    type: 'input',
    message: "What is your name?",
    name: 'name',
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid name is required.");
    //     }
    //     return true;
    // }
    },
    {
    type: 'input',
    message: "Provide any tests for your application on how to run them.",
    name: 'tests',
    // default: '',
    // validate: function (answer){
    //     if (answer.length < 1) {
    //         return console.log("A valid name is required.");
    //     }
    //     return true;
    // }
    }]

function createMarkdown(data) {
    return ` 
    ##Name ${data.name}
    ##Email ${data.email}
    ##Username ${data.username}
    ##description ${data.description}
    
    
    `
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data) 
    }
    function promptUser() {
        inquirer.prompt(responses).then( function(inquirerResponses) {
            writeToFile("README.md", createMarkdown({...inquirerResponses}))
        })

    }



promptUser();

