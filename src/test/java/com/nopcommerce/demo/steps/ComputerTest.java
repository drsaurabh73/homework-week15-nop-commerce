package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerTest {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputer();
    }

    @Then("^I can see the text computer$")
    public void iCanSeeTheTextComputer() {
        String expectedMessage = "Computers";
        Assert.assertEquals("text computer not found", new ComputerPage().verifyTextcomputer(), expectedMessage);
    }

    @And("^I can see build your own computer$")
    public void iCanSeeDesktopLaptopBuildYourOwnComputer() {
        String expectedMessage6 = "Build your own computer";
        Assert.assertEquals("", new BuildYourOwnComputerPage().verifyTextBuiltYourComputer(), expectedMessage6);

    }

    @And("^I click on Desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktop();
    }

    @Then("^I can see the desktop text$")
    public void iCanSeeTheDesktopText() {


    }

    @And("^I click on Bulit your own computer$")
    public void iClickOnBulitYourOwnComputer() {
        new DesktopPage().setBuiltyourcomputer();
    }


    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().setAddtocart();
    }

    @Then("^I can see the message proudct has been added to your shopping cart$")
    public void iCanSeeTheMessageProudctHasBeenAddedToYourShoppingCart() {
        String expectedMessage4 = "";
    }

    @And("^I select  \"([^\"]*)\" from processor$")
    public void iSelectFromProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);

    }

    @And("^I select \"([^\"]*)\" from RAM$")
    public void iSelectFromRAM(String rams) {
        new BuildYourOwnComputerPage().selectRam(rams);

    }

    @And("^I select \"([^\"]*)\" from Harddrive$")
    public void iSelectFromHarddrive(String hdd) {
        new BuildYourOwnComputerPage().clcikOnHardware(hdd);

    }

    @And("^I select \"([^\"]*)\" from operating system$")
    public void iSelectFromOperatingSystem(String os) {
        new BuildYourOwnComputerPage().setOperatingsystem();

    }

    @And("^I select \"([^\"]*)\" from software$")
    public void iSelectFromSoftware(String arg0) {
        new BuildYourOwnComputerPage().setSoftware();

    }
}
