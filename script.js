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
console.log(randomNum());

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


// Function to generate password
function generatePassword () {

  // Gather information from the user
  let passwordLength = prompt("Choose beteen 8 and 128 characters");
  let doYouSpecial = confirm("Select 'Okay' to use special characters.");
  let doYouNumeric = confirm("Select 'Okay' to use numeric characters");
  let doYouLower = confirm("Select 'OK' to use lowercase characters");
  let doYouUpper = confirm("Select 'OK' to use uppercase characters");



 

return ;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


