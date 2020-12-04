import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: fs.createReadStream('src/day_' + process.env['DAY'] + '/input/a.txt'),
    output: process.stdout,
    terminal: false
});

let sum = 0;

rl.on('line', (line) => {
    sum += Number(line)
})

rl.on('close', () => {
    console.log(sum)
});
