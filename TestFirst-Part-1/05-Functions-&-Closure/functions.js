function concatString() {
    var arr = []
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]
    }
    return arr.join('')
}

function yourFunctionRunner(func) {
    var arr = []
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]()
    }
    return arr.join('')
}

function makeAdder(A) {
    return function(adder) {
        return A + adder
    }
}

function once(func) {
    var closureNum = 0
    return function() {
        if (closureNum === 0) {
            func()
            closureNum++
        }
    }
}

function createObjectWithClosures() {
    var x = 0;
    return {oneIncrementer: function() {x += 1},
            tensIncrementer: function() {x += 10},
            getValue: function() {return x},
            setValue: function(val) {x = val}}
}

function guestListFns(guests, secret) {
    var result = [],
    guest;
    var wrapper = function(secret, guest){
      return function(secretNum) {
        if (secretNum === secret){
          return guest;
        } else {
          return 'Secret-Code: Invalid';
        }
      };
    };  
    for (var i = 0; i < guests.length; i++) {
        guest = guests[i];
        result.push(wrapper(secret, guest));
    }
    return result;
}

function generateGuestList(guestFncArray, secretCode) {
    return guestFncArray.map(function(guestFnc){
        return guestFnc(secretCode);
    });
}