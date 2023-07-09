import express, { Application, Router } from 'express';
import { IRouter } from '../types/irouter.interface';
import { ServerFrameWorkWrapper } from '../types/server-framework-wrapper.abstract';
import { ExpressRouter } from './express-router';

export class Express extends ServerFrameWorkWrapper {
    constructor() {
        const expressApp = express();
        super(expressApp);
    }

    public listen(port: number | string) {
        this.app
            .listen(port, () => {
                console.log(`Server is running ${port}`);
            })
            .on('error', (error: any) => {
                console.log('Error happened: ', error.message);
            });
    }

    public router(): IRouter {
        return new ExpressRouter();
    }

    public use(router: IRouter): void;
    public use(...callbacks: any): void;
    public use(url: string, ...callbacks: any): void;
    public use(urlOrRouterOrCallback: any, ...callbacks: any[]): void {
        if (typeof urlOrRouterOrCallback === 'string') {
            this.app.use(urlOrRouterOrCallback, callbacks);
        } else if (typeof urlOrRouterOrCallback.getRouter !== 'undefined') {
            this.app.use(urlOrRouterOrCallback.getRouter());
        } else if (typeof urlOrRouterOrCallback === 'function') {
            this.app.use(urlOrRouterOrCallback);
        } else throw new Error('First argument must be either a string or IRouter type.');
    }
}
