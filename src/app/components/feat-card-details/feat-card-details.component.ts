import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feat } from '../../classes/feat';
import { FeatService } from '../../services/feat.service';

@Component({
  selector: 'app-feat-card-details',
  templateUrl: './feat-card-details.component.html',
  styleUrls: ['./feat-card-details.component.scss']
})
export class FeatCardDetailsComponent implements OnInit {

  private feat: Feat;

  constructor(
    private featService: FeatService, 
    private dialogRef: MatDialogRef<FeatCardDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: Feat
  ) {}

  ngOnInit() {
    this.feat = this.data;
  }

  select(): void {
    this.featService.select(this.feat);
  }

  close(): void {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
