$(function() {

  var currentURL = window.location.origin;

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
        $("#questionHeader").text("Results Below:");
        checkAnswers();
      }
    })
  }

  var checkAnswers = function() {
    $.ajax({
      type: "POST",
      url: "/api/answer",
      contentType: "application/json",
      charSet: 'utf-8',
      data: JSON.stringify({ property: answerArray })
    }).done(function(data) {
      console.log(data);
      var mushroom = data[0];
      var mushroomId = mushroom.id;
      if (mushroom.class = "p") {
        console.log("its poisonous dont eat it!");
      } else {
        console.log("it's safe to eat!");
      }
    })
  }
})