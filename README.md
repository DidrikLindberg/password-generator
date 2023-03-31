# password-generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Javascript    | [https://developer.mozilla.org/en-US/docs/Web/javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |   

## Description

[Deployed Site](https://didriklindberg.github.io/password-generator/)

The password generator app allows users to generate a random password based on their desired length and character types (special characters, numbers, lowercase and uppercase letters). The app uses JavaScript to prompt the user for their preferences and generate a new password using a random selection of characters. The app then displays the generated password on the HTML page, allowing the user to 
copy it to their clipboard for use elsewhere.

![My_Image](assets/imgs/app%20preview.jpg)


## function examples

the follwing example function initiates gathering of requirements the password should include

```java
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
        specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","  +","[","]","{","}","|",";",":","<",">","?","/"];
        console.log(specialCharacters);
    } else {
        specialCharacters = [];
        console.log(specialCharacters);
    }
````


The writePassword() function is responsible for writing the generated password to the HTML page. It is called when the user clicks the "Generate Password" button.


```Java
// function declares a password variable and sets it equal to the generatePassword function nad includes some parameters
// it then creates a variable called passwordText and sets it equal to the password element in the html
// it then sets the value of the passwordText variable to the password variable

function writePassword() {
    var password = generateNewPassword(specialCharacters.concat(numbers, lowercaseLetters, uppercaseLetters), charLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

console.log(password);  
````


## Learning Points 
For this project I had to use new methods and functions I ahd not used before. below is alist of the most valuable parts I learned during this project

 - document.querySelector
 - for loops
 - Window.prompt/confirm/alert
 - addEventListener
 - getElementbyID
 - document.execCommand


 ### Find my


 * [Portfolio](https://didriklindberg.github.io/Portfolio-Site) 
* [Github](https://github.com/DidrikLindberg)


## Credits

- [UCB Bootcamp](https://bootcamp.berkeley.edu/coding/)
    - Jerome Chenette

- [MDN Web Docs - document.execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)