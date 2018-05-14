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
    // console.log('feat-card constructor called');
  }

  ngOnInit() {
    // console.log('feat-card init called');
  }

  select() : void {
    // console.log('feat-card select called');
    this.feat.selected = !this.feat.selected;
    // this.featService.select(this.feat);
    // this.featService.ping();
  }

  testMethod(): void {
    // console.log('feat-card testMethod called');
    this.featService.testMethod();
  }

}
