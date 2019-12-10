"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day1_1 = require("./day1/day1");
console.log(`Day 1 - ${day1_1.calculateFuel()} litres of fuel needed`);
console.log(`Day 1, Part 2 - ${day1_1.calculateFuel()} total fuel needed`);
console.log(day1_1.calculateFuelFromMass(100756), day1_1.calculateFuelOfFuel(day1_1.calculateFuelFromMass(100756)));
