//create variables
var num1 = -1000;
var num2 = 0;
var sum = num1 + num2;
//create if/else if/else statements that take sum1 + sum2 and prints
//answer with the corresponding console log
if (sum < -1000) {
     console.log(sum + " is less than -1000");
} else if (sum < 0) {
    console.log(sum + " is a negative number");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is larger than 0");
} else {
    console.log(sum + " is greater than 100");
    }