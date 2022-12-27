/*
write a function with two inputs.
One an array of values and another that takes various types
This second input is used to search the array for those specific values 
The return from the function is an array without the second input
*/
let removeFromArray = function (...arguments){
    const array = arguments[0]
    return array.filter (values => !arguments.includes(values))
}
// Do not edit below this line
module.exports = removeFromArray;
