function createCalculator() {
    var calcObj = {};
    var val = 0;
    calcObj.value = function() {
        return val
    }
    calcObj.add = function(num) {
        return val += num
    }
    calcObj.subtract = function(num) {
        return val -= num
    }
    calcObj.clear = function() {
        val = 0;
        return val
    }
    return calcObj
}