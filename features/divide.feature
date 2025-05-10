Feature: Division of two numbers, with the second number being 0

  Scenario: Division of 0 by 0
    Given the first number of the division is 0
    And the second number of the division is 0
    When the numbers are divided
    Then an error should be thrown
