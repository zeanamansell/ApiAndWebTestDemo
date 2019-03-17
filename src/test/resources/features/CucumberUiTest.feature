Feature: Searching for carbon credits in sandbox ui

  Acceptance Criteria:
  1. There is one search result when "Carbon credits" is searched for
  2. The location for the top search result is Auckland
  3. The title on the auction page of the first search result is "Carbon Credit - zero flatulence"

@tag4
Scenario Outline: Verify that there is 1 search result when searching for "Carbon credits"
  Given The TradeMe Sandbox home page
  When I search for "<searchText>"
  Then There is "<numSearchResults>" search results

  Examples:

    | searchText       | numSearchResults |
    | Carbon credits   | 1                |

#@tag5
#Scenario Outline: Verify that the top search result location is Auckland
#  Given The TradeMe Sandbox home page
#  When I search for "<searchText>"
#  And I view the search results as a list
#  Then The location of the top search result is "<location>"
#
#  Examples:
#
#    | searchText       | location  |
#    | Carbon credits   | Auckland       |

@tag6
Scenario Outline: Verify that the title on the auction page is "Carbon credits - zero flatulence"
  Given The TradeMe Sandbox home page
  When I search for "<searchText>"
  And I click on the first result
  Then The title of the auction page is "<titleText>"

  Examples:

    | searchText       | titleText                            |
    | Carbon credits   | Carbon Credit - zero flatulence      |
