import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: fs.createReadStream('src/day_' + process.env['DAY'] + '/input/a.txt'),
    output: process.stdout,
    terminal: false
});

let passports: string[] = [];
let tmp_passport_collection = '';
rl.on('line', (line) => {
    if (line == '') {
        passports.push(tmp_passport_collection);
        tmp_passport_collection = '';
        return;
    }
    tmp_passport_collection += line;
})

rl.on('close', () => {
    passports.push(tmp_passport_collection);
    const valid_password_elements = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];
    let valid_passport = 0;
    console.log(passports.length)
    for(let i = 0; i < passports.length; i++) {
        if (
            validBirthday(passports[i]) &&
            validIssueYear(passports[i])
        ) {
            valid_passport++;
        }
    }
    console.log(valid_passport);
});

function validBirthday(passport) {
    if (passport.indexOf('byr:') < 0) {
        return false;
    }

    const birthYear = Number(passport.substr(passport.indexOf('byr:')+4, 4));
    return birthYear >= 1920 && birthYear <= 2002;
}

function validIssueYear(passport) {
    if (passport.indexOf('iyr:') < 0) {
        return false;
    }

    const birthYear = Number(passport.substr(passport.indexOf('iyr:')+4, 4));
    return birthYear >= 2010 && birthYear <= 2020;
}