
const flatten = function (array) {
    let newArray = [];
    array.forEach(function (element) {
        if (Array.isArray(element)) {
            element.forEach(function (element2) {
                newArray.push(element2);
            });
        } else {
            newArray.push(element);
        }
    });
    return newArray;
};
const result = flatten([1, 2, 3, [4, 5, 6]]);
console.log(result);

// module.exports = flatten;