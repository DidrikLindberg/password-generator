// variable declerations
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

var specialCharacters = [];
var numbers = [];
var lowercaseLetters = [];
var uppercaseLetters = [];
var charLength = 0;
//


//generateNewPassword function takes two parameters: password and charLength
//it then creates a new array called newpassword 
// it then uses a for loop to iterate through the password array and push a random character to the newpassword array based on the length of the password as stored in the charLength variable

function generateNewPassword(password, charLength) {
    let newpassword = [];
    for (let i = 0; i < charLength; i++) {
      let randomIndex = Math.floor(Math.random() * password.length);
      newpassword.push(password[randomIndex]);
    }
    return newpassword.join('');
    }

// Write password to the #password input
// function declares a password variable and sets it equal to the generatePassword function nad includes some parameters
// it then creates a variable called passwordText and sets it equal to the password element in the html
// it then sets the value of the passwordText variable to the password variable
function writePassword() {
    var password = generateNewPassword(specialCharacters.concat(numbers, lowercaseLetters, uppercaseLetters), charLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

console.log(password);  
} 


// generatePassword function is called when the generate button is clicked
// it then prompts the user to select a number between 8 and 128... 
// what type of characters they would like to include in their password, and then generates a password based on their selections
 

function generatePassword() {
    charLength = window.prompt("How many characters would you like your password to be? (8-128)");
    if (charLength === null) {
        return;
    } else   
    if (charLength < 8 || charLength > 128) {
        window.alert("Please select a number between 8 and 128");
        return generatePassword();
    } else {


        specchar = window.confirm("Should your password contain special characters?");
        if (specchar === true) {
        specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","<",">","?","/"];
        console.log(specialCharacters);
    } else {
        specialCharacters = [];
        console.log(specialCharacters);
    }


    numchar = window.confirm("Should your password contain numbers?");
    if (numchar === true) {
        numbers = [0,1,2,3,4,5,6,7,8,9];
        console.log(numbers);
    } else {
        numbers = [];
        console.log(numbers);
    }



    lowchar = window.confirm("Should your password contain lowercase letters?");
        if (lowchar === true) {
            lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            console.log(lowercaseLetters);
        } else {
            lowercaseLetters = [];
            console.log(lowercaseLetters);
        }

        
        upchar = window.confirm("Should your password contain uppercase letters?");
        if (upchar === true) {
            uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            console.log(uppercaseLetters);
        } else {
            uppercaseLetters = [];
            console.log(uppercaseLetters);
        }

        // if all confirm options are not true then alert user to select at least one option and rerun the function
        if (specchar === false && numchar === false && lowchar === false && upchar === false) {
            window.alert("Please select at least one option");
            return generatePassword();
        } else {
            window.alert("Your password will be " + charLength + " characters long.");
        }
        const newPassword = generateNewPassword(password);
        return newPassword;

    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
  });

