#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
import { displayWelcomeMessage } from "./welcome.js";
import { UseOtherAccounts } from "./useAnotherAccount.js";
export { services }

interface bankAcount {
    acount_number: number
    balance: number
    deposite(amount: number): void
    wihdraw(amount: number): void
    check(): void
}

class Account implements bankAcount {
    acount_number: number;
    balance: number;
    constructor(accountNumber: number, Balance: number) {
        this.acount_number = accountNumber
        this.balance = Balance
    }
    deposite(amount: number): void {
        if (amount >= 100) {
            amount--
            let total = amount + this.balance
            this.balance = total
            console.log(chalk.green(`\nThe amount of $${amount} has been deposite in your account detected $1 as service fee`))
            console.log(chalk.cyan(`\nYour current balance is ${total}\n`))
        }
        else {
            let total = amount + this.balance
            this.balance = total
            console.log(chalk.green(`\nThe amount of $${amount} has been deposite in your account detected $1 as service fee`))
            console.log(chalk.cyan(`\nYour current balance is ${total}\n`))

        }
    }
    wihdraw(amount: number): void {
        if (amount <= this.balance) {

            let total = this.balance - amount
            this.balance = total
            console.log(chalk.green(`\nThe amount of $${amount} withdraw successfully from your account`))
            console.log(chalk.cyan(`\nYour current balance is $${total}\n`))

        }
        else {
            console.log(chalk.red(`\nInsufficient balance\n`))
        }
    }
    check(): void {
        console.log(chalk.green(`\nYour account balance is $${this.balance}\n`))
    }
}

class coustumerData {
    first_name: string
    last_name: string
    gender: string
    age: number
    mobile_number: number
    account: Account
    constructor(firstName: string, lastName: string, Gender: string, Age: number, mobileNumber: number, Account: Account) {
        this.first_name = firstName
        this.last_name = lastName
        this.gender = Gender
        this.age = Age
        this.mobile_number = mobileNumber
        this.account = Account
    }
}

let accounts: Account[] = [
    new Account(1001, 500),
    new Account(1002, 700),
    new Account(1003, 1000)
]
let AllCoustumers: coustumerData[] = [
    new coustumerData('Tehseen', 'Chandio', 'Male', 19, 920000001, accounts[0]),
    new coustumerData('Muzammil', 'Chandio', 'Male', 17, 92100000, accounts[1]),
    new coustumerData('Hassnain', 'Chandio', 'Male', 22, 92200000, accounts[2])
]


async function services() {
    let getAccountNumber = await inquirer.prompt([{
        name: "accountNum",
        type: 'number',
        message: chalk.blue('Enter your account number:')
    }])
    let coustumer = AllCoustumers.find(coustumer => coustumer.account.acount_number === getAccountNumber.accountNum)
    if (coustumer) {
        console.log(chalk.redBright(
            `\n                    <<<===>>> WELCOME ${coustumer.first_name} ${coustumer.last_name} <<<===>>>\n`))
        let selectAction = await inquirer.prompt([{
            name: 'action',
            type: 'list',
            message: chalk.magentaBright('Select an opration:'),
            choices: ['Deposite', 'Withdraw', 'Check balance', 'exit']
        }])
        switch (selectAction.action) {
            case 'Deposite':
                let EnterAmount = await inquirer.prompt([{
                    name: 'depositeAmount',
                    type: 'input',
                    message: chalk.yellow('Enter deposite amount:')
                }])
                coustumer.account.deposite(EnterAmount.depositeAmount)
                UseOtherAccounts()
                break;
            case 'Withdraw':
                let enterAmount = await inquirer.prompt([{
                    name: 'withdrawAmount',
                    type: 'input',
                    message: chalk.yellow('Enter withdraw amount:')
                }])
                coustumer.account.wihdraw(enterAmount.withdrawAmount)
                UseOtherAccounts()
                break;
            case 'Check balance':
                coustumer.account.check()
                UseOtherAccounts()
                break;

            case 'exit':
                console.log(chalk.greenBright('\nExiting the bank program....'))
                setTimeout(() => {
                    console.log(chalk.cyan('\nThank you for using our services. Have a nice day!.'))
                    return process.exit()
                }, 2000)

        }
    }
    else {
        console.log(chalk.red('\nInvalid account number.'))
        UseOtherAccounts()
    }

}
async function start() {
    await displayWelcomeMessage()
    await services()
}
start()
