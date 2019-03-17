$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CucumberApiTest.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the API",
  "description": "\nAcceptance Criteria:\n1. Name \u003d \"Carbon credits\"\n2. CanRelist \u003d true\n3. The Promotions element with Name \u003d \"Gallery\" has a Description that contains the text \"2x larger image\"",
  "id": "testing-the-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that the Name element is equal to \"Carbon credits\"",
  "description": "",
  "id": "testing-the-api;verify-that-the-name-element-is-equal-to-\"carbon-credits\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The API URI under test",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can validate that the Name is \"\u003cexpectedName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-the-api;verify-that-the-name-element-is-equal-to-\"carbon-credits\";",
  "rows": [
    {
      "cells": [
        "expectedName"
      ],
      "line": 16,
      "id": "testing-the-api;verify-that-the-name-element-is-equal-to-\"carbon-credits\";;1"
    },
    {
      "cells": [
        "Carbon credits"
      ],
      "line": 17,
      "id": "testing-the-api;verify-that-the-name-element-is-equal-to-\"carbon-credits\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that the Name element is equal to \"Carbon credits\"",
  "description": "",
  "id": "testing-the-api;verify-that-the-name-element-is-equal-to-\"carbon-credits\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The API URI under test",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can validate that the Name is \"Carbon credits\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyApiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 339443658,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 3726269522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carbon credits",
      "offset": 33
    }
  ],
  "location": "MyApiStepdefs.iCanValidateThatTheNameIs(String)"
});
formatter.result({
  "duration": 786632624,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that the CanRelist element is true",
  "description": "",
  "id": "testing-the-api;verify-that-the-canrelist-element-is-true",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "The API URI under test",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I can validate that CanRelist is true",
  "keyword": "Then "
});
formatter.match({
  "location": "MyApiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 49328,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 204952388,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iCanValidateThatCanRelistIsTrue()"
});
formatter.result({
  "duration": 28149574,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify that the Promotions element with Name equal to \"Gallery\" has a Description that contains the text \"2x larger image\"",
  "description": "",
  "id": "testing-the-api;verify-that-the-promotions-element-with-name-equal-to-\"gallery\"-has-a-description-that-contains-the-text-\"2x-larger-image\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "The API URI under test",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I can validate that the Promotions element with Name \"\u003cpromotionName\u003e\" has a Description that contains the text \"\u003cpromotionDescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "testing-the-api;verify-that-the-promotions-element-with-name-equal-to-\"gallery\"-has-a-description-that-contains-the-text-\"2x-larger-image\";",
  "rows": [
    {
      "cells": [
        "promotionName",
        "promotionDescription"
      ],
      "line": 35,
      "id": "testing-the-api;verify-that-the-promotions-element-with-name-equal-to-\"gallery\"-has-a-description-that-contains-the-text-\"2x-larger-image\";;1"
    },
    {
      "cells": [
        "Gallery",
        "2x larger image"
      ],
      "line": 36,
      "id": "testing-the-api;verify-that-the-promotions-element-with-name-equal-to-\"gallery\"-has-a-description-that-contains-the-text-\"2x-larger-image\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Verify that the Promotions element with Name equal to \"Gallery\" has a Description that contains the text \"2x larger image\"",
  "description": "",
  "id": "testing-the-api;verify-that-the-promotions-element-with-name-equal-to-\"gallery\"-has-a-description-that-contains-the-text-\"2x-larger-image\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "The API URI under test",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I can validate that the Promotions element with Name \"Gallery\" has a Description that contains the text \"2x larger image\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyApiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 39554,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 235873894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gallery",
      "offset": 54
    },
    {
      "val": "2x larger image",
      "offset": 105
    }
  ],
  "location": "MyApiStepdefs.iCanValidateThatThePromotionsElementWithNameHasADescriptionThatContainsTheText(String,String)"
});
formatter.result({
  "duration": 49827873,
  "status": "passed"
});
formatter.uri("CucumberUiTest.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for carbon credits in sandbox ui",
  "description": "\nAcceptance Criteria:\n1. There is one search result when \"Carbon credits\" is searched for\n2. The location for the top search result is Auckland\n3. The title on the auction page of the first search result is \"Carbon Credit - zero flatulence\"",
  "id": "searching-for-carbon-credits-in-sandbox-ui",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that there is 1 search result when searching for \"Carbon credits\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-1-search-result-when-searching-for-\"carbon-credits\"",
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
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-1-search-result-when-searching-for-\"carbon-credits\";",
  "rows": [
    {
      "cells": [
        "searchText",
        "numSearchResults"
      ],
      "line": 16,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-1-search-result-when-searching-for-\"carbon-credits\";;1"
    },
    {
      "cells": [
        "Carbon credits",
        "1"
      ],
      "line": 17,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-1-search-result-when-searching-for-\"carbon-credits\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that there is 1 search result when searching for \"Carbon credits\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-there-is-1-search-result-when-searching-for-\"carbon-credits\";;2",
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
  "name": "I search for \"Carbon credits\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "There is \"1\" search results",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 7142677629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carbon credits",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 2775939340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "MyUiStepdefs.thereIsSearchResults(String)"
});
formatter.result({
  "duration": 35254832,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify that the top search result location is Auckland",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-top-search-result-location-is-auckland",
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
  "name": "I view the search results as a list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The location of the top search result is \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-top-search-result-location-is-auckland;",
  "rows": [
    {
      "cells": [
        "searchText",
        "location"
      ],
      "line": 28,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-top-search-result-location-is-auckland;;1"
    },
    {
      "cells": [
        "Carbon credits",
        "Auckland"
      ],
      "line": 29,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-top-search-result-location-is-auckland;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that the top search result location is Auckland",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-top-search-result-location-is-auckland;;2",
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
  "name": "I search for \"Carbon credits\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I view the search results as a list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The location of the top search result is \"Auckland\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 4350996901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carbon credits",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 2617604536,
  "status": "passed"
});
formatter.match({
  "location": "MyUiStepdefs.iViewTheSearchResultsAsAList()"
});
formatter.result({
  "duration": 2149325423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auckland",
      "offset": 42
    }
  ],
  "location": "MyUiStepdefs.theLocationOfTheTopSearchResultIs(String)"
});
formatter.result({
  "duration": 776755098,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify that the title on the auction page is \"Carbon credits - zero flatulence\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"carbon-credits---zero-flatulence\"",
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
  "name": "I click on the first result",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The title of the auction page is \"\u003ctitleText\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"carbon-credits---zero-flatulence\";",
  "rows": [
    {
      "cells": [
        "searchText",
        "titleText"
      ],
      "line": 40,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"carbon-credits---zero-flatulence\";;1"
    },
    {
      "cells": [
        "Carbon credits",
        "Carbon Credit - zero flatulence"
      ],
      "line": 41,
      "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"carbon-credits---zero-flatulence\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Verify that the title on the auction page is \"Carbon credits - zero flatulence\"",
  "description": "",
  "id": "searching-for-carbon-credits-in-sandbox-ui;verify-that-the-title-on-the-auction-page-is-\"carbon-credits---zero-flatulence\";;2",
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
  "name": "I search for \"Carbon credits\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on the first result",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The title of the auction page is \"Carbon Credit - zero flatulence\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyUiStepdefs.theAPIURIUnderTest()"
});
formatter.result({
  "duration": 3958085683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carbon credits",
      "offset": 14
    }
  ],
  "location": "MyUiStepdefs.iSearchFor(String)"
});
formatter.result({
  "duration": 5066041375,
  "status": "passed"
});
formatter.match({
  "location": "MyUiStepdefs.iClickOnTheFirstResult()"
});
formatter.result({
  "duration": 3063222667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carbon Credit - zero flatulence",
      "offset": 34
    }
  ],
  "location": "MyUiStepdefs.theTitleOfTheAuctionPageIs(String)"
});
formatter.result({
  "duration": 29567207,
  "status": "passed"
});
});