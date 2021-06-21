// Decorators are called immediately when the class is read
// to define a prototype for a class

// We can only work with prototype methods,
// not properties created when instancing

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Ops, boat was sunk')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor); // [ function: Boat ]
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index); // 1, "pilot"   2, "pilot"
}

function testDecorator(target: any, key: string) {
  console.log(target, key); // Boat, "color"
}

// Error catcher
function logError(errorMessage: string) {
  // PropertyDescriptor: { writable, configurable, enumerable, value }
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
// == logError(Boat.prototype, 'pilot');
