import { calculateFuel } from "./day1/day1";
import { part2, part1 } from "./day2/day2";

console.log(`Day 1 - ${calculateFuel()} litres of fuel needed`);

console.log(`Day 1, Part 2 - ${calculateFuel()} total fuel needed`);

console.log(`Day 2, Part 1 - The value at position 0 is ${part1(12, 2)}`);

console.log(
  `Day 2, Part 1 - The value provided with the target input of 19690720 is ${part2(
    19690720
  )}`
);
