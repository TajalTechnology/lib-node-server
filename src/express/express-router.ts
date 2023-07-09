import { IRouter } from '../types/irouter.interface';
import { RouterWrapper } from '../types/router.abstract';
import { Router } from 'express';
export class ExpressRouter extends RouterWrapper implements IRouter {
    constructor() {
        super();
        this.router = Router();
    }
    use(url: string, ...callbacks: any): void {
        this.router.use(url, callbacks);
    }

    post(url: string, ...callbacks: any): void {
        this.router.post(url, callbacks);
    }

    put(url: string, ...callbacks: any): void {
        this.router.put(url, callbacks);
    }

    patch(url: string, ...callbacks: any): void {
        this.router.patch(url, callbacks);
    }

    delete(url: string, ...callbacks: any): void {
        this.router.delete(url, callbacks);
    }

    get(url: string, ...callbacks: any): void {
        this.router.get(url, callbacks);
    }
}
