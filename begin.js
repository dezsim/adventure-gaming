const begin = (name) => {
  let readline = require('readline-sync');
  console.log('\x1b[33m' + 'Bemutatjuk legújabb kalandjátékunkat, avagy az 1990-es években játszódó, KAZÉTA nevű kalandjátékot.');
  console.log('Minden döntésed hatással van a játékmenetre, kérlek, jól gondold át mi a választásod!.');
  console.log('Amennyiben készen állsz nyomj meg egy gombot, és Kezdődjön a Kal&&!' + '\x1b[0m');
  while (true) {
    let key = readline.keyIn();
    if (key !== null) {
      break;
    }
  }
  console.log('');
  console.log('Egy különös hotelszobában ébredsz fel, Péntek hajnalban. Nagy hangzavar szűrődik át a szomszédos szobából, valószínűleg valami egyetemisták lehetnek.');
  console.log('');

  console.log('Észreveszed, hogy a bal kezed az ágyhoz van bilincselve, valamit a padlón piros foltokat látsz, valószínűsíthető vérfoltokat.');
  console.log('\n Mit teszel?');
};

module.exports = begin;
