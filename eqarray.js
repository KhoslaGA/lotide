const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
};

// module.exports = assertEqual;

// assertEqual(1, 4);

var array1 = prog.argv.slice(2);
var array2 = prog.argv.slice(2);

const Eqarray = function (array1, array2) {
    if (array1 === array2) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
};

assertEqual(Eqarray([1, 2, 3], [1, 2, 3]), true);
assertEqual(([1, 2, 3], [3, 2, 1]), false);
