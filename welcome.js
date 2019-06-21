const welcome = (str) => {
  console.log('Üdvözöllek első kalandjátékomban.');
  console.log('Kérlek add meg a játékos neved!');
  let readline = require('readline-sync');
  str = readline.question();
  console.log('Remek időtöltést kívánok, Kedves ' + str + '!');
};

module.exports = welcome;
