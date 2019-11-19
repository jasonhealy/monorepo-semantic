"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtract = exports.add = exports.divide = exports.multiply = void 0;

var multiply = function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

exports.multiply = multiply;

var divide = function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

exports.divide = divide;

var add = function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

exports.add = add;

var subtract = function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

exports.subtract = subtract;