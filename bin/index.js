#!/usr/bin/env node

require('colors');
const inquirer = require('inquirer');

const { manacher } = require('../src/manacher');

function main() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'string',
        message: 'Hi, What is your string to find the longest palindrome?',
      },
    ])
    .then((answers) => {
      const lps = manacher(answers.string);
      console.log(`The longest palindrome is ${lps.green}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
