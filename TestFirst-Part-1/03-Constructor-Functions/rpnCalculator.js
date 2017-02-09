function RPNCalculator() {
    this.calcArr = [0];
    this.push = function(val) {
        this.calcArr.push(val);
    }
    this.plus = function() {
        if (this.calcArr.length < 2) {
            throw 'rpnCalculatorInstance is empty'
        }
        this.calcArr[0] = this.calcArr.pop() + this.calcArr.pop();
    }
    this.minus = function() {
        if (this.calcArr.length < 2) {
            throw 'rpnCalculatorInstance is empty'
        }
        var val1 = this.calcArr.pop()
        var val2 = this.calcArr.pop()
        this.calcArr[0] = val2 - val1;
    }
    this.divide = function() {
        if (this.calcArr.length < 2) {
            throw 'rpnCalculatorInstance is empty'
        }
        var val1 = this.calcArr.pop()
        var val2 = this.calcArr.pop()
        this.calcArr[0] = val2 / val1;
    }
    this.times = function() {
        if (this.calcArr.length < 2) {
            throw 'rpnCalculatorInstance is empty'
        }
        this.calcArr[0] = this.calcArr.pop() * this.calcArr.pop();
    }
    this.value = function() {
        return this.calcArr[0]
    }
}

RPNCalculator.prototype.push = function(val) {
    this.calcArr.push(val);
    }
RPNCalculator.prototype.plus = function() {
     if (this.calcArr.length < 2) {
          throw 'rpnCalculatorInstance is empty'
    }
    this.calcArr[0] = this.calcArr.pop() + this.calcArr.pop();
}
RPNCalculator.prototype.minus = function() {
      if (this.calcArr.length < 2) {
          throw 'rpnCalculatorInstance is empty'
      }
      var val1 = this.calcArr.pop()
      var val2 = this.calcArr.pop()
      this.calcArr[0] = val2 - val1;
}
RPNCalculator.prototype.divide = function() {
    if (this.calcArr.length < 2) {
      throw 'rpnCalculatorInstance is empty'
    }
    var val1 = this.calcArr.pop()
    var val2 = this.calcArr.pop()
    this.calcArr[0] = val2 / val1;
}
RPNCalculator.prototype.times = function() {
    if (this.calcArr.length < 2) {
        throw 'rpnCalculatorInstance is empty'
    }
    this.calcArr[0] = this.calcArr.pop() * this.calcArr.pop();
}
RPNCalculator.prototype.value = function() {
        return this.calcArr[0]
}