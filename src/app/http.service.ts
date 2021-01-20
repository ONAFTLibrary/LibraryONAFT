import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CacheService} from './cache.service';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    url = 'https://library.onaft.edu.ua/api';
    public responseCache = new Map();
    constructor(private httpClient: HttpClient, private cacheUrl: CacheService) {
        cacheUrl.addToCache(this.url);
    }
    public getNews(): Observable<any> {
        const headers = new HttpHeaders();
        headers.set('Cache-Control', 'public, max-age=31536000');
        // return this.httpClient.get(this.url + '/news');
        const newsCache = this.responseCache.get(this.url + '/news');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/news', {headers});
        response.subscribe(data => this.responseCache.set(this.url + '/news', data));
        return response;
    }

    public getBooks(): Observable<any> {
        const headers = new HttpHeaders();
        headers.set('Cache-Control', 'public, max-age=31536000');
        //  return this.httpClient.get(this.url + '/books');
        const newsCache = this.responseCache.get(this.url + '/books');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/books', {headers});
        response.subscribe(data => this.responseCache.set(this.url + '/books', data));
        return response;
    }

    public getScientists(): Observable<any>  {
        const headers = new HttpHeaders();
        headers.set('Cache-Control', 'public, max-age=31536000');
       // return this.httpClient.get(this.url + '/scientists');
        const newsCache = this.responseCache.get(this.url + '/scientists');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/scientists', {headers});
        response.subscribe(data => this.responseCache.set(this.url + '/scientists', data));
        return response;
    }

    public getPatentes(): Observable<any>  {
        const headers = new HttpHeaders();
        headers.set('Cache-Control', 'public, max-age=31536000');
        // return this.httpClient.get(this.url + '/patents');
        const newsCache = this.responseCache.get(this.url + '/patents');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url + '/patents', {headers});
        response.subscribe(data => this.responseCache.set(this.url + '/patents', data));
        return response;
    }

    public getExhibitions(): Observable<any>  {
        const headers = new HttpHeaders();
        headers.set('Cache-Control', 'public, max-age=31536000');
        // return this.httpClient.get(this.url + '/virtualexhibition');
        const newsCache = this.responseCache.get(this.url + '/virtualexhibition');
        if (newsCache) {
            return of(newsCache);
        }
        const response = this.httpClient.get<any>(this.url +  '/virtualexhibition', {headers});
        response.subscribe(data => this.responseCache.set(this.url +  '/virtualexhibition', data));
        return response;
    }

    public postMessage(body)  {
        return this.httpClient.post('https://library.onaft.edu.ua/api', body);
    }
}
