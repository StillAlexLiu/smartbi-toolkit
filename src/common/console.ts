import chalk from 'chalk';

export const log = (msg: any) => {
    console.log(msg)
}
export const info = (msg: any) => {
    console.log(chalk.blue(msg))
}
export const warn = (msg: any) => {
    console.log(chalk.yellow(msg))
}
export const error = (msg: any) => {
    console.log(chalk.red(msg))
}
export const success = (msg: any) => {
    console.log(chalk.green(msg))
}
