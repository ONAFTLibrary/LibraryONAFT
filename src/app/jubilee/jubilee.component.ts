import {Component, OnInit} from '@angular/core';
import {Scientists} from '../scientists';
import {HttpService} from '../http.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-jubilee',
    templateUrl: './jubilee.component.html',
    styleUrls: ['./jubilee.component.css']
})
export class JubileeComponent implements OnInit {
    img;
    name;
    birth_day;
    death_day;
    short_desc;
    bio;
    works;
    public encyclopediaObservable: Observable<Scientists[]>;
    constructor(private http: HttpService, private router: Router) {
    }

    ngOnInit() {
        this.encyclopediaObservable = this.http.getScientists();
    }

    viewBio(person) {
        this.router.navigate(['/bio'], {
            queryParams: {
                'img': person.image,
                'name': person.name,
                'birth_day': person.birthday,
                'death_day': person.deathday,
                'short_desc': person.short_description,
                'bio': person.bio,
                'works': person.works
            }
        });
    }

    searchDate(date) {
        const TODAY = new Date();
        const NEW_DATE = TODAY.getFullYear() - Number(date);
        return NEW_DATE;
    }

    addSubstr(text) {
        if (text.length >= 144) {
            text = text.substring(0, 144);
            const lastIndex = text.lastIndexOf(' ');       // позиция последнего пробела
            text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
        }
        return text;
    }

}
