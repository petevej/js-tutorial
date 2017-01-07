# Some important bits from Jon Duckett's Javascript And J Query Book
## Chapter 5 - Document Object Model

![alt text](http://i.kinja-img.com/gawker-media/image/upload/t_original/794026551144186516.jpg "JS and jQuery Book")

**How to work through this book:**
*Read through the whole chapter mindfully and try to understand everything first, then come back to the 1st page and work through the exercise one-by-one. When doing exercise, cover the code first and read the code explanation, then try to code your own solution and test before checking the answer*

### STEP 1 - Access the elements
- Select individual element node:
```Javascript
getElementById()  // Select element with matching ID - this is usually fastest
document.getElementById('one')  // use the id method to search the whole document object matching the parameter "one"

```
```Javascript
querySelector()   // Select element with certain CSS selector (class/ID)
```
- Select multiple elements (Nodelists), remember that Element(s) has s:
```Javascript
getElementsByClassName('hot')    // Select a class of elements e.g. .hot
```
```Javascript
getElementsByTagName('li')    // Use HTML Tag names e.g. <li>
```
```Javascript
querySelectorAll('li[id]')    // CSS selector, selects all li elements that have an ID
```
- Traversing between element nodes:
```Javascript
.parentNode  // Selects the parent of the current node
```
```Javascript
.previousSibling    // one door up on the DOM tree
.nextSibling    // one door down on the DOM tree
```
```Javascript
.firstChild   // first child of the current element
```
```Javascript
.lastChild    // last of the same
```

### STEP 2 - Work with those elements
Access/update text nodes:

1. Select element using selectors
2. Use traversing techniques to get to the text node
3. To access the next, use nodeValue

Work with HTML content:

1. **.innerHTML** property accesses both the child elements and text content
2. **.textContent** property access only the text
3. Methods below allows node manipulation right on the DOM tree:
**createElement()**
**createTextNode()**
**appendChild() / removeChild()**
aka DOM manipulation

Access or update attribute values:

1. Use methods below to work with className/id:
**hasAttribute()**
**getAttribute()**
**setAttribute()**
**removeAttribute()**

## Chapter 7 - jQuery

### Sample HTML
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript &amp; jQuery - Chapter 7: Introducing jQuery - Basic Example</title>
    <link rel="stylesheet" href="css/c07.css" />
  </head>
  <body>
    <div id="page">
      <h1 id="header">List</h1>
      <h2>Buy groceries</h2>
      <ul>
        <li id="one" class="hot"><em>fresh</em> figs</li>
        <li id="two" class="hot">pine nuts</li>
        <li id="three" class="hot">honey</li>
        <li id="four">balsamic vinegar</li>
      </ul>
    </div>
    <script src="js/jquery-1.11.0.js"></script>
    <script src="js/example.js"></script>
  </body>
</html>
```
### Fundamentals:

#### 1. Chaining
```Javascript
$(document).ready(function(){
  $('li[id!="one"]').hide().delay(500).fadeIn(1400);
});
```
#### 2. Adding New content
```Javascript
$(document).ready(function(){
  $('ul').before('<p class="notice">Just updated</p>');
  $('li.hot').prepend('+');
  var newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after(newListItem);
});
```
#### 3. Add/Remove Class and ID
```Javascript
$(document).ready(function(){
  $('li#three').removeClass('hot');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');    // use .attr to add attribute
});
```
#### 4. Looping with Each
```Javascript
$(document).ready(function(){
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});
```
#### 5. Grab and Append HTML fragment
```Javascript
$(document).ready(function(){
  var listHTML = $('ul').html();
  $('ul').append(listHTML);
});
```
#### 6. Grab and Append HTML node
```Javascript
$(document).ready(function(){
  var listItemHTML = $('li').html();
  $('li').append('<i>' + listItemHTML + '</i>');
});
```
#### 7. Grab text fragments
```Javascript
$(document).ready(function(){
  var listText = $('ul').text();
  $('ul').append('<p>' + listText + '</p>');
});
```
#### 8. Grab text node
```Javascript
$(document).ready(function(){
  var listItemText = $('li').text();
  $('li').append('<i>' + listItemText + '</i>');
});
```
### Advanced:

#### 9. Basic Effects
```Javascript
$(document).ready(function(){
  // hide first, then slide down to start
  $('h2').hide().slideDown();
  var $li = $('li');
  // hide all list items, then fade them in one-by-one
  $li.hide().each(function(index) {
    $(this).delay(index * 700).fadeIn(700);
  });
  // add event listener to fade out li item upon click
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
});
```
#### 10. Animate
```Javascript
$(document).ready(function(){
  $('li').on('click', function() {
    // animate method takes 3 arguemnts, (newCss, speed, complete function)
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80',
    }, 500, function() {
      $(this).remove();
    });
  });
});
```
#### 11. Advert Slider @endzone
```Javascript
$(document).ready(function(){
  // cache the window
  var $window = $(window);
  // cache the ads
  var $slideAd = $('#slideAd');
  // calculate and cache the height of end zone = pageHeight - viewportHeight - 500px
  var endZone = $('#footer').offset().top - $window.height() - 500;
  // add event listener for scrolling
  $window.on('scroll', function() {
    // if end zone is breached .scrollTop tells how far user has scrolled
    if ((endZone) < $(window).scrollTop()) {
    // slide the box in from right edge in 250 ms
    $slideAd.animate({ 'right': '0px'}, 250);
    // if scrolling hasn't reached end zone or box is the the middle of animating, slide it back out
  } else {
    $slideAd.stop(true).animate({ 'right': '-360px'}, 250);
  }
  });
});
```
#### 12. Changing Content
```Javascript
$(document).ready(function(){
  $('li:contains("pine")').text('almonds');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});
```
#### 13. Changing CSS
```Javascript
$(document).ready(function(){
  var backgroundColor = $('li').css('background-color');
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
  $('li').css({
    backgroundColor: '#c5a996',   // javascript will read the '-' between background-color as a math minus sign, need to use 'background-color' or backgroundColor
    border: '1px solid #fff',
    color: '#000',
    fontFamily: 'Georgia',
    paddingLeft: '+= 75'        // += is paddingLeft = paddingLeft + 75
  });
});
```
#### 14. Changing Dimensions
```Javascript
$(document).ready(function(){
  $(function() {
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeigth + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');
  });
});
```
#### 15. Using Event listeners
```Javascript
// simple example
$(document).ready(function(){
  // hide first, then slide down to start
  $('h2').hide().slideDown();
  var $li = $('li');
  // hide all list items, then fade them in one-by-one
  $li.hide().each(function(index) {
    $(this).delay(index * 700).fadeIn(700);
  });
  // add event listener to fade out li item upon click
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
});

// advanced example
$(document).ready(function(){
  var ids = '';
  var $listItems = $('li');
  // add event listeners for mouseover and click on all li elements
  $listItems.on('mouseover click', function() {
    ids = this.id;                                                // save all id's
    $listItems.children('span').remove();                         // remove all <span> elements from li
    $(this).append(' <span class="priority">' + ids + '</span>'); // add it back with the ID with priority class
  });
  // add event listener for mouseout
  $listItems.on('mouseout', function() {
    $(this).children('span').remove();                            // remove all <span> elements
  });
});
```
### 16. Adding Time & Date Stamp
```Javascript
$(document).ready(function(){
  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });
});
```
### Interactive Shopping List App

[Try the full App here](http://javascriptbook.com/code/c07/example.html)
#### HTML Code:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript &amp; jQuery - Chapter 7: Introducing jQuery - Example</title>
    <link rel="stylesheet" href="css/c07.css" />
  </head>
  <body>
    <div class="container-fluid">
    <div id="page">
      <h1 id="header">List</h1>
      <h2>Buy groceries <span id="counter"></span></h2>
      <ul>
        <li id="one" class="hot"><em>fresh</em> figs</li>
        <li id="two" class="hot">pine nuts</li>
        <li id="three" class="hot">honey</li>
        <li id="four">balsamic vinegar</li>
      </ul>
      <div id="newItemButton"><button href="#" id="showForm">new item</button></div>
      <form id="newItemForm">
        <input type="text" id="itemDescription" placeholder="Add description" />
        <input type="submit" id="add" value="add" />
      </form>
      </div>
    </div>
    <!--Bootstrap 4-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <!--jQuery-->
    <script src="js/jquery-1.11.0.js"></script>
    <!--JS file-->
    <script src="js/example.js"></script>
  </body>
</html>
```
#### JS Code:
```javascript
$(document).ready(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form

  $('li').hide().each(function(index) {          // Hide list items
    $(this).delay(450 * index).fadeIn(1600);     // Then fade them in
  });

  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    var items = $('li[class!=complete]').length; // Number of items in list
    $('#counter').text(items);                   // Added into counter circle
  }
  updateCount();                                 // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {       // When a new item is submitted
    e.preventDefault();                         // Prevent form being submitted
    var text = $('input:text').val();           // Get value of text input
    $list.append('<li>' + text + '</li>');      // Add item to end of the list
    $('input:text').val('');                    // Empty the text input
    updateCount();                              // Update the count
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    var complete = $this.hasClass('complete');  // Is item complete

    if (complete === true) {           // Check if item is complete
      $this.animate({                  // If so, animate opacity + padding
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {    // Use callback when animation completes
        $this.remove();                // Then completely remove this item
      });
    } else {                           // Otherwise indicate it is complete
      item = $this.text();             // Get the text from the list item
      $this.remove();                  // Remove the list item
      $list                            // Add back to end of list as complete
        .append('<li class="complete">' + item + '</li>')
        .hide().fadeIn(300);           // Hide it so it can be faded in
      updateCount();                   // Update the counter
    }                                  // End of else option
  });                                  // End of event handler

});
```
