import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    const name = input && input.value;

    if (name) {
      this.model.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <br>
        <button class="set-age">Set random age</button>
        <br>
        <button class="save-model">Save</button>
      </div>
    `;
  }
}
