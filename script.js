//settiing variables
//var askLength = prompt("Please enter the desired length of the password: 8-128");
//var characters = prompt("Please list the character types you would like to include: 'lowercase', 'uppercase', 'numeric', and/or 'special characters'");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+","-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
//main function
function passGen() {
var askLength = prompt("Please enter the desired length of the password: 8-128");
var characters = prompt("Please list the character types you would like to include: 'lowercase', 'uppercase', 'numeric', and/or 'special characters'");
  if (askLength >= 8 && askLength <= 128){
    var realLength = Number(askLength); 
    console.log(realLength);
  } else (askLength);
 }  


  //function passGen() {
  //  document.getElementById("password-box").innerHTML = "Hello World";
        
  //}
  //console.log(lowercase[Math.floor(Math.random()*realLength)]);

  //for (i=0; i<realLength; i++)