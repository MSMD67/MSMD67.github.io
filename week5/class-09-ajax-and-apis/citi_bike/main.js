/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {

  document.getElementById('getDataButton').onclick = makeRequest;
  // This is one of the way to click on the button.

  function makeRequest() {

   // var url = 'https://feeds.citibikenyc.com/stations/stations.json';
   var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

   // // 1 create an instance of XHR object
   // var httpRequest  = new XMLHttpRequest();

   // // 2 write a function to handle the actual request

   // httpRequest.onreadystatechange = responseMethod;

   // // 3 open the request 

   // httpRequest.open('GET', url);

   // // 4 send the request
   // httpRequest.send();

   // // request logic
   // function responseMethod() {
    
   //    //check if DONE
   //      if (httpRequest.readyState === XMLHttpRequest.DONE) {
   //          // if successful
   //            if(httpRequest.status === 200) {
   //              console.log(JSON.parse(httpRequest.response));
   //            } else {
   //              console.log('There was a problem with the request');
   //              } 

   //          }

   //      }

   //  }

      // $.get(url, function (response) {
      //   console.log(response);
      // }  // This will not handle error codes    

        $.ajax({
            url: url,
            type: 'GET',
            success: function (response) {
              console.log(response);
            },
            error: function (response) {
              console.log(response);
            }
        });

      }
    };


