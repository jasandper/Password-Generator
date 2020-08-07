// Assignment Code
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate a random special charcter
function randomSpecial(){
  let specialChars = ['#','!',':','$','@'];
  let randomChar = specialChars[Math.floor(Math.random()* specialChars.length)];
  return randomChar;
}

// Function to generate a random numberic number
function randomNum() {
  let num = Math.floor(Math.random() * 10);
  return num;
}


// Function to generate random lowercase letter
function randomLower() {
  let lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z'];
  let randomLowerLetter = lowerLetters[Math.floor(Math.random()* lowerLetters.length)];
  return randomLowerLetter;
}

// Function to generate random uppercase letter
function randomUpper() {
  let upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'];
  let randomUpperLetter = upperLetters[Math.floor(Math.random()* upperLetters.length)];
  return randomUpperLetter;
}


function getCharacterArrays (doYouSpecial,doYouNumeric,doYouLower,doYouUpper) {
  let array = [];
  if (doYouSpecial) {
    array.push(randomSpecial);
  } 
  if (doYouNumeric) {
    array.push(randomNum);
  }
  if (doYouUpper) {
    array.push(randomUpper);
  }
  if (doYouLower) {
    array.push(randomLower);
  }
  return array;
}


// Function to generate password
function generatePassword () {
  let result = [];
  let passwordLength;
  let doYouSpecial;
  let doYouNumeric;
  let doYouLower;
  let doYouUpper;

// Function to gather and Validate input for password length
function pwdValidate(){
  passwordLength = parseInt(prompt("Choose a password length"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Choose a password length between 8 and 128 characters");
      pwdValidate();
    } 
    if (isNaN(passwordLength))  {
      alert("Please enter a numeric value");
      pwdValidate();
    }
  }

// Function to gather and validate user chacter type selection
function charValidate(){
  doYouSpecial = confirm("Select 'OK' to use special characters.");
  doYouNumeric = confirm("Select 'OK' to use numeric characters");
  doYouLower = confirm("Select 'OK' to use lowercase characters");
  doYouUpper = confirm("Select 'OK' to use uppercase characters");
  if (!doYouSpecial && !doYouNumeric && !doYouLower && !doYouUpper) {
    alert("You must choose at least one character type");
    charValidate();
  }
}

pwdValidate();
charValidate();

// Randomly generates a character within the users selections
let charArray = getCharacterArrays(doYouSpecial,doYouNumeric,doYouLower,doYouUpper);  
let randomCharacterLength = passwordLength - charArray.length; 
  for (i=0; i < randomCharacterLength; i++) {
    let randomNumber = Math.floor(Math.random()* charArray.length)
    result.push(charArray[randomNumber]())
  }
// Insures at least one of each character type selection is included in the password
  for (i=0; i < charArray.length; i++) {
      result.push(charArray[i]());
  }
  return result.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


