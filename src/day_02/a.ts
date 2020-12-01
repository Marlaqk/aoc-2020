import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: fs.createReadStream('src/day_' + process.env['DAY'] + '/input/a.txt'),
    output: process.stdout,
    terminal: false
});

let numbers: Array<number> = [];
rl.on('line', (line) => numbers.push(Number(line)))

rl.on('close', () => {
    for(let i = 0; i < numbers.length; i++) {
        
    }
});
