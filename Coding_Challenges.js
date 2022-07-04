'use strict';

// Coding_Challenge-1
const poll = {
  question: "What is your favourite programming language?",
  options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
  answers: new Array(4).fill(0),

  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

const registerNewAnswer = function () {
  // Get answer
  let answer = Number(
    prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`),
  )
  console.log(answer);

  typeof answer === 'number' &&
    answer > 0 &&
    answer <= this.answers.length &&
    this.answers[answer - 1]++;

  this.displayResults();
  this.displayResults('string');
}

document.querySelector('.poll').addEventListener('click', registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Coding challenge-2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
  });
})();