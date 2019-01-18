import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';

import { Feat } from './../../classes/feat';

import { FeatCardComponent } from './../feat-card/feat-card.component';

import { FeatService } from './../../services/feat.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  private feats: Feat[] = [];

  // private holder = document.getElementById("holder");
  @ViewChild("holder", { read: ViewContainerRef }) private holder;
  componentRef: ComponentRef<FeatCardComponent>;

  constructor(
    private featService: FeatService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.featService.getFeats()
      .subscribe(
        feats => {
          this.feats = feats;
        }, (err) => {
          console.error(err);
        }, () => {
          this.feats.forEach(feat => {
            const factory: ComponentFactory<FeatCardComponent> = this.resolver.resolveComponentFactory(FeatCardComponent);
            this.componentRef = this.holder.createComponent(factory);
            this.componentRef.instance.feat = feat;
          });
        }
      );

  }

}
