/**
 * This class recieves the useRouter of next/router file
 * and do url stuff on it
 * 
 * @returns modified url 
 */

export class Router {
    constructor(private _router: any) { }

    getParams() {
        const router = this._router;
        console.log(router);
    }

    getQueries() {
        return this._router.query;
    }
}