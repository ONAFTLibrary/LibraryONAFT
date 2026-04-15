import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Patent} from '../patent';
import {Observable} from 'rxjs';
@Component({
    selector: 'app-patent',
    templateUrl: './patent.component.html',
    styleUrls: ['./patent.component.css'],
    providers: [HttpService]
})
export class PatentComponent implements OnInit {
    public patentsObservable: Observable<Patent[]>;

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.patentsObservable = this.http.getPatentes();
        if (window.pageYOffset > document.body.scrollTop) {
            document.getElementById('aside').style.top = '0';
        }
    }

    openNav() {
        document.getElementById('aside').style.width = '250px';
    }

    closeNav() {
        document.getElementById('aside').style.width = '0';
    }

}
