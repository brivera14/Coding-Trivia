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
var inputGoEl = document.querySelector("#initials");
var labelGoEl = document.querySelector("#enter-initials");
var submitGoEl = document.querySelector("#submit-initials");
var evaluation = document.querySelector("#evaluation");
var highScoreForm = document.querySelector("#high-score");
var hsTitle = document.querySelector("#hs-title");
var hsPlayer = document.querySelector("#hs-player");
var goBackBtn = document.querySelector("#go-backbtn");
var clearHsBtn = document.querySelector("#clearhs-btn");

//console.log(startbtnEl);

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
    timeInterval = setInterval(countdown,1000);
    saveHighScore();
} 

//startbtnEl();
startEl.addEventListener("click", startbtnEl);

// Save High Score
var saveHighScore = function(event){
    event.preventDefault();
    gameOverForm.style.display = "none";
    var score = localStorage.getItem("score");
    var inputEl = localStorage.getItem("initials");
    //console.log('inputEl ', JSON.parse(inputEl));

    if (score === null || inputEl === null) {
        return;
    }
    hsPlayer.textContent = "1. " + inputEl + score;
    //hsTitle.textContent = "High Scores";
    //hsTitle.style.display = "inline";
    goBackBtn.textContent = "Go Bach";
    goBackBtn.style.display = "inline-block";
    clearHsBtn.textContent = "Clear high scores";
    clearHsBtn.style.display = "inline-block";


}

// Game over function
var gameOver = function(){
    event.preventDefault();
var allDone = document.querySelector("#all-done");
    allDone.textContent = "All Done!";
var finalScore = document.querySelector("#final-score");
    finalScore.textContent = "Your final Score is " + score;
    labelGoEl.textContent = "Enter initials:";
    labelGoEl.style.display = "inline-block";
    inputGoEl.style.display = "inline";
    submitGoEl.textContent = "Submit";
    submitGoEl.style.display = "inline";

    var inputValue = document.querySelector("#initials").value;

    localStorage.setItem("score", score);
    localStorage.setItem("initials", JSON.stringify(inputValue));

    gameOverForm.reset();
}
gameOverForm.addEventListener("submit", saveHighScore);

// function to check answer
var score = 0;
var checkAnswer = function(answer){
    if( answer === triviaquestions[startQuestions].correct){
        // answer is correct
        correct();
        score = timeleft;
    }else {
        incorrect();
        timeleft = timeleft -10;
        score = timeleft;
    }
    count = 0;
    if(startQuestions < lastQuestions){
        startQuestions++;
        displayQuestions();
    } else {
        triviaEl.style.display = "none";
        gameOver();
        stopTimer();
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
    

}

// set countdown function
var timeleft = 75;
var countdown = function() {
    // Use the setInterval() method to call a function to be executed every 1000 milliseconds
    
        if (timeleft > 1){
            timerEl.innerHTML = "<h2>Timer: " + timeleft + "</h2>";
            timeleft--;
        } else if (timeleft === 1){
            timerEl.innerHTML = "<h2>Timer: " + timeleft + "</h2>";
            timeleft--;
        } else {
            //clearInterval(timeInterval);
            stopTimer();
            triviaEl.style.display = "none";
            //gameOver();
        }
    
}

var stopTimer = function() {
    clearInterval(timeInterval);
}