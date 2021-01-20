import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Books} from '../books';
import * as $ from 'jquery';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    public booksObservable: Observable<Books[]>;
    constructor(private http: HttpService) {
    }
    ngOnInit() {
        this.booksObservable = this.http.getBooks();
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
