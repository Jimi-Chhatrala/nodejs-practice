import chalk from "chalk";
import validator from "validator";

// console.log(chalk.green.inverse("True Success"));
// console.log(chalk.red.inverse("False Failure"));

const result = validator.isEmail("jimi@gmail.com");
// const result = validator.isEmail("jimi@gmail.com");
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));

// console.log(chalk.blue("Blue\n"));
// console.log(chalk.blue.underline("Blue\n"));
// console.log(chalk.blue.underline.inverse("Blue\n"));
// console.log(chalk.blue.italic("Blue\n"));
// console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
