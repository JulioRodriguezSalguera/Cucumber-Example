Feature: Multiply two negative numbers

  Scenario: Multiply -4 and -3
    Given the first number of the multiplication is -4
    And the second number of the multiplication is -3
    When the numbers are multiplied
    Then the result of the multiplication should be 12
    But the result of the multiplication should be positive
