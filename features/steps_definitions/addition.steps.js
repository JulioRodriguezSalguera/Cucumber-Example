const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { addition } = require('../../src/calculator');

let a, b, result;

Given('the first number is {int}', function (number) {
  a = number;
});

Given('the second number is {int}', function (number) {
  b = number;
});

When('the numbers are added', function () {
  result = addition(a, b);
});

Then('the result should be {int}', function (expected) {
  assert.strictEqual(result, expected);
});
