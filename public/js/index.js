$(function() {

  var currentURL = window.location.origin;

  //first mushroom in list  [ 'u', 's', 's', 'n', 'x', 't', 'f', 'k', 'c', 'n', 'o', 'p', 'w', 'w', 's', 's', 'e', 'e', 'w', 'k', 'p' ]

  var config = {
    apiKey: "AIzaSyBfJNlPh-b7-lqmn1rW0RalXVtYBLWkyWk",
    authDomain: "shroom-project.firebaseapp.com",
    databaseURL: "https://shroom-project.firebaseio.com",
    projectId: "shroom-project",
    storageBucket: "shroom-project.appspot.com",
    messagingSenderId: "424044888870"
  };

  firebase.initializeApp(config);

  // Pull questions from the backend!
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
    // Initiates survey everytime page is refreshed or user submits and answer
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

    // On button click set chosenAnswer to buttons id and then push that id into the answerArray
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

    // Run post to answer route and hopefully get a mushroom back!
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

    // Switch that lets you know if edible or poisonous and lets you know if we can't find your mushroom!
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
    var resultHeader = $("<h3 id=`resultHeader`>Submit an image of your mushroom to help other aspiring mycologists!</h3>")
    $(resultColumn).prepend(resultHeader);
    $("#imageRow").append(resultColumn);

    var fileInput = $("<input type='file' name='image' accept='image/png image/jpeg'>");
    var submitInput = $("<input type='submit' value='Upload!'>");

    $(resultColumn).append(fileInput);
    $(resultColumn).append(submitInput);

    // Consts and vars required for upload
    const storageService = firebase.storage();
    const storageRef = storageService.ref();
    var file = $(fileInput).get(0).files[0];

    // When you change the selected file, set file variable again!
    $(fileInput).on("change", function(event) {
      file = event.target.files[0];
    });

    // On upload button click, run file upload with listed parameters and change resultHeader text
    $(submitInput).on("click", function() {
      fileUpload(file, storageRef, mushroomKey);
      $("#resultHeader").text("Would you like to upload another image?");
    });
  }

  var fileUpload = function(selectedFile, ref, mushroomKey) {
    // When fileUpload is ran run task to upload your image to directory, based on the related mushroomKey
    const task = ref.child(`images/${mushroomKey}/` + (+new Date()) + "-" + `${selectedFile.name}`).put(selectedFile);

    // On status change let us know if we have an error or success
    task.on("state_changed", (snapshot) => {

    }, (error) => {
      console.log(error);
    }, () => {
      console.log("SUCCESS!");
    })
  }
})