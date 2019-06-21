const read = () => {
  let readline = require('readline-sync');
  let input = readline.question();
  return input;
};

module.exports = read;
