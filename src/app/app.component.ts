import {Component, OnInit} from '@angular/core';
import {enableProdMode} from '@angular/core';
import * as $ from 'jquery';


enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LibraryONAFT';
  ngOnInit(): void {
      $(function() {
          $(window).scroll(function() {
              const winTop = $(window).scrollTop();
              if (winTop >= 450) {
                  $('header').addClass('sticky-header');
              } else {
                  $('header').removeClass('sticky-header');
              }
          });
      });
  }

}
