const assertEqual = function (array, firstelement) {
    if (array[0] === firstelement) {
        console.log(`✅  Assertion passed: ${array[0]} === ${firstelement}`);
    } else {
        console.log(`🛑  Assertion failed: ${array[0]} !== ${expected}`);
    }
    return firstelement;
};

assertEqual(([5, 6, 7]), 5);
assertEqual((["Hello", "Lighthouse", "Labs"]), "Hello");
