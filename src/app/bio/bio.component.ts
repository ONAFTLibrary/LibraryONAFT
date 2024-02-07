// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';

// @Component({
//   selector: 'app-bio',
//   templateUrl: './bio.component.html',
//   styleUrls: ['./bio.component.css']
// })
// export class BioComponent implements OnInit {
//     bio_info;
//     img;
//     name;
//     birth_day;
//     death_day;
//     short_desc;
//     bio;
//     works;
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit() {
//       this.bio_info = this.route
//           .queryParams
//           .subscribe(params => {
//               this.img = params['img'];
//               this.name = params['name'];
//               this.birth_day = params['birth_day'];
//               this.death_day = params['death_day'];
//               this.short_desc = params['short_desc'];
//               this.bio = params['bio'];
//               this.works = params['works'];
//           });
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
    bio_info;
    img;
    name;
    birth_day;
    death_day;
    short_desc;
    bio;
    works;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.img = params.get('img');
            this.name = params.get('name');
            this.birth_day = params.get('birth_day');
            this.death_day = params.get('death_day');
            this.short_desc = params.get('short_desc');
            this.bio = params.get('bio');
            this.works = params.get('works');
        });
    }
}
