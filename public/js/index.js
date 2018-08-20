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
      {}
    ]
  }
]

var currentQuestionIndex = 0;

$(function() {
  var initiateSurvey = function() {
    var currentQuestion = questions[currentQuestionIndex];
    
    var panel = $("<div class='card text-primary border-primary'>");
    var panelHeading = $("<div class='card-header'>");
    var panelBody = $("<div class='card-body'>")
    var imgRow = $("<row class='row'>")

    panel.prepend(panelHeading);
    panel.append(panelBody);
    panelBody.append(imgRow);

    panelHeading.text(currentQuestion.question);

    for (var i = 0; i < currentQuestion.options.length; i++) {
      var imgCol = $("<column class='col'>");
      var imgCard = $("<div class='card border-primary' style='width: 15rem'>");
      var imgCardBody = $("<div class='card-body'>")

      imgCard.append(imgCardBody);

      imgCard.prepend("<img class='card-img-top imgCard' src='" + currentQuestion.options[i].image + "' >");
      imgCardBody.append("<btn class='btn btn-primary' id='" + currentQuestion.options[i].value + "'>" + currentQuestion.options[i].option + "</btn>");

      imgCol.append(imgCard);
      imgRow.append(imgCol);
    }
    $(".panelRow").append(panel);

    $(".btn").on("click", function() {
      console.log(event.target.id);
    })
  }


  initiateSurvey();
})