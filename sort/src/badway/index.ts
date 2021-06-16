import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([40, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
console.log(numbersCollection);
sorter.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('X6aaYb');
const sorter2 = new Sorter(charactersCollection);
console.log(charactersCollection);
sorter2.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
