var xhr = new XHLHttpRequest();         // An XMLHttpRequest object is stored in a variable called XHLHttpRequest
xhr.onload = function() {
  if(xhr.status === 200) {
    document.getElementById('content').innerHTML = xhr.responseText;  // Update the server status
  }
};
xhr.open('GET', 'data/data.html', 1);   // open() method prepares the request: specify GET, data source location, and true for asynchronous
xhr.send(null);                         // send() method sends the request
