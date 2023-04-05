const specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];
const lowerCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
let characterLength = 8;
let choiceArray = [];

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    const correctPrompts = getPrompts();

    if (correctPrompts) {
        const newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
    let password = "";
    for(let i = 0; i < characterLength; i++) {
        const randomIndex = Math.floor(Math.random() * choiceArray.length);
        password += choiceArray[randomIndex];
    }
    return password;
}

function getPrompts() {
    choiceArray = [];

    characterLength = parseInt(prompt("How many characters will your password be?"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ) {
        alert("Error. Input has to be a number between 8 and 128 digits.");
        return false;
    }

    if (confirm("Would you like lowercase characters?")) {
        choiceArray = choiceArray.concat(lowerCharacter);
    }

    if(confirm("Would you like uppercase characters?")) {
        choiceArray = choiceArray.concat(upperCharacter);
    }

    if(confirm("Would you like numbers?")) {
        choiceArray = choiceArray.concat(numberArray);
    }

    if (confirm("Would you like special characters?")) {
        choiceArray = choiceArray.concat(specialCharacterArray);
    }

    return true;
}
