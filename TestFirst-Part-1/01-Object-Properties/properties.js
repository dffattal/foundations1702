function setPropsOnObj(obj) {
    obj.x = 7;
    obj['y'] = 8;
    obj.onePlus = function(num) {return num + 1};
    return obj
}

function setPropsOnArr(arrObj) {
    arrObj.hello = function() {return 'Hello!'}
    arrObj['full'] = 'stack';
    arrObj[0] = 5;
    arrObj['twoTimes'] = function(num) {return num * 2};
    return arrObj
}

function setPropsOnFunc(func) {
    func.year = '20??'
    func.divideByTwo = function(num) {return num / 2};
    func.prototype.helloWorld = function() {return 'Hello World'}
    return func
}