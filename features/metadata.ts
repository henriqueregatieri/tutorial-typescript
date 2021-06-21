import 'reflect-metadata';

const plane = {
  color: 'blue',
};

// Kinda invisible property, "plane.note" won't work
Reflect.defineMetadata('note', 'hi there', plane);

// Way to get it
Reflect.getMetadata('note', plane);

// Adding metadata to property
Reflect.defineMetadata('note', 'hi', plane, 'color');

// Then
Reflect.getMetadata('note', plane, 'color');

//////////////////////////////////////////////////////////

class Plane {
  color: string = 'blue';

  @markFunction
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

Reflect.getMetadata('secret', Plane.prototype, 'fly'); // 123

//////////////////////////////////////////////////////////

@printMetadata
class Plane2 {
  color: string = 'blue';

  @markFunction2('HI THERE')
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction2(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

Reflect.getMetadata('secret', Plane2.prototype, 'fly'); // HI THERE

// Applying to a class
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    // first, equal to "fly"
    Reflect.getMetadata('secret', target.prototype, key); // HI THERE
  }
}
