function myEach(collection, callback) {
    (Array.isArray(collection) || typeof collection === 'object' && collection !== null)
    ? Object.values(collection).forEach(value => callback(value, collection))
    : null;
    return collection;
}

function myMap(collection, callback) {
    const newCollection = [];
    (Array.isArray(collection) || typeof collection === 'object' && collection !== null)
    ? Object.values(collection).forEach(value => newCollection.push(callback(value, collection)))
    : null;
    return newCollection;
}
function triple(x) {
    return x * 3
}
let test = [2,3,8,6];
let testObj = { a: 1, b: 7, c: 3, d: 4}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    const startIndex = acc !== undefined ? 0 : 1;
    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
};

function predicate(num) {
    return num % 2 == 0;
}
function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
};


function myFilter(collection, predicate) {
    let newArray = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (const value of values) {
        if (predicate(value)) {
            newArray.push(value);
        }
    }
    return newArray;
}
function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.length;
}
function myFirst(arr, n) {
    if ( n === undefined) {
        return arr[0];
    } else {
        let result = arr.slice(0, n);
        return result;
    }
}

function myLast(arr, n) {
    if ( n === undefined) {
        let c = arr.length - 1;
        return arr[c];
    } else {
        let result = arr.slice(-n);
        return result;
    }
}
function  myKeys(object) {
    let values = Object.keys(object)
    return values;
}

function myValues(object) {
    let values = Object.values(object);
    return values;
}


