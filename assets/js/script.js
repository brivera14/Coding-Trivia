// Select Start Quiz button
var startEl = document.querySelector("#starttrivia");
var welcomeEl = document.querySelector("#welcome-container");
var triviaEl = document.querySelector("#trivia");
var questionsEl = document.querySelector("#question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
//console.log(startbtnEl);

// Create questions for the trivia
var triviaquestions = [
    {
        question: "Commonly used data types Do Not Include:",
        a1: "1. Strings",
        a2: "2. Booleans",
        a3: "3. Alerts",
        a4: "4. Numbers",
        correct: "option-2"
    }, {
        question: "The condition in a if / else statement is enclosed with________",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
        correct: "option-3"
    }, {
        question: "Arrays in JavaScript can be used to store________",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: "option-4"
    }, {
        question: "String values must be enclosed withing _______ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
        correct: "option-2"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "1. JavaScript",
        a2: "2. terminal/bash",
        a3: "3. for loops",
        a4: "4. console.log",
        correct: "option-3"
    }
]

// Variables
var lastQuestions = triviaquestions.length - 1;
var startQuestions = 0;
count = 0;

// funtion to display questions
var displayQuestions = function() {
    var quest = triviaquestions[startQuestions];

    questionsEl.innerHTML = "<p>" + quest.question + "</p>";
    option1.innerHTML = quest.a1;
    option2.innerHTML = quest.a2;
    option3.innerHTML = quest.a3;
    option4.innerHTML = quest.a4;

}



// Function to start quiz
var startbtnEl = function() {
    welcomeEl.style.display = "none";
    displayQuestions();
    triviaEl.style.display = "block";
} 

//startbtnEl();
startEl.addEventListener("click", startbtnEl);

// function to check answer
var checkAnswer = function(answer){
    if( answer === triviaquestions[startQuestions].correct){
        // answer is correct
        alert("correct")
        //correctAnswer();
    }else {
        alert("incorrect")
        //incorrectAnswer();
    }
    count = 0;
    if(startQuestions < lastQuestions){
        startQuestions++;
        displayQuestions();
    } else {
        //break;
    }
}