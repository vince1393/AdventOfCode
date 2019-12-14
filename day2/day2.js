"use strict";
// https://adventofcode.com/2019/day/2
// day 2
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
let input = constants_1.intcode.slice();
let index = 0;
exports.part1 = (num1, num2) => {
    input = constants_1.intcode.slice();
    index = 0;
    input[1] = num1;
    input[2] = num2;
    while (input[index] !== 99) {
        const opCode = input[index];
        const num1Index = input[index + 1];
        const num1 = input[num1Index];
        const num2Index = input[index + 2];
        const num2 = input[num2Index];
        const destinationIndex = input[index + 3];
        switch (opCode) {
            case 1:
                input[destinationIndex] = num1 + num2;
                break;
            case 2:
                input[destinationIndex] = num1 * num2;
                break;
            default:
                break;
        }
        index += 4;
    }
    return input[0];
};
exports.part2 = (targetOutput) => {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            let output = exports.part1(noun, verb);
            if (output === targetOutput)
                return 100 * noun + verb;
        }
    }
};
