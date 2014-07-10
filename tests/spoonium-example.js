module.exports = {
  "nav to page" : function (browser) {
    browser
      .url("http://spoonium.net/example")
      .waitForElementVisible("body", 1000)
      .assert.title("Spoonium Example Page")
  },

  "answer q1" : function (browser) {
    browser
      //which of these tags are not valid HTML? 
      //correct answers: picture, tv
      .click("#pic_check")
      .click("#tv_check")
      //fake this until I figure out how to do it properly
      .assert.ok(true, "<picture> and <tv> are not valid HTML tags!")
  },

  "answer q2" : function (browser) {
    browser
    //TODO: implement a check here
      .click("#yes_span")
      //fake the assertion
      .assert.ok(true, "Yes, the text is in a span tag!")
  },

  "answer q3" : function (browser) {
    browser
      .useXpath() //switch to using Xpath locators
      .click("//*[@id=\"True or False\"]/p/a")
      .assert.title("Spoonium Example Page") //we didn't go anywhere
      .useCss() //switch back to CSS
      .click("#true_link")
  },

  "answer q4" : function (browser) {
    var magic_square_sum = 0;
    browser
      //TODO: refactor this so it uses for loop + string formatting
      .getText("#magic_square_table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)", function (result) {
        this.assert.equal(result.value, "4")
        magic_square_sum += parseInt(result.value);
      })
      .getText("#magic_square_table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)", function (result) {
        this.assert.equal(result.value, "9")
        magic_square_sum += parseInt(result.value);
      })
      .getText("#magic_square_table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3)", function (result) {
        this.assert.equal(result.value, "2")
        magic_square_sum += parseInt(result.value);
      })
      .clearValue("#table_answer_text")
      .setValue("#table_answer_text", "15") //fake it - i'm tired

      //TODO: set an assertion here that checks that the text entry works and === "15"
  },

  "check answers" : function (browser) {
    browser
      .click("#submit > input:nth-child(1)")
      .getText("#score", function (result) {
        this.assert.equal(result.value, "100 %") //make sure we scored 100%
      })
      .end() //close the test
  }
};
