let term = require('terminal-kit').terminal;
let readline = require('readline-sync');
let read = require('./read');
let welcome = require('./welcome');
let begin = require('./begin');

const main = () => {
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
          console.log('\n Mi a következő lépésed?');
          choice = [
            '1. Kimegyek a folyosóra.',
            '2. Kiugrok az ablakon.'
          ];
          console.log(choice);
          valasztas = read();
          switch (valasztas) {
            case '1':
              console.log('A folyosón állsz. A szomszéd szoba ajtaján a KAZÉTA szó szerepel.');
              console.log('Mit teszel?');
              choice = [
                '1. Bemegyek a szobába.',
                '2. Elszaladok világgá.'
              ];
              console.log(choice);
              valasztas = read();
              switch (valasztas) {
                case '1':
                  console.log('A szobában az ünneplő emberek annyit kiabálnak: ' + '\x1b[32m' + 'CSAKAZÉTA' + '\x1b[0m');
                  console.log('Gratulálok, sikeresen teljesítetted eme szerény kis kalandjátékot. ');
                  break;
                case '2':
                  console.log('\x1b[31m' + 'A viszontlátásra');
                  break;
                default:
                  console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
                  break;
              }
              break;
            case '2':
              console.log('\x1b[31m' + 'Meghaltál.' + '\x1b[0m' + 'Miért tenne bárki ilyet magával? Sajnos mostmár sohasem tudhatjuk meg.');
              break;
            default:
              console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
              break;
          }
          break;
        case '2':
          console.log('A folyosón állsz. A szomszéd szoba ajtaján a KAZÉTA szó szerepel.');
          console.log('Mit teszel?');
          choice = [
            '1. Bemegyek a szobába.',
            '2. Elszaladok világgá.'
          ];
          console.log(choice);
          valasztas = read();
          switch (valasztas) {
            case '1':
              console.log('A szobában az ünneplő emberek annyit kiabálnak: ' + '\x1b[32m' + 'CSAKAZÉTA' + '\x1b[0m');
              console.log('Gratulálok, sikeresen teljesítetted eme szerény kis kalandjátékot. ');
              break;
            case '2':
              console.log('\x1b[31m' + 'A viszontlátásra');
              break;
            default:
              console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
              break;
          }
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
      console.log('Melyik kezedet szeretnéd levágni?');
      choice = [
        '1. jobb (bilincselt)',
        '2. bal'
      ];
      console.log(choice);
      valasztas = read();
      switch (valasztas) {
        case '1':
          console.log('Nem tudod levágni a jobb kezed, mert a bal már 7 órája le volt vágva, és közben elvérzel.');
          console.log('\x1b[31m' + 'Meghaltál.' + '\x1b[0m' + ' Sajnos annyi vért veszítettél, hogy nem bírtad tovább.');
          break;
        case '2':
          console.log('A bal kezed már legalább 7 órája le van vágva, és vérzik.');
          console.log('\x1b[31m' + 'Meghaltál.' + '\x1b[0m' + ' Sajnos annyi vért veszítettél, hogy nem bírtad tovább.');
          break;
        default: console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
          break;
      }
      break;
    case '3':
      main();
      break;
    default:
      console.log('\x1b[31m' + 'Csalni szerettél volna a játékban, ezért Máté sebészeset játszott veled. Konkrétan kivágásra kerültél.' + '\x1b[0m');
      break;
  }
};

main();
