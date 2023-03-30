var Password = {
    numbers: [],
    specialCharacters: [],
    lowercaseLetters: [],
    uppercaseLetters: [],
    charlength: 0,
    password: [],
    finalpass: [],
}


var lengthPrompt = 0;
// pw config prompts
function Generator() {
    lengthPrompt = window.prompt("Enter a value between 8 and 128");

    if (lengthPrompt < 8 || lengthPrompt > 128) {
        window.alert("Please enter a value between 8 and 128");
        return passConfig();
    } else {
        charlength = lengthPrompt;
        console.log(charlength);
    } 
        // else if (lengthPrompt >= 8 || lengthPrompt <= 128) {
        // window.confirm("Should your password contain special characters?");
        // }
        // if yes, then add special characters to array
        specchar = window.confirm("Should your password contain special characters?");
            if (specchar === true) {
            var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","<",">","?","/"];
            console.log(specialCharacters);
        } else {
            var specialCharacters = [];
            console.log(specialCharacters);
        }
        // if no, then do not add special characters to array
        // window.confirm("Should your password contain numbers?");
        numchar = window.confirm("Should your password contain numbers?");
        if (numchar === true) {
            var numbers = [0,1,2,3,4,5,6,7,8,9];
            console.log(numbers);
        } else {
            var numbers = [];
            console.log(numbers);
        }
        
        //if not true, then do not add numbers to array

        // window.confirm("Should your password contain lowercase letters?");
    
        // if no, then do not add numbers to array
        lowchar = window.confirm("Should your password contain lowercase letters?");
        if (lowchar === true) {
            var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            console.log(lowercaseLetters);
        } else {
            var lowercaseLetters = [];
            console.log(lowercaseLetters);
        }
        // if yes, then add lowercase letters to array
        // if no, then do not add lowercase letters to array
        upchar = window.confirm("Should your password contain uppercase letters?");
        if (upchar === true) {
            var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            console.log(uppercaseLetters);
        } else {
            var uppercaseLetters = [];
            console.log(uppercaseLetters);
        }


        // if all confirm options are not true then alert user to select at least one option
        if (specchar === false && numchar === false && lowchar === false && upchar === false) {
            window.alert("Please select at least one option");
            return passConfig();
        } else {
            window.alert("Your password will be " + lengthPrompt + " characters long.");
        }

        var password = specialCharacters.concat(numbers, lowercaseLetters, uppercaseLetters);
        console.log(password);

        function generatePassword(password, charlength) {
            let newpassword = [];
            for (let i = 0; i < charlength; i++) {
                let randomIndex = Math.floor(Math.random() * password.length);
                newpassword.push(password[randomIndex]);
            }
            //inlcude return statement in function to make the array available outside of the function
            return newpassword;
        }
        
        // set the password to the value of the generatePassword function and pass the password and charlength variables as arguments
           let finalpass = generatePassword(password, charlength);
            console.log(finalpass);



}
