var randomStr = "";
var specialCharacter = "!@#$%^&*()+[]{}`~ ";
var number = " 0123456789 ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log (specialCharacter, number, lowerCase, upperCase); 

var generatePassword = function() {

    // Password length between 8 - 128 characters 
    var passwordLength = parseInt(window.prompt("Choose a password length between 8 and 128 characters"));

    if (passwordLength  >= 8 && passwordLength < 128) {
        // Choose lowercase, uppercase, numeric, and/or special characters 
         var lowCasePrompt = window.prompt("Do you want to include lowercase letters in your password? Yes or No.");
            if (lowCasePrompt === "yes" || lowCasePrompt === "YES") {
                randomStr = randomStr + lowerCase;
                console.log(randomStr);
                }


     var upCasePrompt = window.prompt("Do you want to include uppercase letters in your password? Yes or No.");
        if (upCasePrompt === "yes" ||  upCasePrompt === "YES") {
        randomStr = randomStr + upperCase;
        console.log(upperCase);
        }

    var specialPrompt = window.prompt("Do you want to include special characters in your password? Yes or No.");
        if (specialPrompt === "yes" || specialPrompt === "YES") {
        randomStr = randomStr + specialCharacter;
        console.log(specialCharacter);
        }

    var numPrompt = window.prompt("Do you want to include numbers in your password? Yes or No.");
        if (numPrompt === "yes" || numPrompt === "YES") {
        randomStr = randomStr + number;   
        console.log(number);
        }
    }
else {
    lowCasePrompt === false &&
    upCasePrompt === fasle &&
    specialPrompt === false &&
    numPrompt === false 
        window.alert("Invalid. Please try again!"); 
}

// Generate random 
var passwordStr = "";
for (var i = 0; i < passwordLength; i++) {
    passwordStr += randomStr.charAt[Math.floor(Math.random() * randomStr.length)];
console.log(passwordStr);
window.alert(passwordStr);

} 
};

// Get references to the #generate element 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input 
function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password ;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
