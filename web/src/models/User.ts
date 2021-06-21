import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  // This is useful because one could now implement thing such as
  /*
  static buildLocalUser(attrs) {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new LOCALSYNC()
    )
  }
  */

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 200);
    this.set({ age });
  }
}
