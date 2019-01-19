import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import { Feat } from './../../classes/feat';

import { FeatCardDetailsComponent } from '../feat-card-details/feat-card-details.component';

@Component({
  selector: 'app-feat-card',
  templateUrl: './feat-card.component.html',
  styleUrls: ['./feat-card.component.scss']
})
export class FeatCardComponent implements OnInit {

  @Input() feat: Feat;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  select(): void {
    this.feat.select();
  }

  details(): void {
    this.dialog.open(FeatCardDetailsComponent, {
      width: '60%',
      data: this.feat
    });
  }

}