import fs from 'fs';
import chalk from 'chalk';

function catchError(error) {
    throw new Error(chalk.red(error.code, "Reading Error"));
}

function catchArchive(achiveRoute) {
    const encoding = 'utf-8'
    fs.readFile(achiveRoute, encoding, (error, textFile) => {
        if (error) {
            catchError(error);
        }
        console.log(chalk.green(textFile));
    });
}

catchArchive('./text.md')