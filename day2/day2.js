"use strict";
// https://adventofcode.com/2019/day/2
// day 2
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
let input = constants_1.intcode;
let index = 0;
const restoreValues = () => {
    input[1] = 12;
    input[2] = 2;
};
exports.calculate = () => {
    restoreValues();
    if (input[index] === 1) {
        input[input[index + 3]] = input[input[index + 1]] + input[input[index + 2]];
    }
    else if (input[index] === 2) {
        input[input[index + 3]] = input[input[index + 1]] * input[input[index + 2]];
    }
    else
        return input[0];
    index += 4;
    return exports.calculate();
};
