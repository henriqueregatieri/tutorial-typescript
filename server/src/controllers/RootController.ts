import { Request, Response, NextFunction } from 'express';
import { get, controller, use, requireAuth } from './decorators';

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <div>Logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>Not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route');
  }
}
