// const assertequal = function (actual, expected) {
//     if (acutal === expected) {
//         return true;
//     }
//     else
//         return false;

// }

// assertequal(Lighthouse, Labs);
// assertequal(1, 1);

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
};

// module.exports = assertEqual;

assertEqual(1, 4);