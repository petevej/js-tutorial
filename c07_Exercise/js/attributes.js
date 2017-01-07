$(document).ready(function(){
  $('li#three').removeClass('hot');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');    // use .attr to add attribute
});
