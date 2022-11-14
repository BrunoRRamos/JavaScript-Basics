import fs from 'fs';
import chalk from 'chalk';

function catchError(error) {
    throw new Error(chalk.red(error.code, "Reading Error"));
}

//Async and Await.
async function catchArchiveAsync(archiveRoute) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(archiveRoute, encoding);
    console.log(chalk.green(text))
    } catch (error) {
        catchError(error);
    }
}
const archiveRoute = './text.md';
catchArchiveAsync(archiveRoute)