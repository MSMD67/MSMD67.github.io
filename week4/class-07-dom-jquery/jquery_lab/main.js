/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/
// alert('hi');

function addToList(list, newThing) {

  // var input = document.getElementById('my-input').value;
  var newListItem = newThing;
  $('#fav-list').append('<li>' + newListItem + '</li>');

  // var newList = list.innerHTML + newListItem;
  // in line 20, the 'list' in list.innerHTML refers to list in line 14, which is
  // is one of the parameters that needs to be passed in.
 
  // list.innerHTML = newList;



}



window.onload = function() {
      $('#new-thing-button').click(function (event){
        event.preventDefault(); // suppress the action to submit
     // YOUR CODE HERE!
     var myList = $('#fav-list');
     
     // GET INPUT
     var myNewThing = $('#new-thing').val();
     // APPEND NEW ELEMENT


    // var newListItem = '<li class="fav-thing">' + newThing + '</li>'; //"<li>hello</li>"
    // var newList = mylist.innerHTML + newListItem;

     addToList(myList, myNewThing);


     $('#new-thing').value = '';
 

    });


  };

