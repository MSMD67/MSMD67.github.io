/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/
// alert('hi');
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// Firstly, you must be able to get input from the user.  
// The following HTML was taken from the jquery_lab folder.
    // <form>
    //   <input id="new-thing" >
    //   <input id="new-thing-button" type="submit" value="Create new thing">
    // </form>
// Line 19 is used to create an input box for the user.
// Line 20 creates a button so that the input can be added to the list.
// To set up functionality of the button, we start at liine 40.
//
// Firstly, we use the id for the button and create an onclick event
// using '.click'.
// Now we create a function to establish what we want to happen.
//  
//
// 1. Use the event.preventDefault() to stop default action of button.
// 2. Create var myList = $('#fav-list'), so that we can access the list.
// 3. To get input from the user create var myNewThing = $('#new-thing').val();
// 4. (.val) will allow us to set the variable myNewThing to whatever was inputted.
// 5. Invoke the function, addToList(myList, myNewThing);
// 6. Reset and clear "new thing", by using $('#new-thing').val('');
// 
// ------Function Creation-------    
// Create function addToList that takes two parameters: list and newThing.
// Create variable <newListItem> and set it to newThing;
// Add <newListItem> to the list by accessing the 'fav-list'
// and append by using ('<li>' + newListItem + '</li>') - see line 49.


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
        event.preventDefault(); 
      // The event.preventDefault() method stops the default action of an element from happening.
      //
      // For example:
      //
      // Prevent a submit button from submitting a form
      // Prevent a link from following the URL
      //
      // Tip: Use the event.isDefaultPrevented() method to check whether 
      // the preventDefault() method was called for the event. 
      //
      // link:  http://www.w3schools.com/jquery/event_isdefaultprevented.asp

     // YOUR CODE HERE!
     var myList = $('#fav-list');
     
     // GET INPUT
     var myNewThing = $('#new-thing').val();
     // APPEND NEW ELEMENT


    // var newListItem = '<li class="fav-thing">' + newThing + '</li>'; //"<li>hello</li>"
    // var newList = mylist.innerHTML + newListItem;

     addToList(myList, myNewThing);


     // $('#new-thing').value = '';
    $('#new-thing').val('');

    });
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
    //   $('#new-thing-button').click(function (event){
    //     event.preventDefault(); 
    //     var myList = $('#fav-list');
    //     var myNewThing = $('#new-thing').val();

    //     addToList(myList, myNewThing);

    //   $('#new-thing').val('');

    // });
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
  };

