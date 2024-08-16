// script.js
const quizData = [
    {
        question: "Which HTML element is used to define a table row?",
        a: "<tr>",
        b: "<td>",
        c: "<table>",
        d: " <th>",
        correct: "a"
    },
    {
        question: "What is the correct syntax for adding a comment in CSS?",
        a: "/* This is a comment */",
        b: "// This is a comment",
        c: " # This is a comment",
        d: "<!– This is a comment –>",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
    {
        question: "What is the capital of pakistan?",
        a: "islamabad",
        b: "lahore",
        c: "peshawar",
        d: "murre",
        correct: "a"
    },
];



const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    quizContainer.innerHTML = `
        <div class="question">${currentQuiz + 1}. ${currentQuizData.question}</div>
        <div class="options">
            <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label>
            <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label>
            <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label>
            <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
        </div>
    `;
}

function getSelected() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.value;
        }
    });
    return answer;
}

function showResult() {
    quizContainer.innerHTML = '';
    result.innerHTML = `You answered correctly ${score} out of ${quizData.length} questions.`;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});

// Load the first question
loadQuiz();
