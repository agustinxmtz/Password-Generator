// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//initialize the object I use to store the password criteria as selected by user.
var passwordCriteria = {
    size: 0,
    lowercase: 0,
    uppercase: 0,
    numeric: 0,
    special: 0,
}

// Write password to the #password input
function writePassword() {

    //calls the function that actually generates the password
    var password = generatePassword();

    //pass the newly generated password back to the text box on the html
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// This function generates the new password based on the supplied criteria and appends each character to newPassword
// Once the password is built, it returns it.
var generatePassword = function() {
    var newPassword = "";
    for (i = 0; i < passwordCriteria.size; i++) {
        var charType = randomNumber(1,4);

        //compare type new charType and if it is a type of character the user wants, generate a random character from that character set.
        if (charType == 1 && passwordCriteria.lowercase === 1) {
            newPassword += genLowercase();
            console.log(newPassword);
        }
        else if (charType === 2 && passwordCriteria.uppercase === 1) {
            newPassword += genUppercase();
            console.log(newPassword);
        }
        else if (charType === 3 && passwordCriteria.numeric === 1) {
            newPassword += genNumeric();
            console.log(newPassword);
        }
        else if (charType == 4 && passwordCriteria.special === 1) {
            newPassword += genSpecial();
            console.log(newPassword);
        }

        else i--

    }
    return newPassword;
}

//generates random numbers between and including min and max
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

//function creates series of prompts 
var criteriaPrompts = function() {

    while(passwordCriteria.size < 8 || passwordCriteria.size > 128) {
        passwordCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
        if (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
            window.alert ("Please enter a password size between 8 and 128 characters!");
        }
    }

    while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
        var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");
        if (lowercaseConfirm) {
            passwordCriteria.lowercase = 1;
        }
        var uppercaseConfirm = window.confirm("Would you like to include uppercasecase letters?");
        if (uppercaseConfirm) {
            passwordCriteria.upercase = 1;
        }
        var numericConfirm = window.confirm("Would you like to include numbers?");
        if (numericConfirm) {
            passwordCriteria.numeric = 1;
        }
        var specialConfirm = window.confirm("Would you like to include special characters?");
        if (specialConfirm) {
            passwordCriteria.special = 1;
        }
        if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
            window.alert ("You must choose at least one type of character to include in your password!");
        }
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
