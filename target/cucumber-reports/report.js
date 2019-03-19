$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CucumberUiTest.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for carbon credits in sandbox ui",
  "description": "\nAcceptance Criteria:\n1. There is 113 search result when \"Wine\" is searched for\n2. There are 6 listings in the location Canterbury\n3. The title on the auction page of the first search result in canterbury is \"Devil\u0027s Corkscrew\"",
  "id": "searching-for-carbon-credits-in-sandbox-ui",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that there is 114 search result when searching for \"Wine\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-114-search-result-when-searching-for-\"wine\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \"\u003csearchText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "There is \"\u003cnumSearchResults\u003e\" search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-114-search-result-when-searching-for-\"wine\";",
  "rows": [
    {
      "cells": [
        "searchText",
        "numSearchResults"
      ],
      "line": 16,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-114-search-result-when-searching-for-\"wine\";;1"
    },
    {
      "cells": [
        "Wine",
        "114"
      ],
      "line": 17,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-114-search-result-when-searching-for-\"wine\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that there is 114 search result when searching for \"Wine\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-114-search-result-when-searching-for-\"wine\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \"Wine\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "There is \"114\" search results",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 6603685055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wine",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 3763493335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "114",
      "offset": 10
    }
  ],
  "location": "MyUiStepdefs.thereIsSearchResults(String)"
});
formatter.result({
  "duration": 44175593,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "There are 6 listings in the location Canterbury",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;there-are-6-listings-in-the-location-canterbury",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search for \"\u003csearchText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I choose the location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "There is \"\u003cnumSearchResults\u003e\" search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;there-are-6-listings-in-the-location-canterbury;",
  "rows": [
    {
      "cells": [
        "searchText",
        "location",
        "numSearchResults"
      ],
      "line": 28,
      "id": "searching-for-carbon-credits-in-sandbox-ui;there-are-6-listings-in-the-location-canterbury;;1"
    },
    {
      "cells": [
        "Wine",
        "Canterbury",
        "6"
      ],
      "line": 29,
      "id": "searching-for-carbon-credits-in-sandbox-ui;there-are-6-listings-in-the-location-canterbury;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "There are 6 listings in the location Canterbury",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;there-are-6-listings-in-the-location-canterbury;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search for \"Wine\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I choose the location \"Canterbury\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "There is \"6\" search results",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 4460625786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wine",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 4204799509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canterbury",
      "offset": 23
    }
  ],
  "location": "MyUiStepdefs.iChooseTheLocation(String)"
});
formatter.result({
  "duration": 753558356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 10
    }
  ],
  "location": "MyUiStepdefs.thereIsSearchResults(String)"
});
formatter.result({
  "duration": 32775760,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify that the title on the auction page is \"Devil\u0027s Corkscrew\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"devil\u0027s-corkscrew\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I search for \"\u003csearchText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I choose the location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on the first result",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The title of the auction page is \"\u003ctitleText\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"devil\u0027s-corkscrew\";",
  "rows": [
    {
      "cells": [
        "searchText",
        "location",
        "titleText"
      ],
      "line": 41,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"devil\u0027s-corkscrew\";;1"
    },
    {
      "cells": [
        "Wine",
        "Canterbury",
        "A Big Little House"
      ],
      "line": 42,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"devil\u0027s-corkscrew\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that the title on the auction page is \"Devil\u0027s Corkscrew\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"devil\u0027s-corkscrew\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "The TradeMe Sandbox home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I search for \"Wine\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I choose the location \"Canterbury\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on the first result",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The title of the auction page is \"A Big Little House\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 4348438880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wine",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 1618206113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canterbury",
      "offset": 23
    }
  ],
  "location": "MyUiStepdefs.iChooseTheLocation(String)"
});
formatter.result({
  "duration": 797526787,
  "status": "passed"
});
formatter.match({
  "location": "MyUiStepdefs.iClickOnTheFirstResult()"
});
formatter.result({
  "duration": 2565088625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A Big Little House",
      "offset": 34
    }
  ],
  "location": "MyUiStepdefs.theTitleOfTheAuctionPageIs(String)"
});
formatter.result({
  "duration": 95730462,
  "status": "passed"
});
});