// Function that may have params & doesn't return anything
type Callback = () => void;

export class Eventing {
  // Object key type
  events: { [key: string]: Callback[] } = {};

  // Using arrow functions, "this" will always refer to Eventing,
  // instead of other classes calling it
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
