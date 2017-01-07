# Object Oriented and Functional Programming

**Constructor function** is another way to create a JS object, referring to the new object being created using "this" variable:
```javascript
var Car = function() {
     this.wheels = 4;     // property "wheels" has value 4
     this.engines = 1;     // property "engines" has value 1
     this.seats = 5;     // property "seats" has value 5
}     // remember to use ; at the end of each "this" statement
```
New instances of the object created previously can be made with "new" keyword in front of the constructor function:
```javascript
var myCar = new Car();
The new instance created works exactly like any JS object, you can add new properties to them as well:
```
```javascript
myCar.turboType = "twin";
```
constructor function can also be written with arguments s.t. custom property values are assigned:
```javascript
var Car = function(wheels, seats, engines) {
  //Each property is assigned input variables
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

// Constructor with arguments
var myCar = new Car(10, 5, 2);
```
**Private property** is defined inside a constructor function using:
```javascript
var prop = 10;
```
Whereas **public methods** are functions that are defined with this variable:
```javascript
var gear = 5;
this.setGear = function(set) {
     gear = set;
}
```
**Map** method will iterate through every element of the array and creating new array without actually modifying the original array:
```javascript
var oldArray = [1,2,3,4,5];

// map old to new by adding 3 to all

var newArray = oldArray.map(function(val){
  return val + 3;
});
```
Method **reduce** can be used to iterate through an array and accumulate it to one value. The arguments are previousVal and currentVal:
```javascript
var array = [4, 5, 6, 7, 8];
var singleVal = 0;
// call reduce method
singleVal = array.reduce(function(previousVal, currentVal) {
     return previousVal + currentVal;
}, 0);     // first arg of the reduce method is the function(arg1, arg2) and second arg is the beginning index of the array, in this case 0 (default is 0)
```
Method **filter** can be used to iterate through array and filter out all elements where given condition is not true. The return statement is the condition for all array elements which are kept and saved in the newly created (filtered) array:
```javascript
var oldArray = [1, 2,3 ,4 ,5 ,6 7, 8, 9, 10];
// filter method
var newArray = oldArray.filter(function(val) {
     return val < 6;          // Filter out all values greater than 5, filter in all values less than 6
});
```
Method **sort** can be used to sort values in an array alphabetically or numerically. !IMPORTANT it will actually:
```javascript
// Sort from smallest to largest
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});

// Sort from largest to smallest
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
     return b - a;
});
```
Method **reverse** the order of the array:
```javascript
newArray = array.reverse();
```
Method concat to concatenate arrays:
```javascript
newArray = oldArray.concat(concatMe);
```
Method **split** to split a string into an array:
```javascript
var string = "Split me into an array";
var array = [];

// split string into array of words

array = string.split(" ");
```
Method **join** to join words in an array into a string:
```javascript
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// join using space

joinedString = joinMe.join(" ");
```
