// Assignment code here
var characters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(x) {
  // set the length 
  var length = prompt("Please enter the number of charactors for your password. (must be between 8 and 128 characters)")
  if (length < 8) {
    alert("Please pick a longer password length. " + length + " is to short for this program.")
    return;
  } else if (length >128) {
    alert("Please pick a shorter password length. " + length + " is to long for this program.")
    return;
  }

  // create a two dimension characters array 
  // the first dimension will hold the various arrays
  // while the second dimension holds the specific characters
  characters = [];
  if (confirm("Should Your Password Include: LOWERCASE ?") == true) {
    characters.push("abcdefghijklmnopqrstuvwxyz".split(""));
  }
  if (confirm("Should Your Password Include: UPPERCASE ?") == true) {
    characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  } 
  if (confirm("Should Your Password Include: NUMBERS ?") == true) {
    characters.push("0123456789".split(""));
  } 
  if (confirm("Should Your Password Include: SPECIAL CHARACTERS ? !@#$%^&*()") == true) {
    characters.push("!@#$%^&*()".split(""));
  } 
  if (characters.length == 0) {
    alert("You must pick some characters to include")
    return;
  }

  // the index is created and made to the length of characters the user specified
  // it is then shuffled so that we can randomly pick password charactor spots
  index = []
  for (i = 0 ; i < length ; i++) {
    index[i] = i;
  }
  shuffleArray(index)

  // because we want each type of charactor used at least once
  // we will force the index to run once for each type of charactor
  // we can use the first values of the index array because it is shuffled
  // then we assign all other charactors randomly with equal percentage
  // to each character groups
  for (i = 0 ; i < length ; i++) {
    if (i < characters.length) {
      index[i] = characters[i][Math.floor(Math.random() * characters[i].length)]
    } else {
      var dimension1 = Math.floor(Math.random() * characters.length)
      var dimension2 = Math.floor(Math.random() * characters[dimension1].length)
      index[i] = characters[dimension1][dimension2]
    }

  }

  return index.toString().replace(/,/g,"");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// array shuffle function with credit going to:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}