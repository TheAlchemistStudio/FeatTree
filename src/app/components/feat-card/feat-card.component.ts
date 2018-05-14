import { Component, OnInit, Input } from '@angular/core';

import { Feat } from './../../classes/feat';

import { FeatService } from './../../services/feat.service';

@Component({
  selector: 'app-feat-card',
  templateUrl: './feat-card.component.html',
  styleUrls: ['./feat-card.component.scss']
})
export class FeatCardComponent implements OnInit {

  @Input('feat') feat : Feat;

  constructor(private featService : FeatService) {

  }

  ngOnInit() {
    // console.log(this.feat.id);
    this.feat = this.featService.evaluateStatus(this.feat);
  }

  select() : void {
    // console.log('this click');
    // this.feat.selected = !this.feat.selected;
    this.featService.updateStatus();
    // this.featService.evaluateStatus(this.feat);
  }

}
