let selectedAnswer = null;
let correctAnswer = '';

const questions = [
    {
        videoSrc: '/videos/sample.mp4',
        options: ['Option A', 'Option B', 'Option C', 'Correct Answer'],
        correct: 'Correct Answer'
    },
    {
        videoSrc: '/videos/sample.mp4',
        options: ['Option A', 'Option B', 'Option C', 'New Correct Answer'],
        correct: 'New Correct Answer'
    },
    // Add more questions here with different correct answers
];

let currentIndex = 0;

// Function to show the quiz and hide the welcome screen
document.getElementById('forwardArrow').addEventListener('click', () => {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    showQuestion(currentIndex);
});

// Function to select an answer
function selectAnswer(option) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => button.classList.remove('selected'));

    const selectedButton = [...buttons].find(button => button.textContent === option);
    selectedButton.classList.add('selected');

    selectedAnswer = option;
    document.getElementById('checkButton').disabled = false;
}

// Function to check the selected answer
function checkAnswer() {
    const resultElement = document.getElementById('result');
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect, try again.';
        resultElement.style.color = 'red';
    }
}

// Function to show the question and video
function showQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;

    const question = questions[index];
    correctAnswer = question.correct; // Update correct answer for the current question

    document.getElementById('video').src = question.videoSrc;

    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button, i) => {
        button.textContent = question.options[i];
    });

    // Reset previous selection
    selectedAnswer = null;
    document.getElementById('checkButton').disabled = true;
    document.getElementById('result').textContent = '';
}

// Navigation buttons event listeners
document.getElementById('prevButton').addEventListener('click', () => {
    showQuestion(currentIndex - 1);
});

document.getElementById('nextButton').addEventListener('click', () => {
    showQuestion(currentIndex + 1);
});
