function printLyrics() {

  var line1  = " bottles of beer on the wall";
  var line1s = " bottle of beer on the wall";
  var line2  = " bottles of beer";
  var line2s = " bottle of beer";
  var line3  = " Take it down";
  var line4  = " pass it around";
  var last   = " No bottles of beer on the wall";


  for (counter =99; counter >= 1; counter = counter - 1) { 

      if (counter ===2) {
            $('ul').append('<li>' + '2' + line1 + ', ' + '2' + line2 + '.  ' + '</br>' +
                line3 + ', ' + line4 + ', ' + '</br>' + '1' +  line1s + '.' + '</li>');

        } else if (counter ===1) { 
            $('ul').append('<li>' + '1' + line1s + ', ' + '1' + line2s + '.  ' + '</br>' + 
              line3 + ', '  + line4  + ', ' + '</br>'+ last + '.' + '</li>');

        } else { 
          $('ul').append('<li>' + counter + line1 + ', ' + counter + line2 + '.  ' + '</br>' +
            line3 + ', ' + line4 + ', ' + '</br>' + (counter-1) +  line1 + '.' + '</li>');
     }

  }

}

window.onload = function() {
      $('.btn').click(function (event){
        event.preventDefault(); // suppress the action to submit

    printLyrics();

    });

  };