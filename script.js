var Password = {
    numbers: [""],
    specialCharacters: [""],
    lowercaseLetters: [""],
    uppercaseLetters: [""],
    length: 0,
    password: [""],
}


var lengthPrompt = 0;
// pw config prompt
function passConfig() {
    lengthPrompt = window.prompt("Enter a value between 8 and 128");

    if (lengthPrompt < 8 || lengthPrompt > 128) {
        window.alert("Please enter a value between 8 and 128");
        return passConfig();
    } else {
        var length = lengthPrompt;
        console.log(length);
    } 
        // else if (lengthPrompt >= 8 || lengthPrompt <= 128) {
        // window.confirm("Should your password contain special characters?");
        // }
        // if yes, then add special characters to array
        if( window.confirm("Should your password contain special characters?") === true) {
            var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","<",">","?","/"];
            console.log(specialCharacters);
        } else {
            var specialCharacters = [];
            console.log(specialCharacters);
        }
        // if no, then do not add special characters to array
        // window.confirm("Should your password contain numbers?");
        if( window.confirm("Should your password contain numbers?") === true) {
            var numbers = [0,1,2,3,4,5,6,7,8,9];
            console.log(numbers);
        } else {
            var numbers = [];
            console.log(numbers);
        }
        
        //if not true, then do not add numbers to array

        // window.confirm("Should your password contain lowercase letters?");
    
        // if no, then do not add numbers to array
        if( window.confirm("Should your password contain lowercase letters?") === true) {
            var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            console.log(lowercaseLetters);
        } else {
            var lowercaseLetters = [];
            console.log(lowercaseLetters);
        }
        // if yes, then add lowercase letters to array
        // if no, then do not add lowercase letters to array
        if( window.confirm("Should your password contain uppercase letters?") === true) {
            var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            console.log(uppercaseLetters);
        } else {
            var uppercaseLetters = [];
            console.log(uppercaseLetters);
        }



        //if no confirm options are selected, then alert user to select at least one option
        if (specialCharacters === [] && numbers === [] && lowercaseLetters === [] && uppercaseLetters === []) {
            window.alert("Please select at least one option");
            return passConfig();
        } 

        else {
            window.alert("Your password will be " + lengthPrompt + " characters long.");
        }
  




  
        // if (specialCharacters === [] && numbers === [] && lowercaseLetters === [] && uppercaseLetters === []) {
        //     window.alert("Please select at least one option");
        //     return passConfig();
        // } else {
        //     window.alert("Your password will be " + lengthPrompt + " characters long.");
        // }
  
  
  
  
  
        //not working
        // if all options are selected, then add all options to array
        //push all options to an array
        var password = specialCharacters.concat(numbers, lowercaseLetters, uppercaseLetters);
        console.log(password);


        //select random characters from array equal to the length of the password selected in lengthPrompt
        var password = password[Math.floor(Math.random() * lengthPrompt)];
        console.log(password);
        
        // if no options are selected, then alert user to select at least one option
        // if all options are selected, then add all options to array
        // if only some options are selected, then add only those options to array
        // if user cancels all of the prompts, then alert user to select at least one option
        // if user cancels all of the prompts, then return to beginning of function









}



