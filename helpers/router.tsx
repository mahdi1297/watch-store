/**
 * This class recieves the useRouter of next/router file
 * and do url stuff on it
 * 
 * @returns modified url 
 */
import { NextRouter } from "next/router";

export class Router {
    constructor(private _router: NextRouter) { }

    getParams() {
        return this._router;
    }

    getQueries() {
        return this._router.query;
    }

    addQueries(key: string, value: any) {
        this._router.push({
            query: { ...this._router.query, [key]: value },
        });
    }

    addSpecificQuery(query: any) {
        let item;

        for (item in query) {
            this._router.push({
                query: { ...this._router.query, [item]: query[item] },
            });
        }
    }
}