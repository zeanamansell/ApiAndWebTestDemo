package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import web.tradeMe.AuctionPage;
import web.tradeMe.HomePage;
import web.tradeMe.ResultsPage;

import static org.junit.Assert.assertEquals;

public class MyUiStepdefs {

    WebDriver driver;
    HomePage homePage;
    ChromeOptions chromeOptions;
    ResultsPage resultsPage;
    AuctionPage auctionPage;

    @Given("^The TradeMe Sandbox home page$")
    public void theAPIURIUnderTest() {

        WebDriverManager.chromedriver().setup();
        chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--headless");

        driver = new ChromeDriver(chromeOptions);
//        driver = new ChromeDriver();
        this.homePage = PageFactory.initElements(this.driver, HomePage.class);
    }


    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String searchText) {

        resultsPage = this.homePage.searchFor(searchText);
    }


    @Then("^There is \"([^\"]*)\" search results$")
    public void thereIsSearchResults(String numSearchResults) {

        String totalNumResults = resultsPage.getNumSearchResults();
        assertEquals(numSearchResults, totalNumResults);
    }

    @And("^I view the search results as a list$")
    public void iViewTheSearchResultsAsAList() throws InterruptedException {

        resultsPage.viewAsList();
        Thread.sleep(2000);
    }

    @Then("^The location of the top search result is \"([^\"]*)\"$")
    public void theLocationOfTheTopSearchResultIs(String location) {

        String topListingLocation = resultsPage.getTopOfListLocation();
        assertEquals(location, topListingLocation);

    }

    @And("^I click on the first result$")
    public void iClickOnTheFirstResult() {

        auctionPage = resultsPage.goToAuctionPage();
    }

    @Then("^The title of the auction page is \"([^\"]*)\"$")
    public void theTitleOfTheAuctionPageIs(String titleText) {

        String pageTitle = auctionPage.getListingTitle();
        assertEquals(titleText, pageTitle);
    }

}