// Sample quiz questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Stephen King", "Harper Lee", "Ernest Hemingway", "Mark Twain"],
      answer: "Harper Lee"
    },
    {
      question: "Who wrote 'Ramayan'?",
      options: ["Shri Ram", "Hanuman", "Vibhishan", "Valmiki"],
      answer: "Valmiki"
    },
    {
      question: "What is the distance between Earth and Sun (in km)?",
      options: ["150M", "200M", "85M", "700M"],
      answer: "150M"
    },
    {
      question: "Radius of Earth (in km)?",
      options: ["1000", "7000", "6300", "2500"],
      answer: "6300"
    },
    {
      question: "What does the symbol mean?",
      options: ["Engineer", "Doctor", "Scientist", "Pyschologist"],
      answer: "Doctor"
    },
    {
      question: "What does the symbol Depicts?",
      options: ["Patent", "Copyright", "Trademark", "Public Domain"],
      answer: "Trademark"
    },
    {
      question: "Speed of Light (in km/s)?",
      options: ["100K", "500K", "900K", "300K"],
      answer: "300K"
    },
    {
      question: "Name of Currency used in India?",
      options: ["Dollar", "Rupee", "Euro", "Real"],
      answer: "Rupee"
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submitBtn');
  const resultContainer = document.getElementById('result');
  const timerElement = document.getElementById('timer');

  let timeLeft = 90; 
  
  // Function to load quiz questions
  function loadQuiz() {
    let quizHTML = '';

    questions.forEach((question, index) => {
        quizHTML += `
        <div class="question">
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, optionIndex) => `
                <div>
                    <input type="radio" id="q${index}o${optionIndex}" name="q${index}" value="${option}">
                    <label for="q${index}o${optionIndex}">${option}</label>
                </div>
            `).join('')}
            <div class="answer" id="answer${index}" style="display: none;">
                Correct Answer: ${question.answer}
            </div>
        </div>
        `;
    });
  
    quizContainer.innerHTML = quizHTML;
  }
  
  // Function to calculate and display the result
  function showResult() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        const answerElement = document.getElementById(`answer${index}`);

        if (selectedOption && selectedOption.value !== question.answer) {
            answerElement.style.display = 'block';
        } else if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    resultContainer.innerHTML = `Your Score: ${score} out of ${questions.length}`;
    clearInterval(timerInterval); // Stop the timer
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    showResult();
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = 'Form Submitted';
});
  
// Update timer every second
const timerInterval = setInterval(() => {
  timeLeft--;
  timerElement.textContent = `Time Remaining: ${timeLeft} seconds`;

  if (timeLeft === 0) {
      clearInterval(timerInterval);
      showResult();
      timerElement.textContent = `Times Up!`;
  }
}, 1000);

  // Load quiz when the page is loaded
  window.addEventListener('load', loadQuiz);
  