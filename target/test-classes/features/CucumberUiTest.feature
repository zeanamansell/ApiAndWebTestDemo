Feature: Searching for carbon credits in sandbox ui

  Acceptance Criteria:
  1. There is 114 search result when "Wine" is searched for
  2. There are 6 listings in the location Canterbury
  3. The title on the auction page of the first search result in canterbury is "Devil's Corkscrew"

@tag4
Scenario Outline: Verify the number of search results
  Given The TradeMe Sandbox home page
  When I search for "<searchText>"
  Then There is "<numSearchResults>" search results

  Examples:

    | searchText       | numSearchResults |
    | Wine             | 114              |
    | Pen              | 6                |

@tag5
Scenario Outline: There are 6 listings in the location Canterbury
  Given The TradeMe Sandbox home page
  When I search for "<searchText>"
  And I choose the location "<location>"
  Then There is "<numSearchResults>" search results

  Examples:

    | searchText | location    |  numSearchResults |
    | Wine       | Canterbury  | 6                 |
    | Pen        | Auckland    | 2                 |

@tag6
Scenario Outline: Verify that the title on the auction page is "Devil's Corkscrew"
  Given The TradeMe Sandbox home page
  When I search for "<searchText>"
  And I choose the location "<location>"
  And I click on the first result
  Then The title of the auction page is "<titleText>"

  Examples:

    | searchText | location     | titleText             |
    | Wine       | Canterbury   | A Big Little House    |
