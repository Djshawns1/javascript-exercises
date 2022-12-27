const reverseString = function reverseString(string){
    let string1 = ""
    for(i = string.length - 1; i >= 0; i--){
        string1 += string[i];
    }
    return string1
}
console.log (reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
