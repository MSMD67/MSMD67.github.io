/*
  Please add all Javascript code to this file.
*/
$(document).ready(function() {
  var items = ['Digg', 'Reddit', 'Mashable'];
    for (var i=0; i<items.length; i++){
      $('#sources').append('<li><a href="#">'+ items[i] +'</a></li>');
      }

    var access = "https://accesscontrolalloworiginall.herokuapp.com/";  
    var diggUrl = access+"http://digg.com/api/news/popular.json";
    var reddit = 'https://www.reddit.com/top.json';
    var mashUrl = access+'https://mashable.com/stories.json';

    // ---------------------------------
    //        Ajax call for Digg
    // ---------------------------------

    $.ajax({
        url: diggUrl,
        type: 'GET',
        success: function(response) {

          var feedArray = response.data.feed;  
          var title = response.data.feed[0].content.title_alt;  

          var source = $('#article-template').html();
          var template = Handlebars.compile(source); 
          var articleTemplate = template(response.data);

          $('#main').append(articleTemplate);       

      },
        

        error: function(jqXHR, textstatus, error) {
            console.log(teststatus);
            console.log(jqXHR);
            console.log(error);
        }
    }); 


    // ---------------------------------
    //        Ajax call for Reddit
    // ---------------------------------

    // $.ajax({
    //     url: reddit,
    //     type: 'GET',
    //     success: function(info) {
    //       console.log(info);

    //     },

    //     error: function(jqXHR, textstatus, error) {
    //         console.log(teststatus);
    //         console.log(jqXHR);
    //         console.log(error);
    //     }
      
    // });


    // ---------------------------------
    //        Ajax call for Mashable
    // ---------------------------------

    // $.ajax({
    //     url: mashUrl,
    //     type: 'GET',
    //     success: function(info) {
    //       console.log(info);

    //     },

    //     error: function(jqXHR, textstatus, error) {
    //         console.log(teststatus);
    //         console.log(jqXHR);
    //         console.log(error);
    //     }
      
    // });

  });


//sample helper function
// var help = models;
// help.hello("world");
