export interface IRouter {
    use(url: string, ...callbacks: any): void;
    post(url: string, ...callbacks: any): void;
    put(url: string, ...callbacks: any): void;
    patch(url: string, ...callbacks: any): void;
    delete(url: string, ...callbacks: any): void;
    get(url: string, ...callbacks: any): void;
}
