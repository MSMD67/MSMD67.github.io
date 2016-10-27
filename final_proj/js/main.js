
var urlArr = [];
var repoNameArr = [];

var counter = 0;
var count = 0;


$(document).ready(function () {

    var panel = '<form id="item-form">'+
                  '<div class="form-group">' +
                    '<input type="ID" class="form-control" id="userID" autofocus="autofocus" placeholder="Type in GitHub User ID then press ENTER">' +
                  '</div>' +
                '</form>';

    $('.container').append(panel);
    
    $('#item-form').submit(function (event) {
      event.preventDefault();  
      count = 0; 

    $('#infoAbout').remove();
    $('.panel').remove();
    $('#modal').remove();
    $('#title').remove();
    $('.avatar').remove();
    $('h2').remove();

    // $('.modal-body').empty();
    // $('.modal-title').empty();


    var input = $('#userID').val();
    var URL =  "https://api.github.com/users/" + input + "/repos";

      $.ajax({
        type: "GET",
        url: URL,
        success: function(repoList) {

          var image = repoList[0].owner.avatar_url;
          var name =  repoList[0].owner.login;

          $('.container')
                .append('<p id="title">You are ' + name + ' and this is your avatar.</p>')
                .append('<img class="avatar" src="' + image + '">');


          for (var i = 0; i < repoList.length; i++) {
             var repoEntry = buildRepo(repoList[i]);
            $(".container").append(repoEntry);

          }

      },


        error: function() {

            alert("ERROR.  PLEASE TRY AGAIN.");

        // error: function(jqXHR, textstatus, errorThrown) {
        //     console.log(teststatus);
        //     console.log(jqXHR);
        //     console.log(errorThrown);
        //     alert("ERROR");

        },



       }); // closes the first AJAX call.


        $('#userID').val('');
        $('#userID').focus();
        console.log("after submit: ");
        console.log(count);

  });

  function buildRepo(repos) {

    var repoName = repos.full_name;
    var commitURL = "https://api.github.com/repos/" + repoName + "/commits";

    urlArr.push(commitURL);
    repoNameArr.push(repoName);


    var newLink = $('<p id="title-repo">')
      .append(((count+1)+'.   ')+repoName); 
      count++;
    

    var newEntry = 
      $('<div>')
      .addClass("panel panel-default panel-body")
      .append('<button type="button" class="btn btn-primary pull-right" data-toggle="modal" id="btn' + counter+ '" .bs-example-modal-sm">Click to see more</button>')
      .append(newLink);
      counter++;

      return newEntry;

  }


 }); // closes $(document).ready(function () {})
  
  
// // ------------------------------------------------------------------------------------------------
  
  $(document).on("click", '.btn', function(e) {
    e.preventDefault();

      $('h4').empty();
      $('.modal-body').empty();
      var urltobeUsed = "";
      var nameOfRepo = "";

      var id = $(this).attr('id');   // "btn0" "btn1"...
      // var num = parseInt(id[id.length - 1]);  // 0, 1, ...
      console.log(id);
      var num = parseInt(id.replace("btn", ""));
      
      urltobeUsed = urlArr[num];
      nameOfRepo = repoNameArr[num];



      $.ajax({

          type: "GET",
          url: urltobeUsed,
          context: this,

          success: function(commits) {

            for (var i = 0; i < commits.length; i++) {
              var commit = appendCommit(commits[i]);
              var date = appendDate(commits[i]);
              var author = appendAuthor(commits[i]);
              var link = appendLink(commits[i]);

              var commitURL = $('<a>')
                              .attr("href", link)
                              .append(commit).prop('outerHTML');  

              var modal = '<h2>Commit # '+ (i+1) + '</h2>'+
                          '<p id="modal">Commit message:  ' + commitURL + '</p>' +
                          '<p id="modal">Date:  ' + date + '</p>' +
                          '<p id="modal">Author:  ' + author + '</p>' +
                          '<br>';

              var name_Repo = '<h3>'+ nameOfRepo + '</h3>';
         
              $('.modal-body').append(modal);

            }

              $('h4').append(name_Repo);
              $('.modal').modal();

          },

          error: function(jqXHR, textstatus, errorThrown) {
            console.log(jqXHR);
            console.log(textstatus);
            console.log(errorThrown);
          }


      }); // closes the ajax call within the click event.


      $('h4').empty();
      $('.modal-body').empty();


      function appendCommit(commitData) {
        var commitMessage = commitData.commit.message;
        return commitMessage;
      }

      function appendDate(commitData) {
        var commitDate = commitData.commit.author.date;
        return commitDate;
      }

      function appendAuthor(commitData) {
        var commitAuthor = commitData.commit.author.name;
        return commitAuthor;
      }

      function appendLink(commitData) {
        var commitLink = commitData.html_url;
        return commitLink;
      }
    

  }); // closes the $(document).on click event.

//  