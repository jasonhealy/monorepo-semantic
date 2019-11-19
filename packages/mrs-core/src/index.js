import { multiply, add, subtract, divide } from "mrs-utils";

export const asmd = (firstNumber, secondNumber) => {
  return {
    add: add(firstNumber, secondNumber),
    subtract: subtract(firstNumber, secondNumber),
    multiply: multiply(firstNumber, secondNumber),
    divide: divide(firstNumber, secondNumber)
  };
};
