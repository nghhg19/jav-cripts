'use strict';

let poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),
};

const getAnswer = function () {
  this.registerNewAnswer = prompt(
    `${this.question}
${this.options.join('\n')}(Write option number)`
  );

  this.registerNewAnswer >= 0 && this.registerNewAnswer <= 3
    ? this.numberOfVotes[this.registerNewAnswer]++
    : alert('Câu trả lời không hợp lệ');

  this.displayResults = function (type) {
    if (type === 'array') {
      console.log(this.numberOfVotes);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.numberOfVotes.join()}`);
    }
  };

  this.displayResults('array');
  this.displayResults('string');

  poll.displayResults.call({ numberOfVotes: [5, 2, 3] }, 'array');
  poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, 'array');
  poll.displayResults.call({ numberOfVotes: [5, 2, 3] }, 'string');
  poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, 'string');
};

const pollAnswer = getAnswer.bind(poll);

document.querySelector('.poll').addEventListener('click', pollAnswer);
