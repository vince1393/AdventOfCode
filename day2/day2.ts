// https://adventofcode.com/2019/day/2
// day 2

import { intcode } from "../constants/constants";

let input: number[] = intcode.slice();
let index: number = 0;

export const part1 = (num1: number, num2: number) => {
  input = intcode.slice();
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

export const part2 = (targetOutput: number) => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      let output = part1(noun, verb);
      if (output === targetOutput) return 100 * noun + verb;
    }
  }
};
