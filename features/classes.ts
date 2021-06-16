class Vehicle2 {
  constructor(public color: string) {} // Assigns to public this.color

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }

  private honk2(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle2 {
  // Assigns wheels to public this.wheels
  constructor(public wheels: number, color: string) {
    super(color); // Calls Vehicle2 constructor
  }

  // It can override original class method
  public drive(): void {
    console.log('vroom');
    this.honk(); // Allowed: protected
    //this.honk2(); // Not allowed: private
  }
}

const vehicle = new Car(3, 'orange');
vehicle.drive();
//vehicle.honk(); // Not allowed: protected
//vehicle.honk2(); // Not allowed: private

console.log(vehicle.color, vehicle.wheels);
