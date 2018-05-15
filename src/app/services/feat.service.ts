import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

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
    };

    private subject = new BehaviorSubject<any>(this.feats);
    private counter = 0;

    constructor() {
        // console.log('feat service constructor called');
        this.feats.thirdFeat.requirements = this.feats.firstFeat.id;
    }

    private pushSubject(): void {
        this.evaluateAllStatus();
        this.subject.next(this.feats);
    }

    public select(feat: Feat): void {
        // console.log('feat service select called');
        this.feats[feat.id].selected = !this.feats[feat.id].selected;
        this.pushSubject();
    }

    public testMethod(): void {
        // console.log('feat service testMethod called');
        const feat = new Feat('testFeat' + this.counter);
        this.counter = this.counter + 1;
        this.feats[feat.id] = feat;
        this.pushSubject();
    }

    public getFeat(id: string): Observable<Feat> {
        // console.log('feat service getFeat called');
        return Observable.of(this.feats[id]);
    }

    public getFeats(): Observable<any> {
        // console.log('feat service getSubjectFeats called');
        this.evaluateAllStatus();
        return this.subject.asObservable();
    }

    private evaluateAllStatus(): void {
        for (const i in this.feats) {
            if (this.feats.hasOwnProperty(i)) {
                this.evaluateStatus(this.feats[i]);
            }
        }
    }

    private evaluateStatus(feat: Feat): void {
        // console.log('feat service evaluateStatus called');
        if (feat.selected) {
            feat.status = Status.Selected;
            return;
        }
        const requirements = feat.requirements.split('&&');
        for (const i of requirements) {
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
        return this.feats[requirement].selected;
    }
}
