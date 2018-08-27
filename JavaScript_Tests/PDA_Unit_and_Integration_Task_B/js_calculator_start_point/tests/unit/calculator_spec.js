var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('can add', function(){
    calculator.previousTotal =(1);
    calculator.add(4);
    const result = calculator.runningTotal
    assert.equal(result, 5);
  })

  it('can subtract', function(){
    calculator.previousTotal=(7);
    calculator.subtract(4);
    const result = calculator.runningTotal;
    assert.equal(result, 3);
  })

  it('can multiply', function(){
    calculator.previousTotal=(3);
    calculator.multiply(5);
    const result = calculator.runningTotal;
    assert.equal(result, 15);
  })

  it('can divide', function(){
    calculator.previousTotal=(21)
    calculator.divide(7)
    const result = calculator.runningTotal;
    assert.equal(result, 3);
  })
  it('can concatenate multiple number button clicks' , function() {
    calculator.previousTotal=(0)
    calculator.numberClick(7)
    calculator.numberClick(7)
    const result = calculator.runningTotal;
    assert.equal(result, 77);
  })

  it('chain multiple operations together', function() {
    // calculator.previousTotal=()
    calculator.numberClick(7);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.operatorClick('=')
    const result = calculator.runningTotal;
    assert.equal(result, 14);
  })
  it(' clear the running total without affecting the calculation', function() {
    calculator.numberClick(2)
    calculator.operatorClick('*');
    calculator.numberClick(3)
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=')

    // calculator.operatorClick("+");
    // calculator.numberClick(7)
    // calculator.numberClick(1)
    // calculator.numberClick(0)
    // calculator.operatorClick('-')
    // calculator.numberClick(9)
    const result = calculator.runningTotal
    assert.equal(result, 10)
  })


});
