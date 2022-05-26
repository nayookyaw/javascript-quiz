let input = -121;

let inputStr = input.toString();
let inputArr = inputStr.split('');
let newStr = "";

for (let i=inputArr.length -1 ; i >= 0; i--) {
    newStr += inputArr[i];
}

if (parseInt(newStr) === input) {
    console.log ("Palindrome!");
} else {
    console.log ("No Palindrome!");
}
