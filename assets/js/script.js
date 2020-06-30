// Declare Variables
var timerEl = document.querySelector("#timer");
var viewHsEl = document.querySelector("#view-hs");
var startEl = document.querySelector("#starttrivia");
var welcomeEl = document.querySelector("#welcome-container");
var triviaEl = document.querySelector("#trivia");
var questionsEl = document.querySelector("#question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
var gameOverForm = document.querySelector("#game-over");
var inputGoEl = document.querySelector("#initials");
var labelGoEl = document.querySelector("#enter-initials");
var submitGoEl = document.querySelector("#submit-initials");
var evaluation = document.querySelector("#evaluation");
var highScoreForm = document.querySelector("#high-score");
var hsTitle = document.querySelector("#hs-title");
var hsPlayer = document.querySelector("#hs-player");
var goBackBtn = document.querySelector("#go-backbtn");
var clearHsBtn = document.querySelector("#clearhs-btn");
var finalScoreEl = document.querySelector("#final-score");

// Create questions for the trivia
var triviaquestions = [
    {
        question: "Commonly used data types Do Not Include:",
        a1: "1. Strings",
        a2: "2. Booleans",
        a3: "3. Alerts",
        a4: "4. Numbers",
        correct: "option-3"
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
        correct: "option-3"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "1. JavaScript",
        a2: "2. terminal/bash",
        a3: "3. for loops",
        a4: "4. console.log",
        correct: "option-4"
    }
]

// Variables for Display Question Function
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
    timeInterval = setInterval(countdown,1000);
    
} 

// Activate Start Quiz Button
startEl.addEventListener("click", startbtnEl);

// Function to get Show High Score
var getHighScore = function(){

    gameOverForm.style.display = "none";
    var score = localStorage.getItem("score");
    var inputEl = localStorage.getItem("initials");

    if (score === null || inputEl === null) {
        return;
    }
    viewHsEl.style.display = "none";
    timerEl.style.display = "none";
    hsPlayer.textContent = "1. " + inputEl + "-" + score;
    goBackBtn.textContent = "Go Back";
    goBackBtn.style.display = "inline-block";
    clearHsBtn.textContent = "Clear high scores";
    clearHsBtn.style.display = "inline-block";
}

// Activate Submit Button and storage the score and Initials
gameOverForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (inputGoEl.value === ""){
        alert("You must enter your initials to continue");
        showFormEl();
        return;
    } else {
        localStorage.setItem("score", score);
        localStorage.setItem("initials", inputGoEl.value);
    }

    gameOverForm.reset();
    
    getHighScore();
});

// Function that contain Game Over form
showFormEl = function(){
    gameOverForm.style.display = "inline-block";
    finalScoreEl.textContent = "Your final score is: " + score;
}

// function to check answer and continue to next questions
var score = 0;
var checkAnswer = function(answer){
    if( answer === triviaquestions[startQuestions].correct){
        // answer is correct
        correct();
        score = (timeleft) + 1;
    }else {
        incorrect();
        timeleft = timeleft -10;
        score = (timeleft) + 11;
    }
    count = 0;
    if(startQuestions < lastQuestions){
        startQuestions++;
        displayQuestions();
    } else {
        triviaEl.style.display = "none";
        stopTimer();
        showFormEl();
    }
}

// Correct answers function
var correct = function(){
    evaluation.textContent = "Correct!";
}

// incorrect answers function
var incorrect = function(){
    evaluation.textContent = "Wrong!";
}

// set countdown function
var timeleft = 75;
var countdown = function() {
    // Use the setInterval() method to call a function to be executed every 1000 milliseconds
    
        if (timeleft > 1){
            timerEl.textContent = "Timer: " + timeleft;
            timerEl.style.display = "inline-block";
            timeleft--;
        } else if (timeleft === 1){
            timerEl.textContent = "Timer: " + timeleft;
            timerEl.style.display = "inline-block";
            timeleft--;
        } else {
            stopTimer();
            triviaEl.style.display = "none";
        }
    
}
// Stop countdown function
var stopTimer = function() {
    clearInterval(timeInterval);
}