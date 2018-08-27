var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  // Do the number buttons update the display of the running total?
  it('arithmetical operations update the display with the result of the operation', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#operator_multiply')).click()
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('multiple operations can be chained together', function (){
    running_total = element(by.css('#running_total'))
    element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click()
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click()
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('the output is as expected for a range of numbers', function() {
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#operator_divide')).click()
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click()
      element(by.css('#operator_multiply')).click()
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('666666.6666666666')

    });

  it('will return NaN when attempting to divide a number by 0', function() {
      running_total = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
  })

});
