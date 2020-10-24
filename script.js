//global variables
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+","-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

//Initial questions
  var promptLength = prompt("Please select a password length between 8-128: ");
  /*var conLowercase =  confirm("Would you like to include 'lowercase'?");
  var conUppercase = confirm("Would you like to include 'uppercase'?");
  var conNumbers =  confirm("Would you like to include 'numbers'?");
  var conSpecialCharacters = confirm("Would you like to include 'special characters'?");
  */

  // Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var i;
  for (var i = 0; i < promptLength; i++){
  var passwordText = document.querySelector("#password").textContent += lowercase[Math.floor(Math.random()*lowercase.length)];
  }
  passwordText.value = password;
  

}


    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
