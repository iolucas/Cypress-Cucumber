Feature: Calculator

    As a user, I would like to use the calculator
    To perform and verify various mathematical operations

Scenario: Calculate the total of a sum of values
    Given To access the app
    And Do a "sum"
    When Input the numbers "2" and "2"
    And Finish the operation
    Then The result should be "4"


