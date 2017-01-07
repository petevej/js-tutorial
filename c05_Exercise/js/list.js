// DOM-cache location of elmeent with ID one
//var el = document.getElementById('one');
//el.className = 'cool';

/* Selecting elements by classname
var elements = document.getElementsByClassName('hot');  // Find Hot Items

if (elements.length > 2){   // if 2 or more elements matched
  var el = elements[2];     // select the 3rd one
  el.className = 'cool';    // change its class to cool
}
*/

/* Selecting elements by tagname
var elements = document.getElementsByTagName('li');   // Find <li> elements

if (elements.length > 0) {
  var el = elements[0];
  el.className = 'cool';
}
*/

/* Selecting elements using CSS selectors
var el = document.querySelector('li.hot');    // querySelector method only returns the first match
el.className = 'cool';
*/

/* Selecting elements using querySelectorAll
var el = document.querySelectorAll('li.hot');
// update all matched elements to cool
for(i = 0; i < el.length; i++) {
  el[i].className = 'cool';
}
*/

/* Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';
*/

/* Select the starting point and find its children
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Change the values of the children's class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');
*/

/* Access and change a text node
var itemTwo = document.getElementById('two');   // Get second list item
var elText = itemTwo.firstChild.nodeValue;      // Get its text content
elText = elText.replace('pine nuts', 'kale');   // Change pine nuts to kale
itemTwo.firstChild.nodeValue = elText;          // Update the list item
*/


var firstItem = document.getElementById('one');  // Find the first list item
var textContent = firstItem.textContent;         // Cache text content value
var innerText = textContent.innerText;           // Get value of inner text

var msg = '<p>textContent: ' + textContent + '</p>';
    msg += '<p>innerText: ' + innerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';
