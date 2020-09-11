(function() {

// characters
var chars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// numbers
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// upper/lowercase
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//variables to confirm selections
var parseLength;
var confirmNum;
var confirmChars;
var confirmUpper;
var confirmLowercase;

//empty variable which will be updated depending on what selections user makes
var selections;




function generatePassword() {
  var pwLength = prompt("How many characters would you like? (Choose a number from 8-128)");
  if (!pwLength) {
    pwLength = alert('Please enter a valid number');
    return false;
  }
  //check input is a valid number
  if ( isNaN(pwLength) ) {
    pwLength = alert('Please enter a valid number');
    generatePassword();
    return false;
  }
 
  //convert input to number
  var parseLength = parseInt(pwLength);
  //make sure number is between 8 and 128
  if (parseLength < 8 || parseLength > 128 || false) {
    alert("Please choose a number from 8 and 128");
    generatePassword();
    return false;
  }
  //confirm criteria (uppercase, lowercase, numbers, characters)
  var confirmUpper = confirm("Would you like to include uppercase letters?");
  var confirmLower = confirm("Would you like to include lowercase letters?");
  var confirmNum = confirm("Would you like to include numbers?");
  var confirmChars = confirm("Would you like to include special characters?");
  
  //if user selects no options
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmChars) {
    alert("You have to choose at least one criteria!");
    generatePassword();
    return false;
  }
  //if user selects all available options
  if (confirmUpper && confirmLower && confirmNum && confirmChars) {
    selections = chars.concat(number, upper, lower);
  }
  /***** 3/4 *****/
  //if user selects uppercase, lowercase, and numbers
  else if (confirmUpper && confirmLower && confirmNum) {
    selections = number.concat(upper, lower);
  }
  //if user selects uppercase, lowercase, and characters
  else if (confirmUpper && confirmLower && confirmChars) {
    selections = chars.concat(upper, lower);
  }
  //if user selects uppercase, numbers, and characters
  else if (confirmUpper && confirmNum && confirmChars) {
    selections = chars.concat(number, upper);
  }
  //if user selects lowercase, numbers, and characters
  else if (confirmLower && confirmNum && confirmChars) {
    selections = chars.concat(number, lower);
  }
  /***** 2/4 *****/
  //if user selects uppercase and lowercase
  else if (confirmUpper && confirmLower) {
    selections = upper.concat(lower);
  }
  //if user selects uppercase and numbers
  else if (confirmUpper && confirmNum) {
    selections = number.concat(upper);
  }
  //if user selects uppercase and characters
  else if (confirmUpper && confirmChars) {
    selections = chars.concat(upper);
  }
  //if user selects lowercase and numbers
  else if (confirmLower && confirmNum) {
    selections = number.concat(lower);
  }
  //if user selects lowercase and characters
  else if (confirmLower && confirmChars) {
    selections = chars.concat(lower);
  }
  //if user selects numbers and characters
  else if (confirmNum && confirmChars) {
    selections = chars.concat(number);
  }
  /***** 1/4 *****/
  //uppercase
  else if (confirmUpper) {
    selections = upper;
  }
  //lowercase
  else if (confirmLower) {
    selections = lower;
  }
  //numbers
  else if (confirmNum) {
    selections = number;
  }
  //characters
  else if (confirmChars) {
    selections = chars;
  }
  
        //empty array which will be populated when pw is generated
        var password = [];
  
        //for loop RNG
        for (var j = 0; j < parseLength; j++) {
            var passwordOptions = selections[Math.floor(Math.random() * selections.length)];
            password.push(passwordOptions);
        }
        // convert to string
        var ps = password.join("");
        writePassword(ps);
        return ps;
}

  //populate the password onto page
function writePassword(ps) {
  document.getElementById("password").textContent = ps;

}
//run generate password when button is pressed
var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = generatePassword();
    //update page with password value after function finishes running
    document.getElementById("password").placeholder = ps;
});

}());



//allow user to copy generated password to their clipboard (found on mozilla dev site, I added the alert)
function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

document.querySelector("#copy").addEventListener("click", copy);