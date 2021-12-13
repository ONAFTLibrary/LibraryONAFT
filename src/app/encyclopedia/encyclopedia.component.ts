import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Scientists} from '../scientists';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-encyclopedia',
    templateUrl: './encyclopedia.component.html',
    styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {
    public encyclopediaObservable: Observable<Scientists[]>;
    constructor(private http: HttpService, private router: Router) {
    }

  // tslint:disable-next-line:max-line-length
    letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'І', 'Ї', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я'];
    scientists: Scientists[] = [];

    ngOnInit() {
        this.encyclopediaObservable = this.http.getScientists();
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

    addSubstr(text) {
        if (text.length >= 144) {
            text = text.substring(0, 144);
            const lastIndex = text.lastIndexOf(' ');       // позиция последнего пробела
            text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
        }
        return text;
    }

    openNav() {
        document.getElementById('aside').style.width = '50px';
    }

    closeNav() {
        document.getElementById('aside').style.width = '0';
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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


}
