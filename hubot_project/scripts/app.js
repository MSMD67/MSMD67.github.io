module.exports = function(robot) { 
  robot.hear(/hello|hi/i, function(res) {
    return res.send("Hello, World!");
  });

  robot.hear(/cat/i , function (res) {
    return res.send('meoooowwwww');
  });

  robot.hear(/how are you?/i, function(res) {
    return res.send('I am feeling super');
  });

  robot.hear(/my name is (.*)/i, function(res){
    // console.log(res.match);
    var name = res.match[1];
    return res.reply('Hello, ' + name);
  });

  robot.hear(/what is your name?|what's your name/i, function(res){
    return res.send("My name is HP.  It's short for Hubot Project.");
  });


  robot.hear(/add (.*) and (.*)/i, function(res){
      var x = parseInt(res.match[1]);
      var y = parseInt(res.match[2]);
      var sum = x + y;

      return res.send(x + " + " + y + " = " + sum);
  });

  robot.hear(/what is today's date?|what's today's date?/i, function (res) {
      var date = new Date();
      console.log(date);
 
  });

    robot.hear(/What is your favorite food?|What's your favorite food?/i, function(res) {
    return res.send("I'm a robot; I don't eat food!");

  });

      robot.hear(/Can you print numbers from (.*) to (.*)?/i, function(res){
        // console.log(res);
        var num1 = parseInt(res.match[1]);
        var num2 = parseInt(res.match[2]);
        var output = [];
        // console.log(num1,num2);
      for (var i = num1;  i<=num2; i++){
          if (i === num2){
            output.push(i);
          } else {
            output.push(i + ",");
          }
      }
      console.log.apply(console, output);

  });
        
      robot.hear(/I am entering 5 integers in random order with a space between each number: (.*) (.*) (.*) (.*) (.*)/i,
        function (res) {
            var num1 = parseInt(res.match[1]);
            var num2 = parseInt(res.match[2]);
            var num3 = parseInt(res.match[3]);
            var num4 = parseInt(res.match[4]);
            var num5 = parseInt(res.match[5]);
           // console.log(num1, num2, num3, num4, num5);
            var array = [num1, num2, num3, num4, num5];
            // var final = [];
            var min, max;
            var bigSmall = function (array){

                var minValue = function () {
                  var min = array[0];
                    for (var i=0; i<array.length; i++) {
                      if (array[i]<min) {
                      min = array[i];
                      }
                    }
                    
                    // final.push(min);
                    console.log("The minimum value is: " + min);
                    return min;
                };
                
                var maxValue = function () {
                  var max = array[0];
                    for (var i=0; i<array.length; i++) {
                      if (array[i]>max) {
                        max = array[i];
                        }
                      }
                    // final.push(max);
                    console.log("The maximum value is: " + max);
                    return max;
                };
                      
    minValue();
    maxValue();
    // console.log(final);
    };
    bigSmall(array);         
  });


};