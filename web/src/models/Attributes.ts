export class Attributes<T> {
  constructor(private data: T) {}

  // Using arrow functions, "this" will always refer to Attributes,
  // instead of other classes calling it
  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  // K as key of object as type (strings can be class)
  // T[K] as the type of the value for that key
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }
}
