import { User } from './models/User';

const user = new User({ name: 'Henrique', age: 20 });

user.on('change', () => {
  console.log('Change # 1');
});

user.trigger('change');
