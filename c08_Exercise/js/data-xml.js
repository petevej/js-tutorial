// XML data post-processing is more complicated as it needs to be converted to HTML before displaying on the page
var xhr = new XMLHttpRequest();   // Create new XMLHttpRequest object

// XML-specific post-processing script
xhr.onload = function() {         // trigger function when response has loaded
  if (xhr.status === 200) {       // If server connect status was successful
    var response = xhr.responseXML;                         // Get XML form server
    var events = response.getElementsByTagName('event');    // Each event is stored in a tag, get all

    for (var i = 0; i < events.length; i++) {               // Loop through event items
      var container, image, location, city, newline;        // Declare variables
      container = document.createElement('div');            // create a new <div> container
      container.className = 'event';                        // Give it a new class 'event'

      image = document.createElement('img');                // Add map image
      image.setAttribute('src', getNodeValue(events[i], 'map'));    // Add src
      image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
      container.appendChild(image);                         // Append image to container div

      location = document.createElement('p');               // Add location data
      city = document.createElement('b');
      newline = document.createElement('br');
      city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
      location.appendChild(city, newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
      container.appendChild(location);

      document.getElementById('content').appendChild(container);
    }
    function getNodeValue(obj, tag) {                       // Gets content from XML
      return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }

  }
};
xhr.open('GET', 'data/data.xml', true);     // prepare the request
xhr.send(null);                             // send the request
