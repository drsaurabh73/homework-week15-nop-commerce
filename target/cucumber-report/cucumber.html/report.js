$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "ComputerPage Test",
  "description": "",
  "id": "computerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8254886000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify user should navigate To computer page successfully",
  "description": "",
  "id": "computerpage-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see the text computer",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 383894500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 808939700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iCanSeeTheTextComputer()"
});
formatter.result({
  "duration": 75058000,
  "status": "passed"
});
formatter.after({
  "duration": 1139693400,
  "status": "passed"
});
formatter.before({
  "duration": 2826083300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify user should navigate to Desktops page successfully",
  "description": "",
  "id": "computerpage-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can see the desktop text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 688676600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 507008400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iCanSeeTheDesktopText()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.after({
  "duration": 1049707000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify that user should Build You Own Computer and add them to cart successfully",
  "description": "",
  "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Bulit your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select  \"\u003cprocessor\u003e\" from processor",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"\u003cram\u003e\" from RAM",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"\u003chdd\u003e\" from Harddrive",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"\u003cos\u003e\" from operating system",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003csoftware\u003e\" from software",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the message proudct has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 30,
      "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 31,
      "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 32,
      "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista  Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 33,
      "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3300250600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify that user should Build You Own Computer and add them to cart successfully",
  "description": "",
  "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Bulit your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select  \"2.2 GHz Intel Pentium Dual-Core E2200\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2 GB\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" from Harddrive",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista Home [+$50.00]\" from operating system",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Microsoft Office [+$50.00]\" from software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the message proudct has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 114600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 779981800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 542927400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnBulitYourOwnComputer()"
});
formatter.result({
  "duration": 1262349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 11
    }
  ],
  "location": "ComputerTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 166832200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 135422100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromHarddrive(String)"
});
formatter.result({
  "duration": 86533800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromOperatingSystem(String)"
});
formatter.result({
  "duration": 78970400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 81092700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 86542600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iCanSeeTheMessageProudctHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.after({
  "duration": 953805900,
  "status": "passed"
});
formatter.before({
  "duration": 3519980700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify that user should Build You Own Computer and add them to cart successfully",
  "description": "",
  "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Bulit your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select  \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"4GB [+$20.00]\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"400 GB [+$100.00]\" from Harddrive",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista Premium [+$60.00]\" from operating system",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Acrobat Reader [+$10.00]\" from software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the message proudct has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 822524700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 546213900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnBulitYourOwnComputer()"
});
formatter.result({
  "duration": 1027977200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 11
    }
  ],
  "location": "ComputerTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 92458900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 112344800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromHarddrive(String)"
});
formatter.result({
  "duration": 100524300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromOperatingSystem(String)"
});
formatter.result({
  "duration": 78079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 59043900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 91280100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iCanSeeTheMessageProudctHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.after({
  "duration": 1018612500,
  "status": "passed"
});
formatter.before({
  "duration": 3329523400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify that user should Build You Own Computer and add them to cart successfully",
  "description": "",
  "id": "computerpage-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Bulit your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select  \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"8GB [+$60.00]\" from RAM",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" from Harddrive",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Vista  Home [+$50.00]\" from operating system",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Total Commander [+$5.00]\" from software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the message proudct has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 690872100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 591468200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnBulitYourOwnComputer()"
});
formatter.result({
  "duration": 1133965700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 11
    }
  ],
  "location": "ComputerTest.iSelectFromProcessor(String)"
});
formatter.result({
  "duration": 102482800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromRAM(String)"
});
formatter.result({
  "duration": 133576100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromHarddrive(String)"
});
formatter.result({
  "duration": 120217900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista  Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromOperatingSystem(String)"
});
formatter.result({
  "duration": 89358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputerTest.iSelectFromSoftware(String)"
});
formatter.result({
  "duration": 60140200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 80165100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iCanSeeTheMessageProudctHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.after({
  "duration": 1037140300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3477163700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate To loginPage successFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-loginpage-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 667308400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 52506200,
  "status": "passed"
});
formatter.after({
  "duration": 941893900,
  "status": "passed"
});
formatter.before({
  "duration": 3793303500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the errorMessage with inValid credentials",
  "description": "",
  "id": "login-test;verify-the-errormessage-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I navigate to login page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"moni@sigmaplc.com\" emailID",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"123456\" password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 584009000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 62481500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moni@sigmaplc.com",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterEmailID(String)"
});
formatter.result({
  "duration": 128408400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 101081300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 730894500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldBeAbleSeeTheErrorMessage()"
});
formatter.result({
  "duration": 40070242400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-56OMVNBM\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [105b806f9de13411f40d680c6362d776, findElement {using\u003dxpath, value\u003d//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\drsau\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64818}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64818/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 105b806f9de13411f40d680c6362d776\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.LoginPage.verifyTheErrorMessage(LoginPage.java:47)\r\n\tat com.nopcommerce.demo.steps.LoginPageTest.iShouldBeAbleSeeTheErrorMessage(LoginPageTest.java:73)\r\n\tat ✽.Then I should be able see the error message(login.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1455380000,
  "status": "passed"
});
formatter.before({
  "duration": 3901487000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify that user should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I navigate to login page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \"moni@sigmaplc.com\" emailID",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"123456\" password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 632583000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 36216500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moni@sigmaplc.com",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterEmailID(String)"
});
formatter.result({
  "duration": 138764800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 103006800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 723076600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldBeAbleToSeeLogoutButton()"
});
formatter.result({
  "duration": 53662900,
  "status": "passed"
});
formatter.after({
  "duration": 873456600,
  "status": "passed"
});
formatter.before({
  "duration": 3448294000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify that user should logOut successFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on login tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to login page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter \"moni@sigmaplc.com\" emailID",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \"123456\" password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can see the login link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 671339000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 59680700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "moni@sigmaplc.com",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterEmailID(String)"
});
formatter.result({
  "duration": 182701600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 129964600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 801271100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldBeAbleToSeeTheLogoutButton()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20764256600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iCanSeeTheLoginLinkDisplayed()"
});
formatter.result({
  "duration": 60918700,
  "status": "passed"
});
formatter.after({
  "duration": 836260800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3565132800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to registation page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 595202200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldNavigateToRegistationPage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.after({
  "duration": 938207000,
  "status": "passed"
});
formatter.before({
  "duration": 2939689500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify that firstname lastname email password and ConfirmPassword fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to registation page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"First name is required.\" next to Firstname field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Last name is required.\" next to Lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Email is required.\" next to emial field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Password is required.\" next to Password field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the error message \"Password is required.\" next to confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 883317300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldNavigateToRegistationPage()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 212622900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterTest.iShouldSeeTheErrorMessageNextToFirstnameField(String)"
});
formatter.result({
  "duration": 96600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterTest.iShouldSeeTheErrorMessageNextToLastnameField(String)"
});
formatter.result({
  "duration": 55157100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterTest.iShouldSeeTheErrorMessageNextToEmialField(String)"
});
formatter.result({
  "duration": 65441400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterTest.iShouldSeeTheErrorMessageNextToPasswordField(String)"
});
formatter.result({
  "duration": 45496000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterTest.iShouldSeeTheErrorMessageNextToConfirmPasswordField(String)"
});
formatter.result({
  "duration": 27621100,
  "status": "passed"
});
formatter.after({
  "duration": 1015766500,
  "status": "passed"
});
formatter.before({
  "duration": 2944458500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should navigate to registation page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"sam\" as firstname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"Patil\" as lastname",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"10\" day of birth",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"May\" month of birth",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"2001\" year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter  \"sampatil@gmail.com\" email address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \"prime123@\" password as  password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter  \"prime123@\" as confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 41600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 764307300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldNavigateToRegistationPage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam",
      "offset": 9
    }
  ],
  "location": "RegisterTest.iEnterAsFirstname(String)"
});
formatter.result({
  "duration": 172246000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patil",
      "offset": 9
    }
  ],
  "location": "RegisterTest.iEnterAsLastname(String)"
});
formatter.result({
  "duration": 166640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 135605200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 10
    }
  ],
  "location": "RegisterTest.iSelectMonthOfBirth(String)"
});
formatter.result({
  "duration": 139674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001",
      "offset": 10
    }
  ],
  "location": "RegisterTest.iSelectYearOfBirth(String)"
});
formatter.result({
  "duration": 122939100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sampatil@gmail.com",
      "offset": 10
    }
  ],
  "location": "RegisterTest.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 153919800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@",
      "offset": 9
    }
  ],
  "location": "RegisterTest.iEnterPasswordAsPassword(String)"
});
formatter.result({
  "duration": 155997700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@",
      "offset": 10
    }
  ],
  "location": "RegisterTest.iEnterAsConfirmPassword(String)"
});
formatter.result({
  "duration": 116667100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 592291200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeYourRegistrationCompleted()"
});
formatter.result({
  "duration": 40073358100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-56OMVNBM\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [046c2604831e2da214a145f750f5e30a, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\drsau\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64921}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64921/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 046c2604831e2da214a145f750f5e30a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.verifyRegistrationComplete(RegisterPage.java:190)\r\n\tat com.nopcommerce.demo.steps.RegisterTest.iShouldSeeYourRegistrationCompleted(RegisterTest.java:35)\r\n\tat ✽.Then I should see Your registration completed(register.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1161170600,
  "status": "passed"
});
});