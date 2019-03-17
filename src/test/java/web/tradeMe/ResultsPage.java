package web.tradeMe;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class ResultsPage {

    private WebDriver driver;
    private WebDriverWait wait;

    public ResultsPage (WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(this.driver, 10);
        this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("headerColumnGalleryViewText")));

    }

    public String getNumSearchResults() {
        return driver.findElement(By.id("totalCount")).getText();
    }

    public void viewAsList() {
        WebElement listView = driver.findElement(By.id("ListingViewBar_listViewTab_icon_a"));
        listView.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("headerColumnGalleryViewText")));
    }

    public AuctionPage selectFirstResult() {

        List<WebElement> resultsList = driver.findElements(By.className("title"));
        resultsList.get(0).click();
        return PageFactory.initElements(this.driver, AuctionPage.class);
    }

    public void sortByLocation(String location) {
        Select select = new Select(driver.findElement(By.id("LocationFilter_regionSelect")));
        select.selectByVisibleText(location);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("totalCount")));
    }

}
