// Function - Ensure JavaScript runs after HTML
document.addEventListener("DOMContentLoaded",) function () {
    
    // 10 quiz questions, 4 answer options/questions, 1 correct answer option/question, a placeholder/question
    let questions=[
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
            questions: "a lobster has how many legs?",
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
}
// Keep track of the current question and user´s score
let currentQuestionIndex = 0;
let score = 0;

// Dom elements - Reference to HTML elements using their id
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let feedbackElement = document.getElementById("feedback");
let scoreElement = document.getElementById("score");
let progressElement = document.getElementById("progress");
let quizSummaryElement = document.getElementById("quiz-summary");
let refreshButton = document.getElementById("refresh-button");



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

