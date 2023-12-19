//# Character_set_array

// .special characters 
var special_characters_choice = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// .numeric characters 
var numeric_characters_choice = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// .lowercase characters 
var lower_characters_choice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// .uppercase characters 
var upper_characters_choice = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// #Function for random element from an array

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// # prompt function for password choice

function getPasswordOptions() {
  var length = parseInt(prompt('Enter the length of the password'));

//# Length check for password characters

  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid number between 8 and 128.');
    return;
  }

//# Confirmation window for character set choice

  var special_character = confirm('Include special characters?');
  var numeric_charcter = confirm('Include numeric characters?');
  var lowercase_character = confirm('Include lowercase characters?');
  var uppercase_character = confirm('Include uppercase characters?');

//# alert message for wrong choice

  if (!special_character && !numeric_charcter && !lowercase_character && !uppercase_character) {
    alert('Please select at least one character type.');
    return;
  }

//# Object with password character choices values

  var passwordOptions = {
    length: length,
    special_character: special_character,
    numeric_charcter: numeric_charcter,
    lowercase_character: lowercase_character,
    uppercase_character: uppercase_character
  };

  return passwordOptions;
}

//# Password generation according to the user's choice.

function generatePassword() {
  var options = getPasswordOptions();

  var desired_choice_characters = [];
  var extra_need_characters = [];

//.. random selection of charaters according to the choices
//.. adding extra charcters for fulfilment of the desired length of the password
  if (options.special_character) {
    desired_choice_characters = desired_choice_characters.concat(special_characters_choice);
    extra_need_characters.push(getRandom(special_characters_choice));
  }

  if (options.numeric_charcter) {
    desired_choice_characters = desired_choice_characters.concat(numeric_characters_choice);
    extra_need_characters.push(getRandom(numeric_characters_choice));
  }

  if (options.lowercase_character) {
    desired_choice_characters = desired_choice_characters.concat(lower_characters_choice);
    extra_need_characters.push(getRandom(lower_characters_choice));
  }

  if (options.uppercase_character) {
    desired_choice_characters = desired_choice_characters.concat(upper_characters_choice);
    extra_need_characters.push(getRandom(upper_characters_choice));
  }

  var remainingLength = options.length - extra_need_characters.length;

  for (var i = 0; i < remainingLength; i++) {
    var randomChar = getRandom(desired_choice_characters);
    extra_need_characters.push(randomChar);
  }

//# Shuffle of characters 

  extra_need_characters = extra_need_characters.sort(function () {
    return Math.random() - 0.5;
  });

//# string conversion

  var password = extra_need_characters.join('');
  return password;
}

//# html id generate reference

var generateBtn = document.querySelector('#generate');

//# Password text in password box

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// # Button eventlistener
//.. when the button will be pressed then process of generating the password will begin.
generateBtn.addEventListener('click', writePassword);

