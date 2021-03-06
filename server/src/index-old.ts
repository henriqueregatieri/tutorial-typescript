import cookieSession from 'cookie-session';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
