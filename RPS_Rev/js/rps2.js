$(document).ready(function(){

    var rounds = 1;
    var ties = 0;
    var userScore = 0;
    var computerScore = 0;
    var computerChoice = "The computer has not decided yet.";
    var userChoice;
    

    var rock = '<img src="imgs/rock.jpg">';
    var paper = '<img src="imgs/paper.jpg">';    
    var scissors = '<img src="imgs/scissors.jpg">';

    $('#rounds').html("Round number: " + rounds);
    $('#ties').html("Ties: " + ties);
    $('#userScore').html("Your score: " + userScore);
    $('#computerScore').html("Computer score: " +computerScore);
    $('#computerChoice').html("Computer choice: " + computerChoice);



// -----------------------------------------------------------
// Function for computer to generate rock, paper, or scissors.
// -----------------------------------------------------------

    function comp_rps(){
        var array = ["rock","paper","scissors"];
            computerChoice = Math.random();
            if (computerChoice < 0.34) 
                {computerChoice = array[0];
                } 
            else if(computerChoice <= 0.67) 
                {computerChoice = array[1];
                } 
            else 
                {computerChoice = array[2];
                } 
        $('#computerChoice').html("Computer choice: " + computerChoice);
    }

// ----------------------------------------------------------------------
// Function that compares the player's choice with the computer's choice.
// ----------------------------------------------------------------------

    function compare(userChoice, computerChoice){ 
       
        rounds++;

        if (userChoice === computerChoice) 
            {   ties++;
                // return ("The result is a tie!");
            } 

        else if(userChoice === "rock") 
            {
                if(computerChoice === "scissors") 
                {   userScore++;
                    // return ("rock wins");
                }
                else 
                {   computerScore++;
                    // return ("paper wins");
                }
            }

        else if(userChoice === "paper") 
            {
                if(computerChoice === "rock") 
                {   userScore++;
                    // return ("paper wins");
                }
                else 
                {   computerScore++;
                    // return ("scissors wins");
                }
            }

        else if(userChoice ==="scissors") 
            {
                if(computerChoice === "rock") 
                {   computerScore++;
                    // return ("rock wins");
                }
                else 
                {   userScore++;
                    // return ("scissors wins");
                }    

            }
                
    }




    $(document).on("click", '.image', function() {

        $('#modal_bottom').empty();
        $('#computer_Choice').empty();
        $('#user_Choice').empty();

        $(this).addClass('bigEntrance');
            setTimeout(function() {
                $(this).removeClass('bigEntrance');
            }.bind(this), 500);
        // 'this' on line 103 affects the window(browser), which represents the
        // global scope.
        // 'this' on line 105 will bind to the 'this' of the scope of the 
        // on click action. 
        userChoice = $(this).attr('id');
        comp_rps();
        compare(userChoice,computerChoice);

        if (computerChoice === "rock" && userChoice === "rock"){ 
                
            $('#modal_bottom').html("It's a tie.");
            $('#computer_Choice').append(rock);
            $('#user_Choice').append(rock);
                
                }

        else if(computerChoice === "paper" && userChoice === "paper"){ 
            
            $('#modal_bottom').html("It's a tie.");
            $('#computer_Choice').append(paper);
            $('#user_Choice').append(paper);
               
            }

        else if(computerChoice === "scissors" && userChoice === "scissors"){ 
            
            $('#modal_bottom').html("It's a tie.");
            $('#computer_Choice').append(scissors);
            $('#user_Choice').append(scissors);

            }

        else if(computerChoice === "paper" && userChoice === "rock"){
            
            $('#modal_bottom').html("Paper beats rock, so the computer wins.");
            $('#computer_Choice').append(paper);
            $('#user_Choice').append(rock);

            } 

        else if(computerChoice === "rock" && userChoice === "paper"){
            
            $('#modal_bottom').html("Paper beats rock, so you win.");
            $('#computer_Choice').append(rock);
            $('#user_Choice').append(paper);

            }

        else if(computerChoice === "rock" && userChoice === "scissors"){
            
            $('#modal_bottom').html("Rock beats scissors, so the computer wins.");
            $('#computer_Choice').append(rock);
            $('#user_Choice').append(scissors);

            }

        else if(computerChoice === "scissors" && userChoice === "rock"){
            
            $('#modal_bottom').html("Rock beats scissors, so you win.");
            $('#computer_Choice').append(scissors);
            $('#user_Choice').append(rock);

            }

        else if(computerChoice === "scissors" && userChoice === "paper"){
            
            $('#modal_bottom').html("Scissors beats paper, so the computer wins.");
            $('#computer_Choice').append(scissors);
            $('#user_Choice').append(paper);
                  
            }
        else if(computerChoice === "paper" && userChoice === "scissors"){
                      
            $('#modal_bottom').html("Scissors beats paper, so you win.");
            $('#computer_Choice').append(paper);
            $('#user_Choice').append(scissors);
            
            }

        $('#Modal').modal();       

        $('#userScore').html("Your score is: " + userScore);
        $('#computerScore').html("The computer's score is: " + computerScore);
        $('#rounds').html("Round number: " + rounds);
        $('#ties').html("Ties: " + ties);

        if (rounds === 4) {
            
            $("#left").hide();
            $("#right").hide();
            $(".image").hide();
            $("#start").hide();
            $("#container2").hide();
            $("#top_right").hide();
            $("#toggleBtn").attr("data-status", "off")
                           .html("OFF")
                           .addClass("btn-danger")
                           .removeClass("btn-success");

            var modal = 
              '<h2>After 3 rounds, here are the results:</h2>'+
              '<br>' +
              '<p id="modal_close">Ties: ' + ties + '</p>' +
              '<p id="modal_close">Your score:  ' + userScore + '</p>' +
              '<p id="modal_close">Computer score:  ' + computerScore + '</p>' +              
              '<br>' + 
              '<p>Click close, then click off button to restart game.';

              
            $('#modal_bottom').empty();
            $('#modal_bottom').append(modal);

        }


    });

});

// -------------------------------------------------------------------------------    




