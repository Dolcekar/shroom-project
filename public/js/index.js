// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
var questionsArray = ["Is your mushroom bruised?", "What color is the cap of your mushroom?", "What shape is the cap of your mushroom?", "What does the cap surface look like?", "What type of gill attachment do you observe in your mushroom?",
"What color is the gill?", "What color is the cap of your mushroom?", "How does the gill space look?", "In what habitat did you encounter your mushroom?", "How many mushrooms of the same kind seem to be around it?",
"How many rings do you see?", "What type of ring does it have (if any)?", "What is the color of the spore print?", "What is the color above the stalk?", "What is the color below the stalk?",
"What is the stalk root like?", "what is the shape of the stalk?", "What is the surface like above the stalk", "What is the surface like below the stalk?", "What is the color of the veil?",
"What type of veil does it have?"];
var imgArray=[];
var id;
function questionsFunc() {
  
  onClickImg();

}

function onClickImg() {
  $('img').click(function() {
    id = this.id;
    imgArray.push(id);
    console.log(imgArray);
  });
};



// var imgArray = [];


// cEl = document.getElementById("c");
// cEl.addEventListener("click", function (e) {
//   console.log(e.target.id);
// }, false);



// imgArray.push(); // Dumped all the objects

// for (let i = 0; i < imgArray.length; i++)
//   imgArray[index].addEventListener("click", function(event) {
//     console.log("you clicked region number " + index);
//   });

/* var i = 0;

onclick of pictureEl {
  var curQuestion = questionHtml + i;
  $element.html(question.html);
  i++;
}
submitElement = get Submit bttn element;

submitElement.addEventListener("click", function(e) {
  clickedId = e.target.id;
  i++;
}, false);
*/



// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
