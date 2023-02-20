const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
};


// assertEqual(1, 4);

// var array1 = prog.argv.slice(2);
// var array2 = prog.argv.slice(2);

const Eqarray = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i in array1) {
        if (array1[i] !== array2[i]) {
            return false;
        }

    }
    return true;


};

// assertEqual(Eqarray([1, 2, 3], [1, 2, 3]), true);
// assertEqual(([1, 2, 3], [3, 2, 1]), false);


module.exports = Eqarray;

assertEqual(Eqarray([1, 2, 3], [1, 2, 3]), true);
assertEqual(Eqarray(["1", "2", "3"], ["1", "2", 3]), false);