var startButton = document.getElementById("start");
var questionsDiv = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choices = document.getElementById('choices')
var answer = document.getElementById('answer')
var questionIndex = 0
var finished = document.getElementById('end-screen')
var time = document.getElementById('time');
var count = 60
var finalScore = document.getElementById('final-score')
startButton.addEventListener("click", startGame)


function startGame() {
  console.log("button clicked");
  startButton.classList.add('hide');
  questionTitle.classList.remove('hide')
  questionsDiv.classList.remove('hide')
  setNextQuestion()
  setTime()

}

function setNextQuestion() {
  if (myQuestions[questionIndex]) {
    showQuestion()
  } else {
    alert('Game over!')
    questionsDiv.classList.add('hide');
    finished.classList.remove('hide');
  }

}


function showQuestion(question) {
  questionTitle.textContent = myQuestions[questionIndex].questionTitle
  choices.innerHTML = ''
  for (let i = 0; i < 4; i++) {
    var button = document.createElement('button')

    button.textContent = myQuestions[questionIndex].choices[i];

    button.addEventListener('click', function () {
      if (myQuestions[questionIndex].choices[i] === myQuestions[questionIndex].answer) {
        console.log('correct');
        questionIndex++
        setNextQuestion()

      } else {
        questionIndex++
        setNextQuestion()
        console.log('incorrect');
        finalScore = '';
      }
    })

    choices.appendChild(button)
  }
}

var timerEl = document.getElementById('time');
var secondsLeft = 60
var minus = secondsLeft -- *10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {

      clearInterval(timerInterval);
      sendMessage();
    } else {
      if (!answer)
        secondsLeft.minus;
      
    }
  }, 1000);
}


function sendMessage() {
  timerEl.textContent = '';
 
}