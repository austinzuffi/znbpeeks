import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WhatService {
    private whatUrl = 'http://salmon.whatbox.ca:11720/jtree/';

    constructor(private http: Http) {}

    getWhat(dir?: string): Observable<Response> {
        let whatUrl = this.whatUrl;
        if (dir) {
            whatUrl = this.whatUrl + dir + '/';
        }
        return this.http.get(whatUrl).catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}

