module.exports = function(robot) { 
  robot.hear(/hello|hi/i, function(res) {
    return res.send("Hello, World!");
  });

  robot.hear(/cat/i , function (res) {
    return res.send('meoooowwwww');
  });

  robot.respond(/how are you?/i, function(res) {
    return res.send('I am feeling super');
  });

  robot.hear(/my name is (.*)/i, function(res){
    console.log(res.match);
    var name = res.match[1];
    return res.reply('Hello, ' + name);
  });

  robot.hear(/add (.*) and (.*)/i, function(res){
      var x = parseInt(res.match[1]);
      var y = parseInt(res.match[2]);
      var sum = x + y;

      return res.send(x + " + " + y + " = " + sum);
  });

  robot.hear(/is (.*) your favorite film?/i, function (res) {
      var film = res.match[1];

      if (film === 'point break' || film === 'Point Break') {
        return res.send('YES!');
      } else {
        return res.send('NO!');
      }
  });

    robot.respond(/What's your favorite food?/i, function(res) {
    return res.send("I'm a robot; I don't eat food!");

  });

      robot.hear(/(.*) to (.*)/i, function(res){
        console.log(res);
        var num1 = parseInt(res.match[1]);
        var num2 = parseInt(res.match[2]);
        var output = "";
        console.log(num1,num2);
      // for (var i = num1;  i<=num2; i++){
      //       output += 
      //       console.log(output);
      //     }
      var number, output=[];
      for (var i = num1; i <= num2; i++) {
          output.push(i);
      }
      console.log.apply(console, output);
  });

};