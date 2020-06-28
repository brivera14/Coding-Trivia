// Select Start Quiz button
var timerEl = document.querySelector("header");
var startEl = document.querySelector("#starttrivia");
var welcomeEl = document.querySelector("#welcome-container");
var triviaEl = document.querySelector("#trivia");
var questionsEl = document.querySelector("#question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
var gameOverForm = document.querySelector("#game-over");
var evaluation = document.querySelector("#evaluation");
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
    countdown();
} 

//startbtnEl();
startEl.addEventListener("click", startbtnEl);

// Game over function
var gameOver = function(){
var allDone = document.querySelector("#all-done");
    allDone.textContent = "All Done!";
var finalScore = document.querySelector("#final-score");
    finalScore.textContent = "Your final Score is " + score;
var getInitials = document.createElement("label");
    getInitials.textContent = "Enter initials:";
    gameOverForm.appendChild(getInitials);
var inputInitials = document.createElement("input");
    inputInitials.style.display = "inline";
    gameOverForm.appendChild(inputInitials);
var submitbtn = document.createElement("button");
    submitbtn.textContent = "Submit";
    gameOverForm.addEventListener("submit", function(event){
        event.preventDefault();
    });
    gameOverForm.appendChild(submitbtn);

    
}

// function to check answer
score = 0;
var checkAnswer = function(answer){
    if( answer === triviaquestions[startQuestions].correct){
        // answer is correct
        correct();
        score += 10;
    }else {
        incorrect();
    }
    count = 0;
    if(startQuestions < lastQuestions){
        startQuestions++;
        displayQuestions();
    } else {
        triviaEl.style.display = "none";
        gameOver();
    }
}

// Correct answers function
var correct = function(){
    //var evaluation = document.querySelector("#evaluation");
    evaluation.textContent = "Correct!";
}

// incorrect answers function
var incorrect = function(){
    //var evaluation = document.querySelector("#evaluation");
    evaluation.textContent = "Wrong!";
    timeleft = timeleft -15;

}

// set countdown function
var timeleft = 75;
var countdown = function() {
    // Use the setInterval() method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function(){
        if (timeleft > 1){
            timerEl.innerHTML = "<h2>Timer: " + timeleft + "</h2>";
            timeleft--;
        } else if (timeleft === 1){
            timerEl.innerHTML = "<h2>Timer: " + timeleft + "</h2>";
            timeleft--;
        } else {
            clearInterval(timeInterval);
            triviaEl.style.display = "none";
            //gameOver();
        }
    },1000);
}