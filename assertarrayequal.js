
const eqArrays = require("./eqArrays");

const assertarrayequal = function (array1, array2) {
    if (array1 === array2) {
        console.log(`✅  Assertion passed: ${array1} === ${array1}`);
    } else {
        console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    }
};