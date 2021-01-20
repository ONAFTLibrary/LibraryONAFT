
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import {CacheService} from './cache.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

    private cache = new Map<string, any>();
    constructor(private cacheService: CacheService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method !== 'GET'  ||
            !this.cacheService.addedToCache(request.url)) {
            return next.handle(request);
        }

        const cachedResponse = this.cache.get(request.url);
        if (cachedResponse) {
            return of(cachedResponse);
        }

        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    this.cache.set(request.url, event);
                }
            })
        );
    }
}
