import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Numbers
const numbersCollection = new NumbersCollection([40, 3, -5, 0]);
console.log(numbersCollection);

numbersCollection.sort();
console.log(numbersCollection);

// Characters
const charactersCollection = new CharactersCollection('X6aaYb');
console.log(charactersCollection);

charactersCollection.sort();
console.log(charactersCollection);

// Linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();

linkedList.sort();
linkedList.print();
