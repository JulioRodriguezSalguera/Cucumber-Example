const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { subtract } = require('../../src/calculator');

let a, b, result;


Given('the first number of the subtraction is {int}', function (number) {
  a = number;
});

Given('the second number of the subtraction is {int}', function (number) {
  b = number;
});

When('the numbers are subtracted', function () {
  result = subtract(a, b);
});

Then('the result of the subtraction should be {int}', function (expected) {
  assert.strictEqual(result, expected);
});
