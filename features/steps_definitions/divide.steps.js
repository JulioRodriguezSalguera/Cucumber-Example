const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { divide } = require('../../src/calculator');

let a, b, divisionResult, divisionError;

Given('the first number of the division is {int}', function (number) {
  a = number;
});

Given('the second number of the division is {int}', function (number) {
  b = number;
});

When('the numbers are divided', function () {
  try {
    divisionResult = divide(a, b);
    divisionError = null;
  } catch (err) {
    divisionError = err;
  }
});

Then('an error should be thrown', function () {
  assert.ok(divisionError instanceof Error);
  assert.strictEqual(divisionError.message, 'Cannot divide by 0');
});
