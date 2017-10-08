/*  CODING CHALLENGE

1. Build a function constructor called Question to describe a question.
A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an
 adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this) 

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the
possible answers (each question should have a number) (Hint: write a method 
for the Question objects for this task.)

5. Use the 'prompt' function to ask the user for the correct answer. The user
should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answee is
correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with other proframmers
code (Hint: we learned a special technique to do exactly that.)

*/

/*
(function () {
  function Question(question, answer, correct) {
    this.question = question
    this.answer = answer
    this.correct = correct
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question)
    this.answer.forEach(function (ans, i) {
      console.log(i + ': ' + ans)
    })
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!')
    } else {
      console.log('Wrong answer. Try again :)')
    }
  }

  const q1 = new Question(
    'Is Javascript the coolest programming language in the world?',
    ['Yes', 'No'],
    0)

  const q2 = new Question('What is name of this course\'s teacher?',
    ['John', 'Michale', 'Jonas'],
    2)

  const q3 = new Question('What does best describe of coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2)

  const questions = [q1, q2, q3]
  const n = Math.floor(Math.random() * questions.length)
  
  
  questions[n].displayQuestion()
  //parseInt: transfer string to number
  let answer = parseInt(prompt('Please select the correct answer(just type the number.)'))
  questions[n].checkAnswer(answer)
})()

*/
/*
--- Expert Level ---
8. After you display the result, display the next random question, so that the game
never ends(Hint: write a function for this and call it right after displaying the result.)

9. Be careful: after Task 8, the game literally never ends. So include the optio to quit
the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function 
from task 8.

10. Track the user's score to make the game more fun! so each time an answer is correct, add
1 point to the score (Hint: I'm going to use the poser of closures for this, but you don't have to,
jusr do this with the tools you feel more comfortable at this point.)

11. Display the score in the console. Use yet another method for this.
 */

(function () {
  function Question(question, answer, correct) {
    this.question = question
    this.answer = answer
    this.correct = correct
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question)
    this.answer.forEach(function (ans, i) {
      console.log(i + ': ' + ans)
    })
  }

  Question.prototype.checkAnswer = function (ans, callback) {
    let sc
    if (ans === this.correct) {
      console.log('Correct answer!')
      sc = callback(true)
    } else {
      console.log('Wrong answer. Try again :)')
      sc = callback(false)
    }
    this.displayScore(sc)
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score)
    console.log('--------------------------------------')
  }

  const q1 = new Question(
    'Is Javascript the coolest programming language in the world?',
    ['Yes', 'No'],
    0)

  const q2 = new Question('What is name of this course\'s teacher?',
    ['John', 'Michael', 'Jonas'],
    2)

  const q3 = new Question('What does best describe of coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2)

  const questions = [q1, q2, q3]

  function score() {
    let sc = 0
    return function (correct) {
      if (correct) {
        sc++
      }
      return sc
    }
  }

  const keepScore = score()

  function nextQuestion() {
    const n = Math.floor(Math.random() * questions.length)
    questions[n].displayQuestion()
    let answer = prompt('Please select the correct answer (just type the number.)')

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore)
      nextQuestion()
    }
  }
  nextQuestion()
})()