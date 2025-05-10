const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { multiply } = require('../../src/calculator');

let a, b, result;


Given('the first number of the multiplication is {int}', function (number) {
  a = number;
});

Given('the second number of the multiplication is {int}', function (number) {
  b = number;
});

When('the numbers are multiplied', function () {
  result = multiply(a, b);
});

Then('the result of the multiplication should be {int}', function (expected) {
  assert.strictEqual(result, expected);
});

Then('the result of the multiplication should be positive', function () {
  assert.ok(result > 0);
});
