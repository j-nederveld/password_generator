

var enter;
var confirmNum;
var confirmChars;
var confirmUpper;
var confirmLowercase;

// characters
var chars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// numbers
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// upper/lowercase
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//password variable to add to page
var pw = document.querySelector("#password").innerHTML = pw;

//function to select random char
function random_char() {   
      chars[Math.floor(Math.random() * chars.length)]; 
}
//function for random uppercase letter
function random_upper() {   
    upper[Math.floor(Math.random() * upper.length)]; 
}
//function for random lowercase letter
function random_lower() {  
    lower[Math.floor(Math.random() * lower.length)]; 
}
//function for random number
function random_num() { 
 
    number[Math.floor(Math.random() * number.length)]; 
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
