import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Exhibition} from '../../exhibition';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
@Component({
    selector: 'app-exhibition',
    templateUrl: './exhibition.component.html',
    styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

    public exhibitionObservable: Observable<Exhibition[]>;
    constructor(private http: HttpService) {
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {
        this.exhibitionObservable = this.http.getExhibitions();
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

}
