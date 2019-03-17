package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.Assert.assertEquals;

public class MyApiStepdefs {

    String apiUri;
    Response response;
    JsonPath jsonPathEvaluator;


    @Given("^The API URI under test$")
    public void theAPIURIUnderTest() {

        apiUri = "https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false";

    }

    @When("^I send a GET request$")
    public void iSendAGETRequest() {

        response = RestAssured.get(apiUri);
        int statusCode = response.getStatusCode();

        assertEquals(200, statusCode);
    }

    @Then("^I can validate that the Name is \"([^\"]*)\"$")
    public void iCanValidateThatTheNameIs(String expectedName) {

        jsonPathEvaluator = response.jsonPath();
        String name = jsonPathEvaluator.get("Name");

        assertEquals(expectedName, name);

    }

    @Then("^I can validate that CanRelist is true$")
    public void iCanValidateThatCanRelistIsTrue() {

        jsonPathEvaluator = response.jsonPath();
        Boolean canRelist = jsonPathEvaluator.get("CanRelist");

        assertEquals(true, canRelist);
    }

    @Then("^I can validate that the Promotions element with Name \"([^\"]*)\" has a Description that contains the text \"([^\"]*)\"$")
    public void iCanValidateThatThePromotionsElementWithNameHasADescriptionThatContainsTheText(String expectedName, String expectedText) {

        jsonPathEvaluator = response.jsonPath();

        List<String> promotionNames = jsonPathEvaluator.getList("Promotions.Name");
        List<String> promotionDescriptions = jsonPathEvaluator.getList("Promotions.Description");

        String galleryDescription = "";

        for (int i = 0; i < promotionNames.size(); i++) {

            if (promotionNames.get(i).equals(expectedName)) {
                galleryDescription = promotionDescriptions.get(i);
            }
        }

        String regexToMatch = "\\b" + expectedText + "\\b";
        Pattern descriptionTextPattern = Pattern.compile(regexToMatch);
        Matcher descriptionTextMatcher = descriptionTextPattern.matcher(galleryDescription);
        Boolean descriptionMatchFlag = descriptionTextMatcher.find();

        assertEquals(true, descriptionMatchFlag);
    }
}
