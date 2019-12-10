"use strict";
//https://adventofcode.com/2019/day/1
//Day 1
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
exports.calculateFuel = () => {
    let totalFuel = 0;
    constants_1.masses.forEach((mass) => {
        totalFuel += exports.calculateFuelOfFuel(exports.calculateFuelFromMass(mass));
    });
    return totalFuel;
};
exports.calculateFuelFromMass = (mass) => Math.floor(mass / 3) - 2;
exports.calculateFuelOfFuel = (fuel) => {
    let fuelForFuel = exports.calculateFuelFromMass(fuel);
    if (fuelForFuel <= 0)
        return fuel;
    else
        return (fuel += exports.calculateFuelOfFuel(fuelForFuel));
};
