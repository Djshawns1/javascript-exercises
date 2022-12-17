const repeatString = function(string, num) {
    for (let i = 0; i < num; i++ ){
        if(num < 0){
            return "ERROR"
        }
    }
    return string.repeat(num)
};

// Do not edit below this line
module.exports = repeatString;
