(function() {

// characters
var chars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// numbers
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// upper/lowercase
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//variables to confirm selections
var enter;
var confirmNum;
var confirmChars;
var confirmUpper;
var confirmLowercase;

//empty variable which will be updated depending on what selections user makes
var selections;


function generatePassword() {
  var pwLength = prompt("How many characters would you like? (Choose between 8-128)");
  //check input is a valid number
  if ( isNaN(pwLength) ) {
    pwLength = alert('Please enter a valid number');
    generatePassword();
    return false;
  }
  //convert input to number
  var parseLength = parseInt(pwLength);
  //make sure number is between 8 and 128
  if (parseLength < 8 || parseLength > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
    return false;
  }
  //confirm criteria (uppercase, lowercase, numbers, characters)
  var confirmUpper = confirm("Would you like to include uppercase letters?");
  var confirmLower = confirm("Would you like to include lowercase letters?");
  var confirmNum = confirm("Would you like to include numbers?");
  var confirmChars = confirm("Would you like to include special characters?");
  
  if (confirmUpper && confirmLower && confirmNum && confirmChars) {
    selections = chars.concat(number, upper, lower);
  }
}


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

}());