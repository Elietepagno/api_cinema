import { Router } from 'express';
import { FilmeController } from './filme.controller';

export class FilmeRoutes {
  private router: Router = Router();

  private controller: FilmeController;

  constructor() {
    this.controller = new FilmeController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    // this.router.get('/info', this.controller.info);
  }

  public routes(): Router {
    return this.router;
  }
}