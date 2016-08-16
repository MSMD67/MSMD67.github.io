/*
  Please add all Javascript code to this file.
*/
$(document).ready(function() {
  var items = ['Digg', 'Reddit', 'Mashable'];
    for (var i=0; i<items.length; i++){
      $('#sources').append('<li><a href="#">'+ items[i] +'</a></li>');
        // <li><a href="#">Source 1</a></li>
      }
    // Handlebars.registerHelper('list', function(items,options){
    //   var out = '<ul>';

    //   for (var i=0, length = items.length; i < length; i++){
    //     // <li><a href="#">Source 1</a></li>
    //     out += '<li><a href="#">'+ options.fn(items[i]) + '</a></li>';
    //   }

    //   return out + '</ul>';

    // });

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
          // console.log(response.data.feed[0].content.tags[1].display);
          // console.log(response.data.feed[9].content.tags[1].display);
          // console.log(response);
          // console.log(response.data.feed.length); //- length of feed array


          // console.log(response.data);
          var feedArray = response.data.feed;  
          var title = response.data.feed[0].content.title_alt;  

          var source = $('#article-template').html();
          var template = Handlebars.compile(source); 
          var articleTemplate = template(response.data);

          $('#main').append(articleTemplate);       


          
          
          // console.log(title);
          // console.log(feedArray);
          // ----------------------------------------------------------------
          // for (var i=0; i < feedArray.length; i++){
          //   var title = feedArray[i].content.title_alt;
          //   var count = feedArray[i].diggs.count;
          //   console.log(count);
    
          //   // var pic = feedArray[i].content.media.images[0].original_url;  
          //   //   console.log(pic);

          //   //   var tagsArray = feedArray[i].content.tags; 
          //   //   for (var j =0; j < tagsArray.length; j++) {
          //   //     console.log("Article" + i);
          //   //     console.log(tagsArray[j].display);
          //     }

                  // console.log(tags);
                // $('.h3').append(title);
          

          
          // ----------------------------------------------------------------
           // appendTags(response); 
          //   console.log(feedArray);
          // console.log(response.data.feed[0].content.title_alt); -title
          // console.log(response.data.feed[0].content.media.images[0].original_url); -pic
          // console.log(response.data.feed[0].content.tags[0].display);
          // console.log(response.data.feed[0].content.tags.length); - tags array will vary in length.
 
          // var diggArr = response.data.feed;
          // console.log(diggArr);
              // function buildFeed(feedData) {
              // var feedName = feedData.full_name;
           
          // console.log(response.data.feed[0].content.title_alt); -title

              // commitURL += repoName;      
              // commitURL += "/commits";

              //   console.log(feedURL);
              // var feedURL = access+"http://digg.com/api/news/popular.json";
              // var newLink = $("<a>")
              //   .attr("class", "unclicked")
              //   .attr("href", feedURL)
              //   .append(feedName);
              //     // console.log("This is the newLink variable: ");
              //     // console.log(newLink);
              //     // console.log();
              //     // console.log();

              // var newEntry = $("<div>")
              //   .addClass("panel panel-default")
              //   .append("<div>")
              //   .addClass("panel-body")
              //   .append(newLink);

              //     console.log("This is the newEntry: ");
              //     console.log(newEntry);
              //   return newEntry;
          // --------------------------------------------------------------
          // function appendTags(response) {
          //   console.log(response.data.feed[0].content.tags[0].display);
            // var tags = response.data.feed[0].content.tags[0].display;
            //   for (var i =0; i < tags.length; i++){
            //     console.log(tags);    
            //   }
            
            // return tags;
          // --------------------------------------------------------------
          
        // }
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
