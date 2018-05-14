import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Status } from './../classes/status.enum';
import { Feat } from './../classes/feat';

@Injectable()
export class FeatService {

    private feats = {};
    private subject = new Subject<any>();

    constructor() {
        let firstFeat = new Feat('first-feat'),
            secondFeat = new Feat('second-feat'),
            thirdFeat = new Feat('third-feat'),
            fourthFeat = new Feat('fourth-feat'),
            fifthFeat = new Feat('fifth-feat');

        firstFeat.requirements = thirdFeat.id;

        let featArray = [];
        featArray.push(firstFeat, secondFeat, thirdFeat, fourthFeat, fifthFeat);

        for (let i of featArray) {
            this.feats[i.id] = i;
        }
    }

    public getFeat(id: string): Observable<Feat> {
        return Observable.of(this.feats[id]);
    }

    public getFeats(): Observable<Feat[]> {
        let featArray: Feat[] = [];
        for (let i in this.feats) {
            if (this.feats.hasOwnProperty(i)) {
                // this.evaluateStatus(this.feats[i]);
                featArray.push(this.feats[i]);
            }
        }
        return Observable.of(featArray);
    }

    public updateStatus(): void {
        this.subject.next();
    }

    public evaluateStatus(feat: Feat): Observable<Feat> {
        // console.log('called for '+id);
        // console.log(feat.id);
        if(feat.selected) {
            feat.status = Status.Selected;
            return Observable.of(feat);
        }
        let requirements = feat.requirements.split('&&');
        // console.log(requirements);
        for (let i of requirements) {
            if (i === 'no requirements') {
                feat.status = Status.Available;
                break;
            }
            if (!this.isRequirementMet(i)) {
                feat.status = Status.Unavailable;
                break;
            }
            feat.status = Status.Available;
            /*
            for(let j of this.feats) {
                if(i === j.id && j.selected) {
                    feat.status = Status.Available;
                } else {
                    feat.status = Status.Unavailable;
                }
            }
            */
        }
        return Observable.of(feat);
    }

    private isRequirementMet(requirement: string): boolean {
        // console.log(requirement);
        return this.feats[requirement].selected

        /*
        for (let i in this.feats) {
            if (this.feats.hasOwnProperty(i)) {
                // console.log('here is i');
                // console.log(i);
                let feat = this.feats[i];
                if (requirement === feat.id && feat.selected) {
                    return true;
                }
            }
        }
        return false;
        */
    }
}
