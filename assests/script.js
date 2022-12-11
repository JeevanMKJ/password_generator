// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiseArray = [];
var specialCharArr = [
  "%",
  "$",
  "&",
  "!",
  "*",
  "?",
  "/",
  "_",
  "@",
  "#",
  "-",
  "=",
  "(",
  ")",
];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "uU",
  "V",
  "W",
  "X",
  "Y",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var corPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (corPrompts) {
    var generatedPassword = generatePassword();
    passwordText.value = generatedPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ADDED CODE

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var random = Math.floor(Math.random() * choiseArray.length);
    password = password + choiseArray[random];
  }
  return password;
}

function getPrompts() {
  choiseArray = [];

  characterLength = parseInt(
    prompt(
      "How many characters do you want your passwoed to be? (range: 8 to 128)"
    )
  );
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please give a NUMBER between 8 and 128. Try again.");
    return false;
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    choiseArray = choiseArray.concat(upperCaseArr);
  }
  if (confirm("Do you want lowercase letters in your password?")) {
    choiseArray = choiseArray.concat(lowerCaseArr);
  }
  if (confirm("Do you want numbers in your password?")) {
    choiseArray = choiseArray.concat(numberArr);
  }
  if (confirm("Do you want special characters in your password?")) {
    choiseArray = choiseArray.concat(specialCharArr);
  }
  return true;
}
