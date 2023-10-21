const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn", "btn-secondary", "mr-2");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `You scored ${score} out of ${quizData.length}!`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => loadQuestion());

loadQuestion();
