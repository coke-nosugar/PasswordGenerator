function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];    
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getCharacters () {
    var numberOfCharacters = document.getElementById("numberOfCharacters").value;
    console.log(numberOfCharacters)
    var characters = "abcdefghijklmnopqrstuvwxyz"
    if (document.getElementById("includeCapitals").checked) {
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } 
    if (document.getElementById("includeNumbers").checked) {
        characters = characters + "1234567890"
    }
    if (document.getElementById("includeSpecialCharacters").checked) {
        characters = characters + "!@#$%^&*"
    }
    return characters
}

function generatePassword () {
    var characters = getCharacters();
    var length = document.getElementById("numberOfCharacters").value;
    var password = '';
    var length = parseInt(document.getElementById("numberOfCharacters").value);
    var newPassword = document.getElementById("newPassword").innerHTML;
    for (var i = 0; i < length; i++) {
        password += random_item(characters);
    }
    console.log(password);
    //alert("Your new password is: " + password);
    return password
}

function printPassword () {
    var password = generatePassword();
    var newPassword = document.getElementById("newPassword");
    newPassword.value = password;
}

function copyText () {
    var copyText = document.getElementById("newPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}


function init () {
    document.querySelector('form').addEventListener('submit', function(event) { 
        event.preventDefault(); 
      }); 
    var regForm = 	document.getElementById("regForm");
    regForm.onsubmit = printPassword;
}

window.onload = init;

