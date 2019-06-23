let term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let read = require('./read');
let welcome = require('./welcome');
let begin = require('./begin');

let name = welcome();

begin(name);

let choice = [
  '1. Megpróbálom kiszabadítani magam.',
  '2. Levágom a kezem.',
  '3. Visszaalszok.'
];
console.log(choice);
let valasztas = read();
switch (valasztas) {
  case '1':
    console.log('Nagy szerencsédre, meglátod a bilincs kulcsát az éjjeli szekrényen. Kattan a \nbilincs, ahogy mondani szokás, azonban most a jó értelemben.');
    console.log('\n Mi a következő lépésed?');
    choice = [
      '1. Körbenézek a szobában.',
      '2. Kimegyek a folyosóra.',
      '3. Kiugrok az ablakon.'
    ];
    console.log(choice);
    valasztas = read();
    switch (valasztas) {
      case '1':
        console.log('Sajnos semmi használható nincs, kivéve egy plakát amelyen a PHP szó szerepel.');
        break;
      case '2':
        console.log('A folyosón állsz. ');
        break;
      case '3':
        console.log('\x1b[31m' + 'Meghaltál.' + '\x1b[0m' + 'Miért tenne bárki ilyet magával? Sajnos mostmár sohasem tudhatjuk meg.');
        break;
      default:
        console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
        break;
    }
    break;
  case '2':
    break;
  case '3':
    break;
  default:
    console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
    break;
}
// let input = read();
