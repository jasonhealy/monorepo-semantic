import { multiply, add, subtract, divide, percent } from "mrs-utils";

export const asmd = (firstNumber, secondNumber) => {
  return {
    add: add(firstNumber, secondNumber),
    subtract: subtract(firstNumber, secondNumber),
    multiply: multiply(firstNumber, secondNumber),
    divide: divide(firstNumber, secondNumber)
  };
};

export const advanced = () => {
  return "Advanced";
};

export const superAdvanced = () => {
  return percent(3000, 30);
};
