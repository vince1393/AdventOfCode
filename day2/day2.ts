// https://adventofcode.com/2019/day/2
// day 2

import { intcode } from "../constants/constants";

let input: number[] = intcode;
let index: number = 0;

const restoreValues = () => {
  input[1] = 12;
  input[2] = 2;
};

export const calculate = () => {
  restoreValues();
  if (input[index] === 1) {
    input[input[index + 3]] = input[input[index + 1]] + input[input[index + 2]];
  } else if (input[index] === 2) {
    input[input[index + 3]] = input[input[index + 1]] * input[input[index + 2]];
  } else return input[0];
  index += 4;
  return calculate();
};
