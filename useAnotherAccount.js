import inquirer from "inquirer";
import chalk from "chalk";
import { services } from "./main.js";
async function UseOtherAccounts() {
    let ask = await inquirer.prompt([{
            name: 'again',
            type: 'list',
            message: chalk.magentaBright('use another account?'),
            choices: ['Yes', 'No']
        }]);
    if (ask.again === 'Yes') {
        services();
    }
    else {
        process.exit();
    }
}
export { UseOtherAccounts };
