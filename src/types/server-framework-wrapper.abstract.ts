import { IRouter } from './irouter.interface';

export abstract class ServerFrameWorkWrapper {
    app: any;
    constructor(app: any) {
        this.app = app;
    }

    public listen(port: number | string): void {
        this.app.listen(port);
    }

    public abstract router(): IRouter;

    public abstract use(router: IRouter): void;
    public abstract use(...callbacks: any): void;
    public abstract use(url: string, ...callbacks: any): void;
}
