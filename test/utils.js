const until = require('selenium-webdriver').until

module.exports = (driver) => ({
  waitForElementVisible: function (selector) {
    return driver.wait(until.elementLocated(selector))
  },
  getText: function (selector) {
    return driver.findElement(selector).getText()
  },
  getValue: function (selector) {
    return driver.findElement(selector).getAttribute('value')
  },
  setValue: function (selector, value) {
    return driver.findElement(selector).sendKeys(value)
  },
  click: function (selector) {
    return driver.findElement(selector).click()
  },
})
