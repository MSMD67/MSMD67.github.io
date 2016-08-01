/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/
// document.getElementById('getDataButton').onclick = makeRequest;
  // This is one of the way to click on the button.

$(document).ready(function () {
  var apiKey = '963e108b3e21fb75d02fc3f49a345f13';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=NewYorkCity&units=imperial&appid=' + apiKey;

      $.ajax({
          url: weatherUrl,
          type: 'GET',
          success: function (response) {
            // console.log(response);
            // console.log(response.name);
            // console.log('Temp: ' + response.main.temp);
            // console.log('Humidity: ' + response.main.humidity);
            // console.log('Wind speed(mph): ' + response.wind.speed);
            $('#weather-summary').append('<li>' + 'Temp : '  + response.main.temp + ' ˚F' + '</li>');
            $('#weather-summary').append('<li>' + 'Humidity: '  + response.main.humidity + '</li>');
            $('#weather-summary').append('<li>' + 'Wind speed (mph): '  + response.wind.speed + '</li>');
            // addToDOM(response);

             
          },
          error: function  (response) {
            console.log (response);
          }

      }); 
           $('#refresh').click(function() {
             location.reload();
          });

      $('input:text:first').focus();

   });   
//-------------------------------------------------------------------------------------------------

    $('#clickme').click(function(event){
        event.preventDefault();
          var apiKey = '963e108b3e21fb75d02fc3f49a345f13';
          var newCity = $('#new-city').val();
          var newState = $('#new-state').val();
          var newWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+newCity+','+newState+'&units=imperial&appid=' + apiKey;
          
          // console.log(newWeatherUrl);


        function addToDOM(data){ 

            $('#weather-summary2').append('<p>' + 'Here are some of the weather details in '+ newCity + ', ' + newState + ':'+ '</p>');        
            $('#weather-summary2').append('<li>' + 'Temp : '  + data.main.temp + ' ˚F' + '</li>');
            $('#weather-summary2').append('<li>' + 'Humidity: '  + data.main.humidity + '</li>');
            $('#weather-summary2').append('<li>' + 'Wind speed (mph): '  + data.wind.speed + '</li>');

        }

        // function changeColor(data){
        //     var temp = parseInt(data.main.temp);     
        //     // console.log(temp);
        //     if (temp < 50){
        //       $('body').css('background-color', 'blue');
        //     } else if (temp <= 85){
        //       $('body').css('background-color', 'purple');
        //     } else {
        //       $('body').css('background-color', 'red');
        //     }
        // }


        function setPicture (data){
          // console.log('hi');
          var apiKey = '5888f4afcee00eca4cd92576788b1498';
          var newCity = $('#new-city').val();
          var picUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apiKey+'&tags='+newCity+'&format=json&nojsoncallback=1';
          

            $.ajax({
                url: picUrl,
                type: 'GET',
                success: function (data) {
                  //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
                  var farmId = data.photos.photo[0].farm;
                  var serverID = data.photos.photo[0].server;
                  var id = data.photos.photo[0].id;
                  var secret = data.photos.photo[0].secret;
                  var imgUrl = 'https:'+'//'+'farm'+farmId+'.staticflickr.com'+'/'+serverID+'/'+id+'_'+secret+'.jpg';
                  console.log(imgUrl);
                  // console.log(data);
                  // console.log(farmId);
                  // console.log(serverID);
                  // console.log(id);
                  // console.log(secret);
                  // $('body').css('background-color', 'red');
                  $('body').css({'background-image':'url('+ imgUrl + ')'}); 
                  // $('#yourDiv).css({'background-image':'url(' + imgFileData + ')'});

                },


                error: function  (response) {
                  console.log (response);
            
                }


          });
        }    

      $.ajax({
          url: newWeatherUrl,
          type: 'GET',
          success: function (data) {
            // console.log('hi');
            // console.log(data.name);
            // console.log('Temp: ' + data.main.temp);
            addToDOM(data);
            setPicture(data);
            //changeColor(data);
            $('#new-city').val(''); 
            $('#new-state').val('');
            $('input:text:first').focus();
          }
      
      });  

  });   
  
//-------------------------------------------------------------------------------------------------
// 
//       $('#new-thing-button').click(function (event){
//         event.preventDefault(); 
//       // The event.preventDefault() method stops the default action of an element from happening.
//       //
//       // For example:
//       //
//       // Prevent a submit button from submitting a form
//       // Prevent a link from following the URL
//       //
//       // Tip: Use the event.isDefaultPrevented() method to check whether 
//       // the preventDefault() method was called for the event. 
//       //
//       // link:  http://www.w3schools.com/jquery/event_isdefaultprevented.asp

//-------------------------------------------------------------------------------------------------
           


 









