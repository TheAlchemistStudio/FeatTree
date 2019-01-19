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
          feats.forEach(feat => {
            this.feats.push(new Feat(feat.id).set(feat));
          });
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
