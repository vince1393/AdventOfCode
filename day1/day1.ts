//https://adventofcode.com/2019/day/1
//Day 1

import { masses } from "../constants/constants";

export const calculateFuel = (): number => {
  let totalFuel = 0;
  masses.forEach((mass: number) => {
    totalFuel += calculateFuelOfFuel(calculateFuelFromMass(mass));
  });
  return totalFuel;
};

export const calculateFuelFromMass = (mass: number): number =>
  Math.floor(mass / 3) - 2;

export const calculateFuelOfFuel = (fuel: number): number => {
  let fuelForFuel = calculateFuelFromMass(fuel);
  if (fuelForFuel <= 0) return fuel;
  else return (fuel += calculateFuelOfFuel(fuelForFuel));
};
