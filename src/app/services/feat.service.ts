import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Feat } from './../classes/feat';
import { ServerResponse } from '../classes/server-response';

@Injectable()
export class FeatService {

    private server = 'http://127.0.0.1:8000';

    constructor(private http: HttpClient) {}

    public getFeat(id: string): Observable<Feat> {
        return this.http.get<Feat>(`${this.server}/feats/${id}/`);
    }

    public getFeats(): Observable<Feat[]> {
        return this.http.get<ServerResponse<Feat[]>>(`${this.server}/feats/`)
            .pipe(
                map(feats => feats.results)
            );
    }

    public test(): void {
        console.log('test still working');
    }

}
