# (Part II) Some important bits from Jon Duckett's JavaScript And jQuery Book
## Chapter 8 - AJAX & JSON

### 1. Synopsis
This chapter explores AJAX technology which allows isolated update of the page. The 3 main data types being used are HTML, XML, and JSON (most popular). jQuery methods can be applied to simplify AJAX e.g. .load() for getting HTML fragments and .ajax() for a more flexible and complex handling.

### 2. How AJAX works
1. The browser requests data from the server
2. The server responds with data (usually HTML, XML, or JSON)
3. The browser processes the content and adds it to the page

### 3. Comparing Data Formats

#### HTML: the simplest way to get data into a page.

*PROS:* Easy to work with, no post-processing required.

*CONS:* The server may contain undesirable HTML formatting and require post-processing anyhow. Poor data portability (web-only). Request must come from same domain.

#### XML (Extensible Markup Language): Similar to HTML but with stricter syntax

```XML
<?xml version="1.0" encoding="utf-8" ?>
<events>
  <event>
    <location>San Francisco, CA</location>
    <date>May 1</date>
    <map>img/map-ca.png</map>
  </event>
  <event>
    <location>Austin, TX</location>
    <date>May 15</date>
    <map>img/map-tx.png</map>
  </event>
  <event>
    <location>New York, NY</location>
    <date>May 30</date>
    <map>img/map-ny.png</map>
  </event>
</events>
```

*PROS:* Very flexible data format, can be used to captured complex data. Works well across platforms and apps. Gets processed by same DOM methods as HTML.

*CONS:* Verbose, clunky with a lot of tags (1 per data entry). Same domain required.

#### JSON: *J*ava*S*cript *O*bject *N*otation uses similar syntax to Object Literal. Most commonly used in web environment.

```JavaScript
{
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "img/map-ny.png"
    }
  ]
}
```
** Is stored in a "key"-value pair **

*PROS:* Can be called from any domain, more concise, plays very well with JavaScript dev environment

*CONS:* Rather strict formatting. Can contain malicious content.

### 4. Post-processing JSON data

The JSON object is an array and can be converted to a string using **JSON.stringify()** method. **JSON.parse()** on the other hand, converts JSON data into a JavaScript object ready to be used by the browser.

### 5. Loading HTML with AJAX

### 6. Loading XML with AJAX

### 7. Loading JSON with AJAX

### 8. Using JSONP (JASON with Padding)

### 9. jQuery & AJAX requests

There are 6 ways that jQuery can be used to make AJAX requests:

METHOD | SYNTAX DESCRIPTION
------------ | -------------
$.load() | Loads HTML fragments into an element - simplest way
$.get() | Requests and loads data using GET method
$.post() | Sends data using POST method
$.getJSON() | Loads JSON data using GET request
$.getScript() | Loads and executes JS data using GET - for JSONP
$.ajax() | God-mode

Dealing with server responses using jqXHR object:

jqXHR is a jQuery object created to help handle the data returned from the server.

JQXHR PROPERTIES | DESCRIPTION
---------------- | -------------
responseText | returned data with type text
responseXML | returned data in XML format
status |  Status code e.g. 200 for success and 404 for HTTP not found!
statusText | De3scription of the code

Below are the methods for it:

JQXHR METHODS | DESCRIPTION
------------- | -------------
.done() | run code if request was "success"
.fail() | run code if request was "failed"
.always() | run code for all outcomes
.abort() | halt the communication

### 10. Loading HTML into a page with jQuery

Anatomy of a .load() method:

```JavaScript
$('#content').load('jq-ajax3.html #content');
```
**$('#content')** - creates a jQuery object with ID #content

**'jq-ajax3.html'** - URL of the source page

**#content** - fragment of the HTML source page

### 11. Loading content

pg. 398
