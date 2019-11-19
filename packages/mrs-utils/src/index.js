export const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

export const divide = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};

export const add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

export const subtract = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

export const percent = (firstNumber, secondNumber) => {
  return divide(firstNumber, 100) * secondNumber;
};
