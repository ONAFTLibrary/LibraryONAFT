import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resource;
    languages = [
        { code: 'ua', label: 'UA' },
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' }
    ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {

  }

}
