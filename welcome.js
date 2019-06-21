const welcome = () => {
  console.log('Üdvözöllek első kalandjátékomban.');
  console.log('Kérlek add meg a játékos neved!');
  let readline = require('readline-sync');
  let str = readline.question();
  console.log('');
  console.log('Remek időtöltést kívánok, Kedves ' + '\x1b[31m' + str + '!' + '\x1b[0m');
  console.log('');
  return str;
};

module.exports = welcome;
