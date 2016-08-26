$(document).ready(function () {

  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/MSMD67/repos",
    success: function(repos) {
      for (var i = 0; i <= repos.length; i++) {
        var repoList = buildRepo(repos[i]);
        $(".container").append(repoList);
      }
      // console.log(repos);
      // console.log(repos[0]);
      // console.log(repos[1]);
      // console.log(repos[2]);
      // console.log(repos[3]);
      // console.log('hi');
    },
    error: function(jqXHR, textstatus, errorThrown) {
      console.log(jqXHR);
      console.log(teststatus);
      console.log(errorThrown);
      // console.log('hi');
    }
  });


  function buildRepo (repoData) {
    var repoName = repoData.full_name;
    var commitURL = "https://api.github.com/repos/MSMD67/";
    commitURL += repoData.name;      
    commitURL += "/commits";

    var newLink = $("<a>")
      .attr("class", "unclicked")
      .attr("href", commitURL)
      .append(repoName);

    var newEntry = $("<div>")
      .addClass("panel panel-default")
      .append("<div>")
      .addClass("panel-body")
      .append(newLink);


    return newEntry;

  }


  $(document).on("click", ".unclicked", function(e) {
    e.preventDefault();
    //e.preventDefault - prevents whatever the default action is (which, in this case, prevents
    // it from going to the url.)

    $.ajax({
      type: "GET",
      url: $(this).attr("href"), // this - refers to whatever data you are grabbing
      context: this,
      success: function(commits) {
        for (var i = 0; i < commits.length; i++) {
          var commitList = appendCommit(commits[i]);
          var dateList = appendDate(commits[i]);
          var authorList = appendAuthor(commits[i]);
          var linkList = appendLink(commits[i]);

          var commitURL = $("<a>")
            .removeClass("unclicked")
            .attr("href", linkList)
            .append(commitList);

          $(this)
            .parent()
            .append("<h2>Commit # " + (i+1) + "</h2>")
            .append("<p>")
            .append("Commit Message: ")
            .append(commitURL)
            .append("<p>")
            .append("Date: ")            
            .append(dateList)
            .append("<p>")
            .append("Author: ")
            .append(authorList)
            .append("<br>")
            .append("<br>");
          }
      },
      error: function(jqXHR, textstatus, errorThrown) {
        console.log(jqXHR);
        console.log(textstatus);
        console.log(errorThrown);
      }

    });

    function appendCommit(commitData) {
      var commitMessage = commitData.commit.message;
      console.log(commitData);
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

  });


});