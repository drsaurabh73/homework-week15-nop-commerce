package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterTest {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().setRegisterLink();
    }

    @Then("^I should navigate to registation page$")
    public void iShouldNavigateToRegistationPage() {
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().getClickOnRegister();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String firstname) {
        String expectedMessage1 = "First name is required.";
        Assert.assertEquals("firstname incorrect", new RegisterPage().verifyFirstNamerequired(), expectedMessage1);
    }


    @Then("^I should see Your registration completed$")
    public void iShouldSeeYourRegistrationCompleted() {
        String expectedMessage = "Your registration completed";
        Assert.assertEquals("Your registration not complete", new RegisterPage().verifyRegistrationComplete(), expectedMessage);
    }

    @Then("^I should see the error message \"([^\"]*)\" next to Firstname field$")
    public void iShouldSeeTheErrorMessageNextToFirstnameField(String arg0) {

    }

    @And("^I should see the error message \"([^\"]*)\" next to Lastname field$")
    public void iShouldSeeTheErrorMessageNextToLastnameField(String lastname) {
        String expectedMessage2 = "Last name is required.";
        Assert.assertEquals("last name required", new RegisterPage().verifyLastNamerequired(), expectedMessage2);

    }

    @And("^I should see the error message \"([^\"]*)\" next to emial field$")
    public void iShouldSeeTheErrorMessageNextToEmialField(String email) {
        String expectedMessage3 = "Email is required.";
        Assert.assertEquals("email is not correct", new RegisterPage().verifyEmailfieldRequired(), expectedMessage3);
    }

    @And("^I should see the error message \"([^\"]*)\" next to Password field$")
    public void iShouldSeeTheErrorMessageNextToPasswordField(String password) {
        String expectedMessage4 = "Password is required.";
        Assert.assertEquals("password not required", new RegisterPage().verifyPasswordRequired(), expectedMessage4);

    }

    @And("^I should see the error message \"([^\"]*)\" next to confirm password field$")
    public void iShouldSeeTheErrorMessageNextToConfirmPasswordField(String confpassword) {
        String expectedMessage5 = "Password is required.";
        Assert.assertEquals("confirm password not required", new RegisterPage().verifyreconfirmpasswordrequired(), expectedMessage5);

    }


    @And("^I enter  \"([^\"]*)\" email address$")
    public void iEnterEmailAddress(String email) {
        new RegisterPage().getemailaddress("sampatil@gmail.com");

    }

    @And("^I enter \"([^\"]*)\" password as  password$")
    public void iEnterPasswordAsPassword(String password) {
        new RegisterPage().getPassword("prime123@");

    }

    @And("^I enter  \"([^\"]*)\" as confirm password$")
    public void iEnterAsConfirmPassword(String confpassword) {
        new RegisterPage().getConfirmPassword("prime123@");

    }

    @And("^I enter \"([^\"]*)\" as firstname$")
    public void iEnterAsFirstname(String firstname)  {
        new RegisterPage().getFirstName("sam");

    }

    @And("^I enter \"([^\"]*)\" as lastname$")
    public void iEnterAsLastname(String arg0)  {
        new RegisterPage().getLastName("Patil");
    }

    @And("^I select \"([^\"]*)\" day of birth$")
    public void iSelectDayOfBirth(String day)  {
        new RegisterPage().setDateofbirth(day);
    }

    @And("^I select \"([^\"]*)\" month of birth$")
    public void iSelectMonthOfBirth(String month)  {
        new RegisterPage().setMonthofBirth(month);
    }

    @And("^I select \"([^\"]*)\" year of birth$")
    public void iSelectYearOfBirth(String year)  {
        new RegisterPage().setYearofbirth(year);
    }
}
