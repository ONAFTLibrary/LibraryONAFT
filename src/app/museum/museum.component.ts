import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Museum} from '../museum';
import * as $ from 'jquery';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-museum',
    templateUrl: './museum.component.html',
    styleUrls: ['./museum.component.css']
})
export class MuseumComponent implements OnInit {
    order: string = 'museum.title';
    public museumObservable: Observable<Museum[]>;
    constructor(private http: HttpService) {
    }
    ngOnInit() {
        this.museumObservable = this.http.getMuseum();
        $(function () {
            $(window).scroll(function () {
                const winTop = $(window).scrollTop();
                if (winTop >= 1000) {
                    $('.arrow-up').css({'opacity': '1', 'position': 'fixed'});
                } else {
                    $('.arrow-up').css({'opacity': '0'});
                }
            });
        });
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
