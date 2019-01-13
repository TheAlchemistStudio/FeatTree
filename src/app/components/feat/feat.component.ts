import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55

import { Feat } from './../../classes/feat';

import { FeatService } from './../../services/feat.service';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.scss']
})
export class FeatComponent implements OnInit {

  feat : Feat;

  constructor(
    private route : ActivatedRoute,
<<<<<<< HEAD
    private router : Router,
=======
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
    private featService : FeatService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
<<<<<<< HEAD
    this.featService.getFeat(id)
      .subscribe(feat => this.feat = feat, () => this.router.navigate(['/']));
=======
    this.featService.getFeat(id).subscribe(feat => this.feat = feat);
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
  }

}
