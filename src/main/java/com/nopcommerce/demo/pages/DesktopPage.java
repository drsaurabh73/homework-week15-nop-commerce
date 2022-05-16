package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class DesktopPage extends Utility {
    private  static final Logger log = LogManager.getLogger(DesktopPage.class.getName());
    public DesktopPage() {
        PageFactory.initElements(driver,"this");
    }

    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement builtyourcomputer;
    public void setBuiltyourcomputer() {
        Reporter.log("Clicking on Built your computer" + builtyourcomputer.toString() + "<br>");
        clickOnElement(builtyourcomputer);

    }
}
