# Password-Generator

# Random generator functions 
- Four functions were created for each respective user character type option to generate a random character for : special characters, numbers, uppercase letters, and lowercase letters. 

# User input specific characters
- created a function with parameters consistent with users character type choice.  Arguments passed into this function are the users character type choices and this function executes the random generator functions accordingly and stores them in an array. 

# Generate Password
- for this I created a function "generatePassword()".  In order to insure that at least on character type selected by the user is included in their password I created two seperate for loops.  One for loop iterates the number of times equal to character types selected by the user, and puts this at the end of the password.  The remaining characters are created randomly using the second for loop and placed in front. 

# User input validation 
- created a function pwdValidate() which ensures a number between 8 and 128 is entered and that the input is a numeric value.  user prompted until valid input is entered.
- created a function charValidate() which ensures at least one character type is selcted by the user and continues to prompt until a valid input.