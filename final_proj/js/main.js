
var urlArr = [];
var repoNameArr = [];

$(document).ready(function () {

    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/MSMD67/repos",
      success: function(repoList) {

        for (var i = 0; i < repoList.length; i++) {
          var repoEntry = buildRepo(repoList[i]);
          $(".container").append(repoEntry);

        }

      },

      error: function(jqXHR, textstatus, errorThrown) {
          console.log(teststatus);
          console.log(jqXHR);
          console.log(errorThrown);
      }
    }); // closes the first AJAX call.

  
  var counter = 0;
  var count = 0;

  function buildRepo(repos) {

    var repoName = repos.full_name;
    var commitURL = "https://api.github.com/repos/" + repoName + "/commits";

    urlArr.push(commitURL);
    repoNameArr.push(repoName);

    var newLink = $('<p id="title-repo">')
      .append(((count+1)+'.  ')+repoName); 
      count++;
    

    var newEntry = 
      $('<div>')
      .addClass("panel panel-default panel-body")
      .append('<button type="button" class="btn btn-primary pull-right" data-toggle="modal" id="btn' + counter+ '" .bs-example-modal-sm">Click to see more</button>')
      .append(newLink);
      counter++;

      return newEntry;
  }

// ------------------------------------------------------------------------------------------------

  $(document).on("click", '.btn', function(e) {
    e.preventDefault();

      $('h4').empty();
      $('.modal-body').empty();
      var urltobeUsed = "";
      var nameOfRepo = "";

      var id = $(this).attr('id');   // "btn0" "btn1"...
      var num = parseInt(id[id.length - 1]);  // 0, 1, ...
      
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


      }); // closes the 2nd ajax call within the click event.


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

 }); // closes the entire $(document).ready(function() {});