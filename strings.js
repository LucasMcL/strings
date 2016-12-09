// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.

// The text input should only accept letters. No numbers.

// Implement the logic in the reversal function
// that reverses the order of the characters in the
// string, and outputs the result in the DOM,
// below the text input.

// Implement the logic in the alphabits function
// that return the characters in alphabetical order,
// and outputs the result in the DOM,
// below the text input.

// Implement the logic in the palindrome function
// that determine whether the string is a palindrome.
// If it is, display the text
// "Your string is a palidrome" in the DOM,
// below the text input.

// When the user presses the enter key in the text
// input, or clicks the button, set the value of
// the testString variable (see below) to the value
// of the input.

// The output of each of the functions should
// immediately appear as well.


var testString = "";
function reversal(str) {
  var rev = str.split('').reverse().join('')
  document.getElementById('reversed').textContent = rev
}

// Converts letters to lower case before sort
function alphabits(str) {
  str = str.toLowerCase()
  var alph = str.split('').sort().join('')
  document.getElementById('alphabetized').textContent = alph
}

function palindrome(str) {
  str = str.toLowerCase()
  if(str === str.split('').reverse().join('')) {
    document.getElementById('palindrome').textContent = "Your string is a palidrome"
  }
}

function onClick() {
  // Reset palindrome message
  document.getElementById('palindrome').textContent = ""

  var input = document.getElementById('string-input')
  testString = input.value
  manipulateString(testString)
}

function onKeypress(keyEvt) {
  if (keyEvt.key === "Enter") {
    onClick()
  }
}

function manipulateString(str) {
  if(validInput(testString) === true) {
    document.getElementById('string-input').value = ""
    reversal(str)
    alphabits(str)
    palindrome(str)
  }
  else {
    alert("Please do not include numbers")
  }
}

// Returns false if input is not valid
function validInput(str) {
  var re = /^[^0-9]+$/i
  return re.test(str)
}

document.getElementById('manipulate-btn').addEventListener('click', onClick)
document.getElementById('string-input').addEventListener('keypress', onKeypress)









