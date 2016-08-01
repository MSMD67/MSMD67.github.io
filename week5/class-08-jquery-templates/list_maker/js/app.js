// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload

// function addToList(list, newThing) {

//   // var input = document.getElementById('my-input').value;
//   var newListItem = newThing;
//   $('#list').append('<li>' + newListItem + '</li>');

//   // var newList = list.innerHTML + newListItem;
//   // in line 20, the 'list' in list.innerHTML refers to list in line 14, which is
//   // is one of the parameters that needs to be passed in.
 
//   // list.innerHTML = newList;
// }




$(document).ready(function () {

  //INIT TEMPLATES
  var initTodos = {
    todos:[
      'Data types',
      'Array',
      'Objects',
      'Functions',
    ]
  }; // this is from the HTML lines 21-24
// 2:  get template and compile using Handlebars
var todoSource = $('#init-template').html();
var todoCompiled =  Handlebars.compile(todoSource);

// 3: pass compiled template JS object
var todoTemplate = todoCompiled(initTodos);

// 4:  append template to the DOM
$ ('#list').append(todoTemplate);

  // 2. compile

  // 3. feed the obj

  //4 append to #list

  // jQuery submit
  $('#item-form').submit(function (event) {
    event.preventDefault();

    // get DOM input
    var input = $('#new-item').val().trim();

    // if (input === "") {
    //   return alert('no input!');
    // } else {
    //   // append new <li>
    //   $('#list').append('<li>' + input + '</li>');

    //   // clear input
    //   $('#new-item')
    //     .val('')
    //     .focus();
    // }

  });

  // $('li').click(function () {
  //  $(this).remove();
  // });

  // remove <li> on click
  $(document).on('click', 'li', function () {
    $(this).remove();
  });


});




