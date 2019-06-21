let term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let read = require('./read');
let welcome = require('./welcome');
let begin = require('./begin');

let name = welcome();

begin(name);

let items = [
  'a. Megpróbálom kiszabadítani magam.',
  'b. Levágom a kezem.',
  'c. Visszaalszok.'
];

term.singleColumnMenu(items, function (error, response) {
  term('\n').eraseLineAfter.green(
    '#%s válasz: %s (%s,%s)\n',
    response.selectedIndex,
    response.selectedText,
    response.x,
    response.y
  );
  input = readline.keyIn();
  if (input === 'q') {
    process.exit();
  }
  switch ('%s') {
    case 1: '0';
      console.log('kuka');
      break;
  }
});
// let input = read();
