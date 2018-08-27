$(function() {

  var currentURL = window.location.origin;

  //first mushroom in list  [ 'u', 's', 's', 'n', 'x', 't', 'f', 'k', 'c', 'n', 'o', 'p', 'w', 'w', 's', 's', 'e', 'e', 'w', 'k', 'p' ]

  $.ajax({
    url: "/api/questions",
    method: "GET",
    contentType: "application/json",
    charSet: "utf-8"
  }).done(function(data) {
    initiateSurvey(data);
  })

  var currentQuestionIndex = 0;

  var answerArray = [];

  var initiateSurvey = function(questionData) {
    var currentQuestion = questionData[currentQuestionIndex];
    
    $("#questionHeader").text(currentQuestion.question);
    $("#questionHeader").text(currentQuestion.help); //added help icon-ish

    for (var i = 0; i < currentQuestion.options.length; i++) {
      var imgCol = $("<column class='col'>");
      var imgCard = $("<div class='card border-primary' id='imgCard'>");
      var imgCardBody = $("<div class='card-body'>")

      imgCard.append(imgCardBody);

      imgCard.prepend("<img class='card-img-top imgCard' src='" + currentQuestion.options[i].image + "' >");
      imgCardBody.append("<btn class='btn btn-primary' id='" + currentQuestion.options[i].value + "'>" + currentQuestion.options[i].option + "</btn>");

      imgCol.append(imgCard);
      $("#imageRow").append(imgCol);
    }

    submitAnswer(questionData);
  }

  var submitAnswer = function(questionData) {

    var chosenAnswer = "";

    $(".btn").on("click", function() {
      chosenAnswer = event.target.id;
      answerArray.push(chosenAnswer);
      console.log(answerArray);

      currentQuestionIndex++;
      $(".col").remove();
      if (currentQuestionIndex <= 20) {
        initiateSurvey(questionData);
      } else {
        checkAnswersPost(answerArray);
      }
    })
  }

  var checkAnswersPost = function(userAnswers) {
    console.log("================");
    console.log(userAnswers);
    $.ajax({
      type: "POST",
      url: "/api/answer",
      contentType: "application/json",
      charSet: 'utf-8',
      data: JSON.stringify({ property: userAnswers })
    }).done(function(data) {
      checkAnswers(data);
    })
  }

  var checkAnswers = function(answerData) {
    var mushroom = answerData[0];

    switch (true) {
      case (mushroom === undefined):
      $("#questionHeader").text("This is inconclusive, you may want to retry!");
      break;
      case (mushroom.class === "p"):
      $("#questionHeader").text("This mushroom is poisonous, don't eat it!");
      initializeResults(mushroom.id);
      break;
      case (mushroom.class === "e"):
      $("#questionHeader").text("This mushroom is edible, you can eat it!");
      initializeResults(mushroom.id);
      break;
    }
  }

  var initializeResults = function(mushroomKey) {
    var resultColumn = $("<column class='col-md-12 text-center'>");
    $(resultColumn).prepend("<h3>Submit an image of your mushroom to help other aspiring mycologists!");
    $("#imageRow").append(resultColumn);

    var form = $("<form ref='uploadForm' id='uploadForm' action='" + currentURL + "/api/upload' method='post' encType='multipart/form-data'>");
    $(resultColumn).append(form);


    var fileInput = $("<input type='file' name='image' accept='image/png image/jpeg'>");
    var submitInput = $("<input type='submit' value='Upload!'>");

    $(form).append(fileInput);
    $(form).append(submitInput);
    
  } 
})