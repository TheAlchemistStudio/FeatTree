import { Component, OnInit } from '@angular/core';

import { Feat } from './../../classes/feat';

import { FeatService } from './../../services/feat.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  private feats: Feat[] = [];

  constructor(
    private featService: FeatService
  ) {}

  ngOnInit() {
    this.featService.getFeats().subscribe(feats => this.feats = this.featObjectToArray(feats));
  }

  private featObjectToArray(featObject: any): Feat[] {
    const featArray: Feat[] = [];
    for (const property in featObject) {
        if (featObject.hasOwnProperty(property)) {
            featArray.push(featObject[property]);
        }
    }
    return featArray;
  }

}
