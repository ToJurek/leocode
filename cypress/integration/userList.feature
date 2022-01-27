Feature: User List App

  Scenario Outline: Search Filter
    Given Valid data will be returned
    And User goes to main page
    And The list is visible
    When User types "<query>" in search field
    Then List contains "<count>" items

    Examples:
      |   query |  count |
      |     Max |      3 |
      |     max |      3 |
      |     ?!  |      1 |
      |     MAX |      3 |
      |   maxym |      2 |
      |   maXYm |      2 |
      |    @Max |      0 |

  Scenario: No response
    Given Invalid response will be returned
    And User goes to main page
    Then Error alter is visible