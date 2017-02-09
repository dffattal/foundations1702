function repeat(str, num) {
    if (num === 0) {
        return ""
    }
    var finalStr = ''
    for (var i = 0; i < num; i++) {
        finalStr += str
    }
    return finalStr
}

function sum(arr) {
    var finalSum = 0;
    if (arr.length === 0) {
        return finalSum
    }
    for (var i = 0; i < arr.length; i++) {
        finalSum += arr[i]
    }
    return finalSum
}

function join(arr, delimiter) {
    var finalStr = "";
    if (arr.length === 0) {
        return finalStr
    }
    if (delimiter !== undefined) {
        for (var i = 0; i < arr.length; i++) {
            finalStr += arr[i] + delimiter
        }
        return finalStr.slice(0, finalStr.length - 1)
    }
    for (var i = 0; i < arr.length; i++) {
        finalStr += arr[i]
    }
    return finalStr
}

function gridGenerator(num) {
    if (num === 0) {
        return ''
    }
    var finalStr = ''
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    finalStr += '#'
                } else {
                    finalStr += ' '
                }
            } else {
                if (j % 2 === 0) {
                    finalStr += ' '
                } else {
                    finalStr += '#'
                }
            }
        }
        finalStr += '\n'
    }
    return finalStr
}

function paramify(obj) {
    var finalStr = ''
    var arr = []
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key)
        }
    }
    var sortedArr = arr.sort()
    for (var i = 0; i < arr.length; i++) {
        finalStr += arr[i] + '=' + obj[arr[i]] + '&'
    }
    return finalStr.slice(0, finalStr.length - 1)
}

function paramifyObjectKeys(obj) {
    var finalStr = ''
    var objArr = Object.keys(obj).sort()
    for (var i = 0; i < objArr.length; i++) {
        finalStr += objArr[i] + '=' + obj[objArr[i]] + '&'
    }
    return finalStr.slice(0, finalStr.length - 1)
}

function renameFiles(arr) {
    var filesObj = {}
    for (var i = 0; i < arr.length; i++) {
        if (filesObj[arr[i]] === undefined) {
            filesObj[arr[i]] = 1
        } else {
            var renameVal = 1;
            var renameFile = arr[i] + '(' + renameVal + ')'
            while (filesObj[renameFile] !== undefined) {
                renameVal++
                renameFile = arr[i] + '(' + renameVal + ')'
            }
            filesObj[renameFile] = 1
        }
    }
    return Object.keys(filesObj)
}