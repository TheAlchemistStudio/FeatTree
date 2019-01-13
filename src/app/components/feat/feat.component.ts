import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router : Router,
    private featService : FeatService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.featService.getFeat(id)
      .subscribe(feat => this.feat = feat, () => this.router.navigate(['/']));
  }

}
