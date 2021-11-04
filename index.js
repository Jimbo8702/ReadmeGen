const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github Username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Projects name?",
      name: "projectname",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE"],
      name: "license",
    },
    {
      type: "input",
      message: "What command should be used to install all dependences",
      name: "comand",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "comand2",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "know",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "answer",
    },
  ])
  .then((response) => {
    const {
      username,
      email,
      projectname,
      description,
      license,
      comand,
      comand2,
      know,
      answer,
    } = response;
    const readme = `# ${projectname}



    ## Description
    
    ${description}
    
    
    ### Dependencies
    
    * Use ${comand} to install all dependencies
    * To run test use ${comand2}
    
    
    
    ### Using Repo
    
    * ${know}
    
    
    ## Contributing
    
    * ${answer}
    
    
    ## Authors
    
    ${username}
    * Contact me: ${email}
    
    
    ## License
    
    This project is licensed under the ${license} License - see the LICENSE.md file for details`;

    fs.writeFile("Readme.md", readme, (err) =>
      err ? console.error(err) : console.log("success!")
    );
  });
