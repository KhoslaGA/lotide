const assertarrayequal = require('./assertarrayequal.js')

const tail = function (array) {
    return array.slice(1);

}
// console.log("Testing the tail function");
assertarrayequal(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

