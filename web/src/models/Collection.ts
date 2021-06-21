import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

// <T, K> such as <User, UserProps>
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  // deserialize is the function to run on each returning value from GET
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  //Here we can't use "on = this.events.on" because it would run before statements above
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });
  }
}
