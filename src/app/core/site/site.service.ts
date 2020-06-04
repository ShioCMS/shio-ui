import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SiteData {
    id: string;
    name: string;
    description: string;
    date: Date;
}

@Injectable()
export class Site {
    constructor(private http: HttpClient) { }
    query(): Observable<SiteData[]> {
        return this.http.get<SiteData[]>(`http://localhost:2710/api/v2/site`);
    }
    get(id: string): Observable<SiteData> {
        return this.http.get<SiteData>(`http://localhost:2710/api/v2/site/${id}`);
    }
}