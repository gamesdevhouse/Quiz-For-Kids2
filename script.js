// Ensure JavaScript runs after HTML
document.addEventListener("DOMContentLoaded", function () { 
    
    // 10 quiz questions, 4 answer options/questions, 1 correct answer option/question, a placeholder/question
    const questions=[
        {
            question: "what is the largest animal in the world?",
            options: ["giraffe", "brown bear", "elephant", "blue whale"],
            answer: "blue whale",
            userAnswer: null
        },
        {
            question: "what is the name of the world´s highest mountain?",
            options: ["alps", "zugspitze", "mount everest", "annapurna"],
            answer: "mount everest",
            userAnswer: null
        },
        {
            question: "how many wings does a butterfly have?",
            options: ["4", "2", "8", "6"],
            answer: "4",
            userAnswer: null
        },
        {
            question: "at what age do you become a teenager?",
            options: ["10", "12", "15", "13"],
            answer: "13",
            userAnswer: null
        },
        {
            question: "what is the capital city of scotland?",
            options: ["edinburgh", "glasgow", "toronto", "london"],
            answer: "edinburgh",
            userAnswer: null
        },
        {
            question: "how many players are there in a fotball team?",
            options: ["8", "10", "11", "12"],
            answer: "11",
            userAnswer: null
        },
        {
            question: "a lobster has how many legs?",
            options: ["8", "20", "12", "10"],
            answer: "10",
            userAnswer: null
        },
        {
            question: "how long is one hour in minutes?",
            options: ["60", "100", "80", "90"],
            answer: "60",
            userAnswer: null
        },
        {
            question: "what date is christmas eve?",
            options: ["21th december", "22th december", "23th december", "24th december"],
            answer: "24th december",
            userAnswer: null
        },
        {
            question: "which country has the largest population in the world",
            options: ["usa", "china", "japan", "india"],
            answer: "china",
            userAnswer: null
        }   
        ];

// Keep track of the current question and user´s score
let currentQuestionIndex = 0;
let score = 0;

// DOM elements - Reference to HTML elements using their id
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");
const quizSummaryElement = document.getElementById("quiz-summary");
const refreshButton = document.getElementById("refresh-button");


// Present questions + answer options
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            let optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.classList.add("option-button");
            optionButton.addEventListener("click", () => {
                currentQuestion.userAnswer = currentQuestion.options[index];
                checkAnswer(index);
            });
            optionsElement.appendChild(optionButton);
        });
        feedbackElement.textContent = "";
        feedbackElement.classList.remove("correct", "incorrect");
        updateProgress();
    } else {
        displayResults();    
    }
}
    
// Evaluate user´s response, update score + provide feedback
function checkAnswer(selectedIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.options.indexOf(currentQuestion.answer)) {
        score++;
        scoreElement.textContent = `${score}/${questions.length}`;
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.classList.add("incorrect");
    }
    currentQuestionIndex++;
    loadQuestion();
}

// Function - update the progress indicator
function updateProgress() {
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Display user´s result = final score + summary of incorrect answers 
function displayResults() {
    const finalScore = `${score}/${questions.length}`;
    let summaryHTML = "<ul class='quiz-summary-list'>";
    
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].userAnswer !== questions[i].answer) {
            summaryHTML += "<li>";
            summaryHTML += `<p>${questions[i].question}</p>`;
            summaryHTML += "<div class='answer-container'>";
            summaryHTML += `<span class="red-mark">${questions[i].userAnswer}</span>`;
            summaryHTML += `<span class="green-mark">${questions[i].answer}</span>`;
            summaryHTML += "</div>";
            summaryHTML += "</li>";
        }
    }
    
    summaryHTML += "</ul>";
    quizSummaryElement.innerHTML = summaryHTML;
    quizSummaryElement.style.display = "block";
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    feedbackElement.style.display = "none";
    progressElement.style.display = "none";
    
    // Message "quiz complete" 
    let quizCompletedContainer = document.getElementById("quiz-completed-container");
    quizCompletedContainer.style.display = "block";
    
    // Good-job image
    let quizCompletedImage = document.getElementById("quiz-completed-image");
    quizCompletedImage.style.display = "block";
}
    
// Inital load of the first question and progress indicator
loadQuestion();
updateProgress();
});