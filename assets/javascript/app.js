//Click start button to begin trivia
//Hide button and rest of the page
//When first question appears, put everything on display
//Create a 30 second timer 
// Ask question and have four answers for user to choose from
//If user chooses incorrectly, alert the answer was wrong and state the right answer with a gif
//If user chooses correctly, alert the they chose correct answer with a gif
//If user runs out of time, alert they ran out of time and provide the correct answer
//If user chooses right or wrong, page will hide and then show the next questions
// Once game finishes, display number of "correct" answers, display number of "incorrect" answers and list "unaswered".
//Provide a "start over" button to begin the game

var questionTimeMs = 30000;
var questionIndex = 0;
var currentTimeRemaining;
var timeRemainingInterval;
var currentAnswer;
var choices;
var choiceIndex = 0;
var numCorrect = 0;
var numWrong = 0;

var questions = [
    {
        question: "What comic book did Spider-Man first appear in?",
        choices: ["Amazing Fantasy", "Tales to Astonish", "Amazing Spider-Man", "Marvel Tales"],
        answer: "Amazing Fantasy"
    },
    {
        question: "What villain did Spider-Man fight in issue Amazing Spider-Man #3?",
        choices: ["Green Goblin", "SuperCharger", "Terrible Tinkerer", "Doctor Octopus"],
        answer: "Doctor Octopus",
    },
    {
        question: "Which character bullied Peter Parker in high school?",
        choices: ["Biff Tannen", "Flash Thompson", "Robbie Robertson", "Harry Osborn"],
        answer: "Flash Thompson",
    },
    {
        question: "What is Peter Parker's middle name",
        choices: ["Christian", "Eric", "Benjamin", "Will"],
        answer: "Benjamin",
    },

    {
        question: "What did Spider-Man bring home from the first 'Secret Wars?'",
        choices: ["New girlfriend", "Alien Flu", "Key Chain", "Symbiote"],
        answer: "Symbiote",
    },
    {
        question: "Where was Peter Parker born?",
        choices: ["Paterson", "Coding Bootcamp", "Queens", "California"],
        answer: "Queens",
    },
];

function showOutOfTimePage() {
    numWrong++;
    $("#choices").hide();
    $("#outoftime").show();

    setTimeout(function () {
        $("#outoftime").hide();
        askQuestion();
    }, 5000);
}

function updateTimeRemaining() {
    currentTimeRemaining--;
    $("#time").text(currentTimeRemaining)

    if (currentTimeRemaining === 0) {
        clearInterval(timeRemainingInterval);
        showOutOfTimePage();
        return;
    }
}

function askQuestion() {
    if (questionIndex === questions.length) {
        showDonePage();
        return;
    }

    var questionObj = questions[questionIndex];
    var question = questionObj.question;
    choices = questionObj.choices;
    currentAnswer = questionObj.answer;

    currentTimeRemaining = 15;

    $("#time").text(currentTimeRemaining)
    $("#question").text(question)
    $("#choice0").text(choices[0])
    $("#choice1").text(choices[1])
    $("#choice2").text(choices[2])
    $("#choice3").text(choices[3])

    timeRemainingInterval = setInterval(updateTimeRemaining, 1000);

    questionIndex++;
    $("#choices").show();
}

function startGame() {
    $("#startpage").hide();
    $("#questionpage").show();

    askQuestion();
}

function choice0Clicked() {
    if (currentAnswer === choices[0]) {
        showCorrectPage();
    } else {
        showWrongPage();
    }
}

function choice1Clicked() {
    if (currentAnswer === choices[1]) {
        showCorrectPage();
    } else {
        showWrongPage();
    }
}

function choice2Clicked() {
    if (currentAnswer === choices[2]) {
        showCorrectPage();
    } else {
        showWrongPage();
    }
}

function choice3Clicked() {
    if (currentAnswer === choices[3]) {
        showCorrectPage();
    } else {
        showWrongPage();
    }
}

function showCorrectPage() {
    numCorrect++;
    $("#choices").hide();
    $("#correctanswer").show();

    askNextQuestion();
}

function showWrongPage() {
    numWrong++;
    $("#choices").hide();
    $("#wronganswer").show();

    askNextQuestion();
}

function askNextQuestion() {
    clearInterval(timeRemainingInterval);

    setTimeout(function() {
        $("#correctanswer").hide();
        $("#wronganswer").hide();

        askQuestion();
    }, 2000);
}

function showDonePage() {
    $("#questionpage").hide();
    $("#donepage").show();
    $("#numcorrect").text(numCorrect);
    $("#numwrong").text(numWrong);
}

function restartGame() {
    $("#correctanswer").hide();
    $("#wronganswer").hide();
    $("#donepage").hide();

    questionIndex = 0;
    numCorrect = 0;
    numWrong = 0;
    startGame();
}

function documentReadyCallback() {
    $("#questionpage").hide();
    $("#outoftime").hide();
    $("#correctanswer").hide();
    $("#wronganswer").hide();
    $("#donepage").hide();
    $("#startgame").click(startGame);
    $("#choice0").click(choice0Clicked);
    $("#choice1").click(choice1Clicked);
    $("#choice2").click(choice2Clicked);
    $("#choice3").click(choice3Clicked);
    $("#retrybutton").click(restartGame);
}

$(document).ready(documentReadyCallback);