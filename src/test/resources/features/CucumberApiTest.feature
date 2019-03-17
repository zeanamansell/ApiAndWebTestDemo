Feature: Testing the API

  Acceptance Criteria:
  1. Name = "Carbon credits"
  2. CanRelist = true
  3. The Promotions element with Name = "Gallery" has a Description that contains the text "2x larger image"

  @tag1
  Scenario Outline: Verify that the Name element is equal to "Carbon credits"
    Given The API URI under test
    When  I send a GET request
    Then I can validate that the Name is "<expectedName>"

    Examples:

      | expectedName    |
      | Carbon credits  |


  @tag2
  Scenario: Verify that the CanRelist element is true
    Given The API URI under test
    When I send a GET request
    Then I can validate that CanRelist is true


  @tag3
  Scenario Outline: Verify that the Promotions element with Name equal to "Gallery" has a Description that contains the text "2x larger image"
    Given The API URI under test
    When I send a GET request
    Then I can validate that the Promotions element with Name "<promotionName>" has a Description that contains the text "<promotionDescription>"

    Examples:

      | promotionName | promotionDescription |
      | Gallery       | 2x larger image      |
