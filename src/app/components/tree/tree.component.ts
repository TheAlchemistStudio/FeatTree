import { Component, OnInit } from '@angular/core';

import Feat from './../../classes/feat';

import { FeatService } from './../../services/feat.service';

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

  public feats: Feat[];

  constructor(private featService : FeatService) {
    /*
    console.log('called');
    this.subject = new Subject<any>();
    console.log('here');
    this.subject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(value => this.featService.getFeats().subscribe(feats => this.feats = feats));
    console.log('and here');
    */
    // this.feats = this.subject;
  }

  ngOnInit() {
    /*
    (() => {
      Treant(this.tree_structure)
    })();
    */
   // console.log(this.featData);
   // this.featService.getFeats().subscribe(feats => this.featArray = feats);
   // this.feats.pipe(debounceTime(300), distinctUntilChanged(),).subscribe(feats => this.featArray = feats);
   this.featService.getFeats().subscribe(feats => this.feats = feats);
  }

}
