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
