import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: fs.createReadStream('src/day_' + process.env['DAY'] + '/input/a.txt'),
    output: process.stdout,
    terminal: false
});

let lineCount = 0;
let entries: string[] = [];
rl.on('line', (line) => {
    if (line == '') {
        lineCount++;
    }
    if (entries[lineCount] == undefined) {
        entries.push(line);
    } else {
        entries[lineCount] = entries[lineCount].concat(line);
    }
})

rl.on('close', () => {
    console.log(solve(entries));
});

function solve(entries: string[]) {
    let sum = 0;
    for(let i = 0; i < entries.length; i++) {
        sum += [...new Set(entries[i])].length;
    }
    return sum;
}