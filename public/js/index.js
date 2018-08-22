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
      {option: "Solitary", image: "/img/population/y.jpg", value: "y"}
    ]
  },
  {
    question: "What color is the cap of your mushroom?",
    options: [
      {option: "Cinnamon", image: "/img/capColor/c.png", value: "c"},
      {option: "Brown", image: "/img/capColor/n.png", value: "n"},
      {option: "Green", image: "/img/capColor/r.png", value: "r"},
      {option: "Red", image: "/img/capColor/e.png", value: "e"},
      {option: "Buff", image: "/img/capColor/b.jpg", value: "b"},
      {option: "Pink", image: "/img/capColor/p.png", value: "p"},
      {option: "Grey", image: "/img/capColor/g.png", value: "g"},
      {option: "Purple", image: "/img/capColor/u.jpg", value: "u"},
      {option: "Yellow", image: "/img/capColor/y.png", value: "y"},
    ]
  },
  {
    question: "Is your mushroom bruised?",
    options: [
      {option: "Yes", image: "/img/bruised/true.jpg", value: "t"},
      {option: "No", image: "/img/habitat/false.jpg", value: "f"}
    ]
  },
  {
    question: "What shape is the cap of your mushroom?",
    options: [
      {option: "Bell", image: "/img/capShape/b.jpg", value: "b"},
      {option: "Conical", image: "/img/capShape/c.jpg", value: "c"},
      {option: "Flat", image: "/img/capShape/f.jpg", value: "f"},
      {option: "Knobbed", image: "/img/capShape/k.jpg", value: "k"},
      {option: "Sunken", image: "/img/capShape/s.jpg", value: "s"},
      {option: "Convex", image: "/img/capShape/x.jpg", value: "x"}
    ]
  },
  {
    question:  "What does the cap surface look like?",
    options: [
      {option: "Fibrous", image: "/img/capSurface/f.jpg", value: "f"},
      {option: "Groovy", image: "/img/capSurface/g.jpg", value: "g"},
      {option: "Scaly", image: "/img/capSurface/s.jpg", value: "s"},
      {option: "Smooth", image: "/img/capSurface/y.jpg", value: "y"},
    ]
  },
  {
    question: "What type of gill attachment do you observe in your mushroom?",
    options: [
      {option: "Attached", image: "/img/gillAttachment/a.jpg", value: "a"},
      {option: "Free", image: "/img/gillAttachment/f.jpg", value: "f"}
    ]
  },
  {
    question: "What color is the gill?",
    options: [
      {option: "Buff", image: "/img/gillColor/b.jpg", value: "b"},
      {option: "Red", image: "/img/gillColor/e.jpg", value: "e"},
      {option: "Gray", image: "/img/gillColor/g.jpg", value: "g"},
      {option: "Chocolate", image: "/img/gillColor/h.jpg", value: "h"},
      {option: "Black", image: "/img/gillColor/k.jpg", value: "k"},
      {option: "Brown", image: "/img/gillColor/n.jpg", value: "n"},
      {option: "Orange", image: "/img/gillColor/o.jpg", value: "o"},
      {option: "Pink", image: "/img/gillColor/p.jpg", value: "p"},
      {option: "Green", image: "/img/gillColor/r.jpg", value: "r"},
      {option: "Purple", image: "/img/gillColor/u.jpg", value: "u"},
      {option: "White", image: "/img/gillColor/w.jpg", value: "w"},
      {option: "Yellow", image: "/img/gillColor/y.jpg", value: "y"}
    ]
  },
  {
    question:  "What is the color of the spore print?",
    options: [
      {option: "Buff", image: "/img/sporePrintColor/b.jpg", value: "b"},
      {option: "Chocolate", image: "/img/sporePrintColor/h.jpg", value: "h"},
      {option: "Black", image: "/img/sporePrintColor/k.jpg", value: "k"},
      {option: "Brown", image: "/img/sporePrintColor/n.jpg", value: "n"},
      {option: "Orange", image: "/img/sporePrintColor/o.jpg", value: "o"},
      {option: "Green", image: "/img/sporePrintColor/r.jpg", value: "r"},
      {option: "Purple", image: "/img/sporePrintColor/u.jpg", value: "u"},
      {option: "White", image: "/img/sporePrintColor/w.jpg", value: "w"},
      {option: "Yellow", image: "/img/sporePrintColor/y.jpg", value: "y"}
    ]
  },
  {
    question: "How does the gill space look?",
    options: [
      {option: "Crowded", image: "/img/gillSpacing/w.jpg", value: "w"},
      {option: "Close", image: "/img/gillSpacing/c.jpg", value: "c"}
    ]
  },
  {
    question: "How many rings do you see?",
    options: [
      {option: "None", image: "/img/ringNumber/n.jpg", value: "n"},
      {option: "One", image: "/img/ringNumber/o.jpg", value: "o"},
      {option: "Two", image: "/img/ringNumber/t.jpg", value: "t"}
    ]
  },
  {
    question: "What type of ring does it have (if any)?",
    options: [
      {option: "Evanescent", image: "/img/ringType/e.jpg", value: "e"},
      {option: "Flaring", image: "/img/ringType/f.jpg", value: "f"},
      {option: "Large", image: "/img/ringType/l.jpg", value: "l"},
      {option: "None", image: "/img/ringType/n.jpg", value: "n"},
      {option: "Pendant", image: "/img/ringType/p.jpg", value: "p"}
    ]
  },
  {
    question:  "What is the stalk color above the ring?",
    options: [
      {option: "Buff", image: "/img/stalkColorAbove/b.jpg", value: "b"},
      {option: "Red", image: "/img/stalkColorAbove/e.jpg", value: "e"},
      {option: "Gray", image: "/img/stalkColorAbove/g.jpg", value: "g"},
      {option: "Chocolate", image: "/img/stalkColorAbove/h.jpg", value: "h"},
      {option: "Brown", image: "/img/stalkColorAbove/n.jpg", value: "n"},
      {option: "Orange", image: "/img/stalkColorAbove/o.jpg", value: "o"},
      {option: "Pink", image: "/img/stalkColorAbove/p.jpg", value: "p"},
      {option: "White", image: "/img/stalkColorAbove/w.jpg", value: "w"},
      {option: "Yellow", image: "/img/stalkColorAbove/y.jpg", value: "y"}
    ]
  },
  {
    question: "What is the stalk color below the ring?",
    options: [
      {option: "Buff", image: "/img/stalkColorBelow/b.jpg", value: "b"},
      {option: "Red", image: "/img/stalkColorBelow/e.jpg", value: "e"},
      {option: "Gray", image: "/img/stalkColorBelow/g.jpg", value: "g"},
      {option: "Chocolate", image: "/img/stalkColorBelow/h.jpg", value: "h"},
      {option: "Brown", image: "/img/stalkColorBelow/n.jpg", value: "n"},
      {option: "Orange", image: "/img/stalkColorBelow/o.jpg", value: "o"},
      {option: "Pink", image: "/img/stalkColorBelow/p.jpg", value: "p"},
      {option: "White", image: "/img/stalkColorBelow/w.jpg", value: "w"},
      {option: "Yellow", image: "/img/stalkColorBelow/y.jpg", value: "y"}
    ]
  },
  {
    question: "What is the stalk root like?",
    options: [
      {option: "Bulbous", image: "/img/stalkRoot/b.jpg", value: "b"},
      {option: "Club", image: "/img/stalkRoot/c.jpg", value: "c"},
      {option: "Equal", image: "/img/stalkRoot/e.jpg", value: "e"}
    ]
  },
  {
    question: "What is the stalk surface like below the ring?",
    options: [
      {option: "Fibrous", image: "/img/stalkSurfaceBelow/f.jpg", value: "f"},
      {option: "Silky", image: "/img/stalkSurfaceBelow/k.jpg", value: "k"},
      {option: "Smooth", image: "/img/stalkSurfaceBelow/s.jpg", value: "s"},
      {option: "Scaly", image: "/img/stalkSurfaceBelow/y.jpg", value: "y"}
    ]
  },
  {
    question: "what is the shape of the stalk?",
    options: [
      {option: "Enlarging", image: "/img/stalkShape/e.jpg", value: "e"},
      {option: "Tapering", image: "/img/stalkShape/t.jpg", value: "t"}
    ]
  },
  {
    question: "What is the stalk surface like above the ring?",
    options: [
      {option: "Fibrous", image: "/img/stalkSurfaceAbove/f.jpg", value: "f"},
      {option: "Silky", image: "/img/stalkSurfaceAbove/k.jpg", value: "k"},
      {option: "Smooth", image: "/img/stalkSurfaceAbove/s.jpg", value: "s"},
      {option: "Scaly", image: "/img/stalkSurfaceAbove/y.jpg", value: "y"}
    ]
  },
  {
    question: "What is the color of the veil?",
    options: [
      {option: "Brown", image: "/img/veilColor/b.png", value: "n"},
      {option: "Orange", image: "/img/veilColor/o.png", value: "o"},
      {option: "Yellow", image: "/img/veilColor/y.png", value: "y"},
      {option: "White", image: "/img/veilColor/w.png", value: "w"}
    ]
  },
  {
    question: "What is the size of the gill?",
    options: [
      {option: "Broad", image: "/img/gillSize/g.jpg", value: "b"},
      {option: "Narrow", image: "/img/gillSize/l.jpg", value: "n"}
    ]
  }
]

var currentQuestionIndex = 0;

$(function() {
  var answerArray = [];

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
      answerArray.push(chosenAnswer);
      console.log(answerArray);
      currentQuestionIndex++;
      initiateSurvey();
    })
  }

  // module.exports = answerArray;

  initiateSurvey();
})