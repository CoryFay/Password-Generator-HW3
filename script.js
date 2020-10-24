//global variables
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+","-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
//var lowUpNumSpec = lowercase.concat(uppercase, numbers, specialCharacters);

  // Write password to the #password input
  function writePassword() {
  //Edited out for functionality ----- var password = generatePassword();
  
  var clearText = document.querySelector("#password").textContent = "";
  clearText.value = password;
  var promptLength = prompt("Please select a password length between 8-128: ");
  var conLowercase =  confirm("Would you like to include 'lowercase'?");
  var conUppercase = confirm("Would you like to include 'uppercase'?");
  var conNumbers =  confirm("Would you like to include 'numbers'?");
  var conSpecialCharacters = confirm("Would you like to include 'special characters'?");
  //start to 'if' conditionals
  if (promptLength >= 8 && promptLength <= 128){
      if(conLowercase && conUppercase && conNumbers && conSpecialCharacters){
      var lowUpNumSpec = lowercase.concat(uppercase, numbers, specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowUpNumSpec[Math.floor(Math.random()*lowUpNumSpec.length)];
      passwordText.value = password;
      }
    } else if (conLowercase && conUppercase && conNumbers) {
      var lowUpNum = lowercase.concat(uppercase, numbers);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowUpNum[Math.floor(Math.random()*lowUpNum.length)];
      passwordText.value = password;
      }
    } else if (conLowercase && conUppercase && conSpecialCharacters) {
      var lowUpSpec = lowercase.concat(uppercase, specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowUpSpec[Math.floor(Math.random()*lowUpSpec.length)];
      passwordText.value = password;
      }
    } else if (conLowercase && conNumbers && conSpecialCharacters) {
      var lowNumSpec = lowercase.concat(numbers, specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowNumSpec[Math.floor(Math.random()*lowNumSpec.length)];
      passwordText.value = password;
      }
    }else if (conLowercase && conUppercase) {
      var lowUp = lowercase.concat(uppercase);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowUp[Math.floor(Math.random()*lowUp.length)];
      passwordText.value = password;
      }
    } else if (conLowercase && conNumbers) {
      var lowNum = lowercase.concat(numbers);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowNum[Math.floor(Math.random()*lowNum.length)];
      passwordText.value = password;
      }
    } else if (conLowercase && conSpecialCharacters) {
      var lowSpec = lowercase.concat(specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += lowSpec[Math.floor(Math.random()*lowSpec.length)];
      passwordText.value = password;
      }
    } else if (conLowercase) {
      var low = lowercase;
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += low[Math.floor(Math.random()*low.length)];
      passwordText.value = password;
      }
    } else if (conUppercase && conSpecialCharacters && conNumbers) {
      var upperSpecNum = uppercase.concat(specialCharacters, numbers);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += upperSpecNum[Math.floor(Math.random()*upperSpecNum.length)];
      passwordText.value = password;
      }
    } else if (conUppercase && conNumbers) {
      var upperNum = uppercase.concat(numbers);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += upperNum[Math.floor(Math.random()*upperNum.length)];
      passwordText.value = password;
      }
    } else if (conUppercase && conSpecialCharacters) {
      var upperSpec = uppercase.concat(specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += upperSpec[Math.floor(Math.random()*upperSpec.length)];
      passwordText.value = password;
      }
    } else if (conUppercase) {
      var upper = uppercase;
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += upper[Math.floor(Math.random()*upper.length)];
      passwordText.value = password;
      }
    } else if (conNumbers && conSpecialCharacters) {
      var numberSpec = numbers.concat(specialCharacters);
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += numberSpec[Math.floor(Math.random()*numberSpec.length)];
      passwordText.value = password;
      }
    } else if (conNumbers) {
      var number = numbers;
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += number[Math.floor(Math.random()*number.length)];
      passwordText.value = password;
      }
    } else if (conSpecialCharacters) {
      var spec = specialCharacters;
      var i;
      for (var i = 0; i < promptLength; i++){
      var passwordText = document.querySelector("#password").textContent += spec[Math.floor(Math.random()*spec.length)];
      passwordText.value = password;
      }
    } 
  } else{
      alert("Please select a length greater than '8' and less than '128': ");
      
   }
 
   
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

