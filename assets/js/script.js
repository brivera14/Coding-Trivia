// Select Start Quiz button
var tbtnEl = document.querySelector("button");
var mainEl = document.querySelector("form");
//console.log(startbtnEl);

var startbtnEl = function(event) {
    event.preventDefault();
    mainEl.reset();
    var questions = document.createElement("p");
    questions.textContent = "hello"
    mainEl.appendChild(questions);
    
} 

// Create questions for the trivia

//startbtnEl();
tbtnEl.addEventListener("click", startbtnEl);