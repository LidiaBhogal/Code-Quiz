var startButton = document.getElementById("start");
var questionsDiv = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choices = document.getElementById('choices')
// var answer =
var time = document.getElementById('time')
var timer = document.getElementById('timer')
var isWin = false;

var questionIndex = 0


startButton.addEventListener("click", startGame)
  

function startGame(){
  console.log("button clicked" );
   startButton.classList.add('hide');
 questionTitle.classList.remove('hide')
 questionsDiv.classList.remove('hide')
   setNextQuestion()
   
}

function setNextQuestion (){
  if (myQuestions[questionIndex]) {
    showQuestion()
  } else {
    console.log('game over!')
  }

}


function showQuestion(question){
  questionTitle.textContent = myQuestions[questionIndex].questionTitle
  choices.innerHTML = ''
  for (let i = 0; i < 4; i++) {
    var button = document.createElement('button')

    button.textContent = myQuestions[questionIndex].choices[i];

    button.addEventListener('click', function()
    {
      if (myQuestions[questionIndex].choices[i]=== myQuestions[questionIndex].answer) {
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


function selectAnswer (){

}



function startTimer() {
  // Sets timer
  time = setInterval(function() {
    time--;
    timer.textContent = time;
    if (time >= 0) {
      // Tests if win condition is met
      if (isWin && timer > 0) {
        // Clears interval and stops timer
        clearInterval(time);
        winGame();
      }
    }
    // Tests if time has run out
    if (timer === 0) {
      // Clears interval
      clearInterval(time);
      loseGame();
    }
  }, 1000);
}



// var choices = document.querySelectorAll('choices');

// for (var i = 0; i < choices.length; i++) {
//    choices[i].setAttribute('style', color: red) 
   
// }
// function showQuestion(myQuestions){
//    var questions = document.getElementsByName('questions');

//    questions.textContent = myQuestions.title;

//    var choices= document.querySelectorAll('.choice');
//    console.log(choices);
   
//    choices.forEach(function(element,index){
//       element.textContent = myQuestions.choices;
//    }
//    )

// }
// showQuestion(myQuestions);



