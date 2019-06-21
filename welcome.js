const welcome = () => {
  console.log('Üdvözöllek első kalandjátékomban.');
  console.log('Kérlek add meg a játékos neved!');
  let readline = require('readline-sync');
  let str = readline.question();
  console.log('Remek időtöltést kívánok, Kedves ' + '\x1b[31m' + str + '!');
  return str;
};

module.exports = welcome;
