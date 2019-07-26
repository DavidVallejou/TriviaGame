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
var choiceIndex =0;
var win = 0;
var lose = 0;

var questions = [
    {
        question: "What comic book did Spider-Man first appear in?",
        choices: ["Amazing Fantasy", "Tales to Astonish", "Amazing Spider-Man", "Marvel Tales"],
        answer: "Amazing Fantasy"
    },
    {
        qquestion: "What villain did Spider-Man fight in issue Amazing Spider-Man #3?",

        choices: ["Green Goblin", "SuperCharger", "Terrible Tinkerer", "Doctor Octopus"],

        answer: "Doctor Octopus",

    },

    {

        question: "Which character bullied Peter Parker in high school?",

        choices: ["The Rhino", "Doctor Octopus", "Green Goblin", "Electro"],

        answer: "Green Goblin",

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

    {

        question: "What color is Mary Jane Watson's hair?",

        choices: ["What color is Mary Jane Watson's hair?"]},

       

];

function outOfTime() {
    $("#choices").hide();
    $("#outoftime").show();

    setTimeout(function() {
        $("#outoftime").hide();
        askQuestion();
    }, 5000);
}

function updateTimeRemaining() {
    $("#time").text(currentTimeRemaining)

    currentTimeRemaining--;

    if (currentTimeRemaining === -1) {        
        clearInterval(timeRemainingInterval);
        outOfTime();
    }
}

function askQuestion() {
    if (questionIndex === questions.length) {
        alert("done");
        return;
    }

    var questionObj = questions[questionIndex];
    var question = questionObj.question;
    var choices = questionObj.choices;
    currentAnswer = questionObj.answer;

    currentTimeRemaining = 30;

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

// function choice0Clicked() {                           <--------I had trouble making all in green work
//     $("#choice0").on("click", choice0Clicked);
// if (currentAnswer === choiceIndex[0])
//     $("#choice0").text(win)
//     else (currentAnswer < choiceIndex[0]
//         $("#choice0").text(lose)
    

// }

// function choice1Clicked() {

//     $("#choice1").on("click", choice1Clicked);
//     if (currentAnswer === choiceIndex[1])
//         $("#choice1").text(win)
// }

// function choice2Clicked() {

//     $("#choice0").on("click", choice0Clicked);
//     if (currentAnswer === choiceIndex[2])
//         $("#choice0").text(win)
//         else (currentAnswer < choiceIndex[2]
//             $("#choice0").text(lose)
        
// }

// function choice3Clicked() {

    
//     $("#choice0").on("click", choice0Clicked);
//     if (currentAnswer === choiceIndex[3])
//         $("#choice0").text(win)
//         else (currentAnswer < choiceIndex[3]
//             $("#choice0").text(lose)
// }

function documentReadyCallback() {
    $("#questionpage").hide();
    $("#outoftime").hide();
    $("#startgame").on("click", startGame);
    
    
       
}

$(document).ready(documentReadyCallback);