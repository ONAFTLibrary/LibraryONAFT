import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {HttpService} from '../http.service';
import {News} from '../news';
import {FormControl} from '@angular/forms';
import {jsonpCallbackContext} from '@angular/common/http/src/module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public newsObservable: Observable<News[]> ;
    email = new FormControl('');
    username = new FormControl('');
    text = new FormControl('');

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.newsObservable = this.http.getNews();
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up').delay(200).fadeIn(500);
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down').delay(200).fadeIn(500);
        });

    }

    sendEmail() {
        const message = {'email': '',
            'username': '',
            'text': ''};
        message.email = this.email.value;
        message.username = this.username.value;
        message.text = this.text.value;
        // alert(JSON.stringify(message));
        this.http.postMessage(JSON.stringify(message));
    }


}
