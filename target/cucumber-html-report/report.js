$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SocialNetworks.feature");
formatter.feature({
  "line": 1,
  "name": "Social Networks",
  "description": "",
  "id": "social-networks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Social Networks Buttons Functionality",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to http://automationpractice.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \"\u003cSocial network button\u003e\" and verify \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality;",
  "rows": [
    {
      "cells": [
        "Social network button",
        "url"
      ],
      "line": 12,
      "id": "social-networks;social-networks-buttons-functionality;;1"
    },
    {
      "cells": [
        "facebook",
        "facebook"
      ],
      "line": 13,
      "id": "social-networks;social-networks-buttons-functionality;;2"
    },
    {
      "cells": [
        "twitter",
        "failStep"
      ],
      "line": 14,
      "id": "social-networks;social-networks-buttons-functionality;;3"
    },
    {
      "cells": [
        "youtube",
        "youtube"
      ],
      "line": 15,
      "id": "social-networks;social-networks-buttons-functionality;;4"
    },
    {
      "cells": [
        "google",
        "google"
      ],
      "line": 16,
      "id": "social-networks;social-networks-buttons-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Social Networks Buttons Functionality",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to http://automationpractice.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \"facebook\" and verify \"facebook\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.navigate_to_http_automationpractice_com()"
});
formatter.result({
  "duration": 10531718900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 1668101000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 2444734100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 25726000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 10
    },
    {
      "val": "facebook",
      "offset": 32
    }
  ],
  "location": "SocialNetSteps.clickOnAndVerify(String,String)"
});
formatter.result({
  "duration": 6694204700,
  "status": "passed"
});
formatter.after({
  "duration": 969045700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Social Networks Buttons Functionality",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to http://automationpractice.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \"twitter\" and verify \"failStep\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.navigate_to_http_automationpractice_com()"
});
formatter.result({
  "duration": 8607855100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 2445305900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 2997904500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 32194000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "twitter",
      "offset": 10
    },
    {
      "val": "failStep",
      "offset": 31
    }
  ],
  "location": "SocialNetSteps.clickOnAndVerify(String,String)"
});
formatter.result({
  "duration": 2472494700,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat pom.ParentPOM.verifyURLContainsText(ParentPOM.java:55)\r\n\tat steps.SocialNetSteps.clickOnAndVerify(SocialNetSteps.java:14)\r\n\tat ✽.And Click on \"twitter\" and verify \"failStep\"(SocialNetworks.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2858407300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Social Networks Buttons Functionality",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to http://automationpractice.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \"youtube\" and verify \"youtube\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.navigate_to_http_automationpractice_com()"
});
formatter.result({
  "duration": 9457020100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 1777139400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 2543127100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 26075500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "youtube",
      "offset": 10
    },
    {
      "val": "youtube",
      "offset": 31
    }
  ],
  "location": "SocialNetSteps.clickOnAndVerify(String,String)"
});
formatter.result({
  "duration": 3251781300,
  "status": "passed"
});
formatter.after({
  "duration": 963835400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Social Networks Buttons Functionality",
  "description": "",
  "id": "social-networks;social-networks-buttons-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to http://automationpractice.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \"google\" and verify \"google\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.navigate_to_http_automationpractice_com()"
});
formatter.result({
  "duration": 8163935100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 1366784500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 2123964100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 45654300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 10
    },
    {
      "val": "google",
      "offset": 30
    }
  ],
  "location": "SocialNetSteps.clickOnAndVerify(String,String)"
});
formatter.result({
  "duration": 2414875500,
  "status": "passed"
});
formatter.after({
  "duration": 1383367200,
  "status": "passed"
});
});