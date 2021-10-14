import {Animal} from './Animal.js';

let cat = new Animal('cat',4);

cat.legs = 3;

cat.makeNoice('Meow');
console.log(cat.legs);
console.log(Animal.return10());
console.log(cat.metaData);