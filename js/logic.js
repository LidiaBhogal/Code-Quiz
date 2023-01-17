var startButton = document.getElementById("start");
var questionsDiv = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choices = document.getElementById('choices')

var questionIndex = 0

var time = document.getElementById('time');
var count = 60
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
    alert('game over!')
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
      }
    })

    choices.appendChild(button)
  }
}

var timerEl = document.getElementById('time');
var secondsLeft = 60
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();

    }
  },1000);
}
function sendMessage() {
  timerEl.textContent = '';
}







