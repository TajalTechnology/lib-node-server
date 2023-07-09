import { FrameWorks } from './types/frameworks.types';
import { Express } from './express/express';
import { IRouter } from './types/irouter.interface';
import { ServerFrameWorkWrapper } from './types/server-framework-wrapper.abstract';
import http from 'http';
export class NodeServer {
    private static instance?: NodeServer;

    server: ServerFrameWorkWrapper;
    http: any;

    private constructor(frameWork: FrameWorks) {
        switch (frameWork) {
            case FrameWorks.EXPRESS:
                this.server = new Express();
            default:
                this.server = new Express();
        }

        this.http = http.createServer(this.server.app);
    }

    public static server(frameWork?: FrameWorks): NodeServer | never {
        if (NodeServer.instance) {
            return NodeServer.instance;
        } else if (frameWork) {
            NodeServer.instance = new NodeServer(frameWork);
            return NodeServer.instance;
        } else throw new Error('Cannot instantiate NodeServer without `FrameWorks` choice!');
    }

    public getHTTPServer() {
        return this.http;
    }

    public listen(port: number): void {
        this.server.listen(port);
    }

    public router(): IRouter {
        return this.server.router();
    }

    public use(urlOrRouterOrCallback: any, ...callbacks: any) {
        this.server.use(urlOrRouterOrCallback, callbacks);
    }
}
