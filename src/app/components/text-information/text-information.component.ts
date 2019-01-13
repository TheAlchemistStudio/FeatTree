import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-information',
  templateUrl: './text-information.component.html',
  styleUrls: ['./text-information.component.scss']
})
export class TextInformationComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
