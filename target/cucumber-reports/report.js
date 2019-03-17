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
  "duration": 305175799,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 2884228067,
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
  "duration": 484598604,
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
  "duration": 38972,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 223510841,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iCanValidateThatCanRelistIsTrue()"
});
formatter.result({
  "duration": 29334303,
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
  "duration": 45793,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepdefs.iSendAGETRequest()"
});
formatter.result({
  "duration": 201026688,
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
  "duration": 49294980,
  "status": "passed"
});
formatter.uri("CucumberUiTest.feature");
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
  "duration": 6791770519,
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
  "duration": 2889512280,
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
  "duration": 30470915,
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
  "duration": 4857063320,
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
  "duration": 3459358482,
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
  "duration": 2016646462,
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
  "duration": 31206897,
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
  "duration": 5348427615,
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
  "duration": 5798342269,
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
  "duration": 2191286433,
  "status": "passed"
});
formatter.match({
  "location": "MyUiStepdefs.iClickOnTheFirstResult()"
});
formatter.result({
  "duration": 5302328322,
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
  "duration": 34434910,
  "status": "passed"
});
});