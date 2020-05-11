/*
Code by  : Shahid Dhariwala
LinkedIn : https://www.linkedin.com/in/shahiddhariwala/
Twitter  : https://twitter.com/shahiddhariwala
Date     : 11-May-2020
*/

//Making our code private
(function () {
  //My Weclome Alert
  this.alert("Welcome, Please open JS Console!! ");

  function Questions(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  var q1 = new Questions(
    "Is Java & JavaScript Coolest programming language ?",
    ["Yes", "No"],
    0
  );
  var q2 = new Questions(
    "What is longest running anime ?",
    ["One Piece", "Sazae-san", "Pokemon"],
    1
  );
  var q3 = new Questions(
    "What does best describe the coding ?",
    ["Hard", "Boring", "Lazy", "Fun"],
    3
  );
  //displaying it console

  Questions.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ":" + this.answers[i]);
    }
  };

  // Check the correct answer

  Questions.prototype.checkAnswer = function (userAnswer, callBack) {
    var sc;
    if (userAnswer === this.correct) {
      console.log("Aha Right Answer :) Genius");
      sc = callBack(true);
    } else {
      console.log("Oho Wrong Answer :( , try again ");
      sc = callBack(false);
    }
    this.displayScore(sc);
  };

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  // CLosure (sc)
  var keepScore = score();

  //display score

  Questions.prototype.displayScore = function (sc) {
    console.log("----------------------------------------");
    console.log("Your score is " + sc);
  };
  var questionArray = [q1, q2, q3];

  function nextQuestion() {
    var randomQuestionIndex = Math.floor(Math.random() * questionArray.length);
    questionArray[randomQuestionIndex].displayQuestion();

    var userAnswer = this.prompt("Please Enter Answer ", "exit");

    if (userAnswer !== "exit") {
      questionArray[randomQuestionIndex].checkAnswer(
        parseInt(userAnswer),keepScore
      );
      nextQuestion();
    }
  }
  nextQuestion();
})();
