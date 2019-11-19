"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advanced = exports.asmd = void 0;

var _mrsUtils = require("mrs-utils");

var asmd = function asmd(firstNumber, secondNumber) {
  return {
    add: (0, _mrsUtils.add)(firstNumber, secondNumber),
    subtract: (0, _mrsUtils.subtract)(firstNumber, secondNumber),
    multiply: (0, _mrsUtils.multiply)(firstNumber, secondNumber),
    divide: (0, _mrsUtils.divide)(firstNumber, secondNumber)
  };
};

exports.asmd = asmd;

var advanced = function advanced() {
  return "Advanced";
};

exports.advanced = advanced;