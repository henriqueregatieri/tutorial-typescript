var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle2 = /** @class */ (function () {
    function Vehicle2() {
    }
    Vehicle2.prototype.drive = function () {
        console.log('chugga chugga');
    };
    Vehicle2.prototype.honk = function () {
        console.log('beep');
    };
    Vehicle2.prototype.honk2 = function () {
        console.log('beep beep');
    };
    return Vehicle2;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // It can override original class method
    Car.prototype.drive = function () {
        console.log('vroom');
        this.honk();
        this.honk2(); // Not allowed
    };
    return Car;
}(Vehicle2));
var vehicle = new Car();
vehicle.drive();
vehicle.honk(); // Not allowed
vehicle.honk2(); // Not allowed
