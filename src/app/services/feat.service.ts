import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Status } from './../classes/status.enum';
import { Feat } from './../classes/feat';

@Injectable()
export class FeatService {

    private feats = {
        firstFeat: new Feat('firstFeat'),
        secondFeat: new Feat('secondFeat'),
        thirdFeat: new Feat('thirdFeat'),
        fourthFeat: new Feat('fourthFeat'),
        fifthFeat: new Feat('fifthFeat')
    }
    private subject = new Subject<any>();

    constructor() {
        // console.log('feat service constructor called');
        this.feats.thirdFeat.requirements = this.feats.firstFeat.id;
    }

    public ping(): void {
        this.subject.next(this.feats);
    }

    private counter = 0;
    public testMethod(): void {
        // console.log('feat service testMethod called');
        let feat = new Feat('test-feat'+this.counter);
        this.counter = this.counter + 1;
        this.feats[feat.id] = feat;
        this.subject.next(this.feats);
    }

    public getFeat(id: string): Observable<Feat> {
        // console.log('feat service getFeat called');
        return Observable.of(this.feats[id]);
    }

    public getFeats(): Observable<any> {
        // console.log('feat service getSubjectFeats called');
        for (let i in this.feats) {
            if (this.feats.hasOwnProperty(i)) {
                // console.log(this.feats[i]);
                this.evaluateStatus(this.feats[i]);
            }
        }
        return this.subject.asObservable();
    }

    public evaluateStatus(feat: Feat): void {
        // console.log('feat service evaluateStatus called');
        if(feat.selected) {
            feat.status = Status.Selected;
            return;
        }
        let requirements = feat.requirements.split('&&');
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
        }
    }

    private isRequirementMet(requirement: string): boolean {
        // console.log('feat service isRequirementMet called');
        return this.feats[requirement].selected
    }
}
