# Basic Javascript Note - FreeCodeCamp
___
## 1. Data types
There are 7 data types in Javascript:

	1. undefined
	2. null
	3. boolean
	4. string
	5. symbol
	6. number
	7. object

variable declaration (cannot contain spaces or start with a number):
```Javascript
var ourName;
```

JS variables are declared as undefined by default

JS variables are case-sensitive

Best Practice: write variable names in camelCase, e.g. properCamelCase (first word is lowercase, then first letter of subsequent words capitalized)

```Javascript
increment/decrement:
i = i + 1;  and i = i - 1;
becomes
i++; and i--;
```
Everything to the right of the equal sign is evaluated first:
```Javascript
myVar = myVar + 5;
```
which is equivalent to:
```Javascript
myVar += 5;
```
The += notation can be applied to all operators +, -, *, /, %.

Basic structure of JS function is per below:
```javascript
function convertToF(celsius) {
  var fahrenheit;
  fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
convertToF(30);
```

JS can escape the **"EOQ"** or "end-of-quote" state when using a single or double quote mark inside a string by using \"
```javascript
var sampleStr = "Pete said, \"Roses are red and so are you\".";
```
JS - being a **weakly-typed** language - allows the use of either ' or " for quotes. If different types are used, then you can sandwiched them inside a string
```javascript
var quoteStr = 'This string has "double quotes" in it. And "probably" lots of them,';
```
Escape Sequences in Strings apply to
**', ", \, \n, \r, \t, \b, \f**

**\r** = Carriage return means to return to the beginning of the current line without advancing downward. The name comes from a printer's carriage, as monitors were rare when the name was coined. This is commonly escaped as "\r", abbreviated CR, and has ASCII value 13 or 0x0D.

**\n** = Linefeed means to advance downward to the next line; however, it has been repurposed and renamed. Used as "newline", it terminates lines (commonly confused with separating lines). This is commonly escaped as "\n", abbreviated LF or NL, and has ASCII value 10 or 0x0A. CRLF (but not CRNL) is used for the pair "\r\n".

**\f** = Form feed means advance downward to the next "page". It was commonly used as page separators, but now is also used as section separators. (It's uncommonly used in source code to divide logically independent functions or groups of functions.) Text editors can use this character when you "insert a page break". This is commonly escaped as "\f", abbreviated FF, and has ASCII value 12 or 0x0C.

**Concatenate:**
 ```javascript
 'My name is Alan,' + ' I concatenate.'
```

it can also be done between a new string and a string variable (both ways):
```javascript
var ourStr = "I came first. ";
ourStr += "I came second.";
```
Find string length by using the .length property:
```javascript
"Alan Peter".length;  //10
```
JS is a zero-based indexed language which means the first letter of a string is indexed 0
```javascript
firstname[0];
```
To find the last character in a string:
```javascript
firstname[firstname.length - 1];
```
JS string values are immutable, cannot replace individual characters but have to re-assign the whole string

JS Array assignment:
```javascript
var myArray = ["Pete", 27];
```
Multi-dimensional (nested) Array:
```javascript
var ourArray = [["the universe", 42], ["everything"], 101010]];
```
Access data inside arrays using indexes:
```javascript
var array = [1, 2, 3];
array[0];       //equals 1
var data = array[1];      //equals 2
```
Arrays are mutable, can be changed freely:
```javascript
var ourArray = [3, 2, 1];
ourArray[0] = 1;     // equals [1, 2, 1]
```
Access data inside MultiDimensional Arrays with index (starts with 0!):
```javascript
var arr = [
         [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [[10, 11, 12], 13, 14]
];
arr[3];     //equals [[10, 11, 12], 13, 14]
arr[3][0];     //equals [10, 11, 12]
arr[3][0][1];     //equals 11
```
Append one or more parameters and push them to the end of array using .push():
```javascript
var arr = [1, 2, 3];
arr.push(4);
//arr is now [1, 2, 3, 4]
```
You can even "pop" an element off the end of an array using .pop():
```javascript
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
```
Opposite from "pop", you can remove the first element of an array with .shift();
```javascript
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift():
```
You can also add an element in front of the array using .unshift();
```javascript
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");     // ourArray becomes ["Happy", "Stimpson", "J", "cat"]
```
---
## 2. functions

Structure:
```javascript
function functionName() {
     console.log("Hello World");     //console.log prints out the string inside the bracket
}
```
which can be called by invoking:
```javascript
functionName()
```
Definitions:
parameters = placeholder variables input for function
arguments = actual values that are "passed" into a function
```javascript
function functionWithArgs(arg1, arg2) {
     console.log(arg1 + arg2);
}
```
which can be called with arguments:
```javascript
functionWithArgs(2, 4);
```
Scope:
global variables = (1) variables which are declared with "var" outside any function and (2) variables which are declared inside a function but without the "var" declaration

local variables = variables which are declared with "var" inside any function

global and local variables can share the same name, but local takes precedence over global variable

functions can be used to manipulate and return a different value:

```javascript
function processArg(num) {
     return(num + 3) / 5;
}
processArg(7); // Equals 2
```
queue = CS abstract Data Structure concept where items are kept in order, new ones can be added to the back and old ones taken off the front. Function below returns the removed element:
```javascript
function nextInLine(arr, item) {
     arr.push(item);
     item = arr.shift();
     return item;
}
```
___
## 3. if conditions
boolean values (true, false) not ("true", "false")
if condition structure:
```javascript
if (condition is true) {
     perform this action
}
otherwise perform this action
```
translates to:
```javascript
function test (myCondition) {
     if (myCondition) {
          return "It was true";
     }
     return "It was false";
}
test(true);     // returns "It was true"
trest(false);   // returns "It was false"
```
instead of testing boolean value, there are many other Comparison Operators that evaluate to true or false, e.g. == and !=
```javascript
function equalityTest(myVal) {
     if (myVal == 10) {
          return "Equal";
     }
     return "Not Equal";
}
```
JS can compare two different data types by converting them e.g. numbers and strings:
```javascript
1    ==  '1'     // true
"3"  ==   3     // true
```
However, using Strict Equality (===) and Strict Inquality (!==) test both value and data type, s.t. number will not equal string:
```javascript
3     ===     '3'     // false
```
It's possible and encouraged to combine more than one operator test using logical && (and) or || (or) operators:
```javascript
if (num > 5 && num < 10) {
     return "Yes";
}
return "No";
```
or:
```javascript
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside"
  }
  // Only change code above this line
  return "Inside";
}
```
The full if-else if-else condition structure can be written like so:
```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}}
```
Be wary of the order of statements when comparing values. For "<" comparisons, start with the lowest test first and work your way up. For ">" comparisons, start with the highest test first and work your way down:
```javascript
if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
```
___
## 4. Switch statement
switch statement tests a value to match different cases with strict equality (===):
```javascript
switch (num) {
     case value1:
          statement1;
          break;
     case value2:
          statement2;
          break;
...
     case valueN:
          statementN;
          break;
...
     default:
          defaultStatement;     // default statement is used when the case does not match at all
}
```
which translates to a functioning code like so:
```javascript
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}
```
Unless the compiler reads a "break", the switch statements will continue to be read. If the same statement is used for multiple cases, below structure is useful:
```javascript
switch(val) {
     case 1:
     case 2:
     case 3:
          result = "1, 2, or 3";
          break;
     case 4:
          result = "4 alone";
}
```
switch statements are generally easier to write than many chained if / else if statements. Don't forget to add break; after each and every single statement except for the last one, for which the compiler will see closing } and terminate switch statement automatically.

Instead of using if/else statement to simply return true/false boolean answer, simply use the comparison operator:
This is commonly done:
```javascript
function isEqual(a,b) {
     if (a === b) {
          return true;
     } else {
          return false;
     }
}
```
whereas this gets rid of if/else altogether and is much more efficient:
```javascript
function isEqual(a,b) {
     return a === b;
}
```
\*can be done with all comparison operators: <, >, <=, >=, !=, == and the strict versions of these.

If a return statement is reached prematurely in a function, the execution terminates then and there and returns to the calling location:
```javascript
function myFun() {
     console.log("Hello");
     return "World";
     console.log("byebye")
}
myFun();
```
The above will only output "Hello" to the console but never byebye since return is reached.

Below is an example of how combining switch and if condition can create a simple card counting function:
```javascript
var count = 0;     // count is a global variable
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;    // For card 2, 3, 4, 5, 6, increment count by 1
      break;
    case 7:
    case 8:
    case 9:
      count = count;     // For card 7, 8, 9, count remains unchanged
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;     // For card 10, J, Q, K, A, decrement count by 1
  }
  if (count <= 0) {
    var decision = "Hold";     // decision is a local variable
  } else {
    var decision = "Bet";
  }
  return count + " " + decision;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
```
___
## 5. Objects
JavaScript Objects - stores data in Object's properties
Properties are created and assigned values like so:
```javascript
var myDog = {
  "name": "Alfie",
  "legs": 4,
  "tails": 2,
  "friends": ["Mom", "Dad", "Sis", "Pete", "Yoghurt", "Uncle Richard"]
};
```
Accessing Object's properties can be done using (.) and ([]):
```javascript
var myObj = {
prop1: "val1",
prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
and
var myObj = {
"Space Name": "Kirk",
"More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
```
You can also use a variable to access a property instead of using string " " property selector:
```javascript
var myDog = "Hunter";     // Assigning the string "Hunter" to a variable myDog
var dogs = {
     Fido: "Mutt",
     Hunter: "Doberman",     // Giving string value "Doberman" to breed property "Hunter"
     Snoopie: "Beagle"
}
var breed = dogs[myDog];     // calling property of myDog = "Hunter" and assigning value "Doberman" to new variable breed
console.log(breed);     // output "Doberman"
```
Updating Object Properties can be done with both (.) and ([]):
```javascript
myDog.name = "Happy Coder";
     or
myDog["name"] = "Happy Coder";
```
Adding is done in a similar way to updating property:
```javascript
myDog.bark = "hong-hong";
```
Deleting is done using delete command:
```javascript
delete myDog.bark;     // Now the dog has no sound when he barks TT
```
Object's properties can be used to make a lookup table:
```javascript
// Function Setup
function phoneticLookup(val) {
  var result = "";  // Initialize result
  // lookup table
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];  // access values via val variable
  return result;
}

// invoke function with input
phoneticLookup("charlie");
```
You can check whether object has a certain property by using:
```javascript
.hasOwnProperty(propname)
```
You can create a function to check for property and return the value assigned to it if there is one:
```javascript
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(objName, checkProp) {
  // if checks whether property "checkProp" exists
  if (objName.hasOwnProperty(checkProp)) {
    return objName[checkProp];     // if it does, return the property value
  } else {
  return "Not Found";     // if not found
  }
}
// Test your code by modifying these values
checkObj(myObj ,"bed");
```
Object storage - it can be used to store all combinations of data types (strings, numbers, booleans, arrays, functions, and objects). Here is how to add a very complex album metadata:
```javascript
var objName = [ {"prop1": "val1", "prop2": "val2"}, {"prop3": "val3", "prop4": "val4"}];     // each {} is one element of a 2-element array
```
Here is the longer example:
```javascript
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  // Add record here
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassettes",
      "LP"
    ],
    "gold": true
  }
];
```
In order to access sub-properties of an object, you can of course chain the (.) and ([]) together. Need to use ([]) for property names with space in between:
```javascript
var gloveBoxContents = myStorage.car.inside["glove box"];
```
or:
```javascript
var secondTree = myPlants[1].list[1];
```
___
## 6. For Loops
structure:
```javascript
for (initialization; condition; final expression);
```
example of a for loop that creates an array with the value [1, 2, 3, 4, 5]:
```javascript
var myArray = [];     // initialize with an empty array
for (var i = 1; i < 6; i++) {
  myArray.push(i);     // append each value to the end
}
```
we can even increment by a number other than 1:
```javascript
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);     // outputs [1, 3, 4, 5, 9]
}
```
For both cases, it's important to remember that the iteration will stop as the i value is greater than the threshold.
On the opposite end, we have the use of decrement in for loops:
```javascript
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);     // outputs [9, 7, 5, 3, 1]
}
```
For loops can be very useful in outputting each element of the array to the console:
```javascript
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
}
```
```javascript
var myArr = [ 2, 3, 4, 5, 6];
// sum all elements of the array using total += arr[i]
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
For a more complex operation, nested for loops can be used to evaluate nested arrays:
```javascript
function multiplyAll(arr) {
  var product = 1;     // product has to start with 1 to avoid zero mult.
  // nested for loops over outer and inner array
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];     // keep multiplying each element
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
```
While loops - it runs while a specified condition is true and stops once that condition is longer true
```javascript
// Setup
var myArray = [];
// Only change code below this line.
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;     // VERY IMPORTANT TO AVOID INFINITE LOOP
}
```
You can also use a combination of if/else and while loops with the right positioning of counters to search through layers of directory:
```javascript
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){
// Only change code below this line
var i = 0;
var j = 0;
while (i < contacts.length) {
  if (firstName == contacts[i].firstName) {
    j++;     // iterate only if firstName matches database
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
      return "No such property";
    }
  }
  i++;     // iterate over all entries
}
if (j === 0) {
  return "No such contact";     // if no j = 0 means no match at all
}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Harry", "likes");
```
\*Remember that while looping through all entries, it may be easy to test all kinds of conditions, but the difficult part is when the entry does not even exist, that's when you have to add a counter that iterates when there is a match only....
___
## 7. RANDOM NUMBER GENERATOR FUNCTION!!! WOOHOOO
```javascript
function randomFraction() {
     return Math.floor(Math.random() * 10);    // Generates random number rounddown([0, 1) * 10) = 0-9
}
```
If you want to keep it within a range, use this function:
```javascript
function randomRange(myMin, myMax) {
     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;     // [0, 1) * (Range + 1) + Min
}
```
___
## 8. Regular Expressions

Word matching:
```javascript
var regex = /word/gi;
```
Definitions:
/ - initiate regular expression
word - the pattern we are looking to match
/ - end of regular expression
g - global (search the whole string, not just the first match)
i - ignore lowercase/uppercase

Testing:
```javascript
// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
// Expression
var expression = /and/gi;
// Testing
var andCount = testString.match(expression).length;
```
Digit matching:
```javascript
var regex = /\d+/g;
```
Definitions:
\d - retrieve one digit in a string
\+  - allows for matching one or more digits
```javascript
// Setup
var testString = "There are 3 cats but 4 dogs.";
// Expression
var expression = /\d+/g;
// Testing
var digitCount = testString.match(expression).length;
```
White space matching:
White spaces are: " ", \r (carriage return), \n (newline), \t (tab), and \f (the form feed)
```javascript
var regex = /\s+/g;
```
```javascript
// Setup
var testString = "How many spaces are there in this sentence?";
// Expression
var expression = /\s+/g;
// Testing
var spaceCount = testString.match(expression).length;
```
INVERSION!!!!! - yes, you are allowed to capitalize any regex selector and it will select the opposite of that expression
Example: \s = white space, \S = anything that's not white space
```javascript
// Setup
var testString = "How many non-space characters are there in this sentence?";
// Expression
var expression = /\S/g;
// Testing
var nonSpaceCount = testString.match(expression).length;
```
