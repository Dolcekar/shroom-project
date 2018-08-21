var questions = [
  {
    question: "What habitat did you find your mushroom in?",
    options: [
      {option: "Grassy", image: "/img/habitat/g.jpg", value: "g"},
      {option: "Leaves", image: "/img/habitat/l.jpg", value: "l"},
      {option: "Meadow", image: "/img/habitat/m.jpg", value: "m"},
      {option: "Path", image: "/img/habitat/p.jpg", value: "p"},
      {option: "Urban", image: "/img/habitat/u.jpg", value: "u"},
      {option: "Waste", image: "/img/habitat/w.jpg", value: "w"},
      {option: "Woods", image: "/img/habitat/d.jpg", value: "d"}
    ]
  },
  {
    question: "How many were there?",
    options: [
      {option: "Abundant", image: "/img/population/a.jpg", value: "a"},
      {option: "Clustered", image: "/img/population/c.jpg", value: "c"},
      {option: "Numerous", image: "/img/population/n.png", value: "n"},
      {option: "Scattered", image: "/img/population/s.jpg", value: "s"},
      {option: "Several", image: "/img/population/v.jpg", value: "v"},
      {option: "Solitary", image: "/img/population/y.jpg", value: "y"},
    ]
  }
]

var currentQuestionIndex = 0;

$(function() {
  var initiateSurvey = function() {
    var currentQuestion = questions[currentQuestionIndex];
    
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

    submitAnswer();
  }

  var submitAnswer = function() {
    var chosenAnswer = "";

    $(".btn").on("click", function() {
      chosenAnswer = event.target.id;
      console.log(chosenAnswer);
      $(".col").remove();
      currentQuestionIndex++;
      initiateSurvey();
    })
  }


  initiateSurvey();
})