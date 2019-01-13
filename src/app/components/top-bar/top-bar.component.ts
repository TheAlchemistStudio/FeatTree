import { Component, OnInit } from '@angular/core';

import { FeatService } from '../../services/feat.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    private featService: FeatService
  ) {}

  ngOnInit() {}

<<<<<<< HEAD
  private test(): void {
    // console.log('top bar testMethod called');
    this.featService.test();
=======
  private addNewFeat(): void {
    // console.log('top bar testMethod called');
    // this.featService.addNewFeat();
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
  }

}
