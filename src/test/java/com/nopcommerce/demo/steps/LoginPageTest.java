package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login tab$")
    public void iClickOnLoginTab() {
        new HomePage().clickLoginLink();
    }

    @Then("^I navigate to login page successfully$")
    public void iNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().verifyWelcomeTextMessage();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }


    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLogin();
    }

    @Then("^I should be able see the welcome message$")
    public void iShouldBeAbleSeeTheWelcomeMessage() {
        String expectedMessage = "Welcome, Please Sign In!";
        Assert.assertEquals("Welcome page not dislpayed", new LoginPage().verifyWelcomeTextMessage(), expectedMessage);
    }

    @Then("^I should be able to see logout Button$")
    public void iShouldBeAbleToSeeLogoutButton() {
        String expectedMessage1 = "Log out";
        Assert.assertEquals("verify not log out", expectedMessage1, new HomePage().verifyLogout());
    }

    @And("^I should be able to see the logout button$")
    public void iShouldBeAbleToSeeTheLogoutButton() {
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new LoginPage().clickOnLogout();
    }

    @Then("^I can see the login link displayed$")
    public void iCanSeeTheLoginLinkDisplayed() {
        String expectedMessage3 = "Log in";
        Assert.assertEquals("log in button not found", expectedMessage3, new HomePage().verifyloginText());
    }

    @And("^I enter \"([^\"]*)\" emailID$")
    public void iEnterEmailID(String emial) {
        new LoginPage().setEmail(emial);
    }

    @And("^I enter \"([^\"]*)\" password$")
    public void iEnterPassword(String password) {
        new LoginPage().setPassword(password);
    }

    @Then("^I should be able see the error message$")
    public void iShouldBeAbleSeeTheErrorMessage() {
        new LoginPage().verifyTheErrorMessage();
        String expectedMessage4 = "Login was unsuccessful. Please correct the errors and try again.\n" +
                "The credentials provided are incorrect";
        Assert.assertEquals("no error message", expectedMessage4, new LoginPage().verifyLoginText());
    }
}
