// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define an array of lowercase letters, uppercase, numbers, and special characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
//function to generate password
function generatePassword() {
  var charList = [];
  var pwDisplay = [];

  console.log(charList);
  //user input begins here
  var userSelect = prompt("Password Length? (8-128 char)");
  if (userSelect < 8) {
    alert("character limit must exceed 8 characters");
    return;
  }
  if (userSelect > 128) {
    alert("character limit must not exceed 128 characters");
    return;
  }
  if (isNaN(userSelect)) {
    alert("Invalid character selection");
    return;
  }
  if (confirm("Use upper case letters?")) {
    charList = charList.concat(upperCase);
  }
  if (confirm("Use Lower Case Letters?")) {
    charList = charList.concat(lowerCase);
  }
  if (confirm("Use Numbers?")) {
    charList = charList.concat(numbers);
  }
  if (confirm("Use Special Characters?")) {
    charList = charList.concat(specialCharacter);
  }
  //i have declared that the variable i has to run # times, by what the user selects, runs as for loop
  for (var i = 0; i < userSelect; i++) {
    pwDisplay =
      pwDisplay + charList[Math.floor(Math.random() * charList.length)];
  }
  //final result of the userSelect
  return pwDisplay;
}
