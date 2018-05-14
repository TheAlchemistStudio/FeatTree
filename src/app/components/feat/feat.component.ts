import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private location : Location,
    private featService : FeatService
  ) {

  }

  ngOnInit() {
    this.getFeat();
  }

  private getFeat() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.featService.getFeat(id).subscribe(feat => this.feat = feat);
  }

  private goBack() : void {
    this.location.back();
  }

}
