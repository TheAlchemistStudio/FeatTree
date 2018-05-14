import { Component, OnInit } from '@angular/core';

import Feat from './../../classes/feat';

import { FeatService } from './../../services/feat.service';
import { Subscription } from 'rxjs';

declare var Treant: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  /*
  private tree_structure: any = {
    chart: {
      container: "#tree-simple",
      rootOrientation: "SOUTH",
      hideRootNode: true,
      connectors: {
        type: "step"
      }
    },
    nodeStructure: {
      text: {
        name: "Parent node"
      },
      collapsable: true,
      children: [
        {
          text: {
            name: "First child"
          },
          collapsable: true,
          children: [
            {
              text: {
                name: "first grandchild",
                title: "some title",
                desc: "some desc",
                contact: {
                  val: "open",
                  href: "#",
                  target: "_self"
                }
              }
            },
            {
              text: {
                name: "second grandchild"
              }
            }
          ]
        },
        {
          text: {
            name: "child 2",
            title: "some title",
            desc: "some desc",
            contact: {
              val: "open",
              href: "#",
              target: "_self"
            }
          },
          collapsable: true,
          collapsed: true,
          children: [
            {
              text: {
                name: "another grandchild"
              }
            },
            {
              text: {
                name: "yet another grandchild"
              }
            }
          ]
        }
      ]
    }
  };
  */

  /*
  feats : Subject<Feat[]> = new Subject<Feat[]>();
  featArray : Feat[] = [];
  */

  // public feats: Feat[] = [];
  
  public feats: Feat[] = [];

  constructor(private featService: FeatService) {
    // console.log('tree constructor called');
  }

  ngOnInit() {
    // console.log('tree init called');
    // this.featService.getFeats().subscribe((feats: Feat[]) => this.feats = feats);
    this.featService.getFeats().subscribe(feats => this.feats = this.objectToArray(feats));
    this.featService.ping();
  }

  objectToArray(obj: any): Feat[] {
    // console.log('tree objectToArray called');
    let featArray: Feat[] = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            featArray.push(obj[i]);
        }
    }
    return featArray;
  }

}
