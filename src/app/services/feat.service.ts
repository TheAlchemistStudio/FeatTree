import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Feat } from './../classes/feat';

@Injectable()
export class FeatService {

<<<<<<< HEAD
    private server = 'http://127.0.0.1:8000';

    constructor(private http: HttpClient) {}

    public getFeat(id: string): Observable<Feat> {
        return this.http.get<Feat>(`${this.server}/feats/${id}/`);
    }

    public getFeats(): Observable<any> {
        return this.http.get<any>(`${this.server}/feats/`)
            .pipe(
                map(feats => feats.results)
            );
=======
    public feats = {
        combatExpertise: new Feat('combatExpertise'),
        improvedTrip: new Feat('improvedTrip'),
        greaterTrip: new Feat('greaterTrip'),
        combatReflexes: new Feat('combatReflexes'),
        bodyguard: new Feat('bodyguard'),
        powerAttack: new Feat('powerAttack'),
        cleave: new Feat('cleave')
    };

    private subject = new BehaviorSubject<any>(this.feats);

    constructor() {
        // console.log('feat service constructor called');
        this.feats.combatExpertise.set({
            title: 'Combat Expertise',
            description: 'You can increase your defense at the expense of your accuracy.',
            prerequisites: 'Int 13',
            benefit: 'You can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by -1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.',
            type: ['Combat']
        });
        this.feats.improvedTrip.set({
            title: 'Improved Trip',
            description: 'You are skilled at sending your opponents to the ground',
            prerequisites: 'Int 13, Combat Expertise',
            benefit: 'You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you.',
            normal: 'You provoke an attack of opportunity when performing a trip combat maneuver',
            type: ['Combat'],
            requirements: `this.feats['combatExpertise'].selected`
        });
        this.feats.greaterTrip.set({
            title: 'Greater Trip',
            description: 'You can make free attacks on foes that you knock down',
            prerequisites: 'Combat Expertise, Improved Trip, base attack bonus +6, Int 13',
            benefit: 'You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity.',
            normal: 'Creatures do not provoke attacks of opportunity from being tripped.',
            type: ['Combat'],
            requirements: `this.feats['combatExpertise'].selected && this.feats['improvedTrip'].selected`
        });
        this.feats.combatReflexes.set({
            title: 'Combat Reflexes',
            description: 'You can make additional attacks of opportunity',
            benefit: 'You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.',
            normal: `A character without this feat can make only one attack of opportunity per round and can't make attacks of opportunity while flat-footed`,
            special: 'The Combat Reflexes feat does not allow a rogue to use his/her opportunist ability more than once per round',
            type: ['Combat']
        });
        this.feats.bodyguard.set({
            title: 'Bodyguard',
            description: 'Your swift strikes ward off enemies attacking nearby allies',
            prerequisites: 'Combat Reflexes',
            benefit: `When an adjacent ally is attacked, you may use an attack of opportunity to attempt the aid another action to improve your ally's AC. You may not use the aid another action to improve your ally's attack roll with this attack.`,
            normal: 'Aid another is a standard action',
            type: ['Combat'],
            requirements: `this.feats['combatReflexes'].selected`
        });
        this.feats.powerAttack.set({
            title: 'Power Attack',
            description: 'You can make exceptionally deadly melee attacks by sacrificing accuracy for strength',
            prerequisites: 'Str 13, base attack bonus +1',
            benefit: 'You can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one-handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifer on damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonuses reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.',
            type: ['Combat']
        });
        this.feats.cleave.set({
            title: 'Cleave',
            description: 'You can strike two adjacent foes with a single swing',
            prerequisites: 'Str 13, Power Attack, base attack bonus +1',
            benefit: 'As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the first and also within reach. You can only make one additional attack per round with this feat. When you use this feat, you take a -2 penalty to your Armor Class until your next turn.',
            type: ['Combat'],
            requirements: `this.feats['powerAttack'].selected`
        });
    }

    // Public Methods
    public getFeat(id: string): Observable<Feat> {
        // console.log('feat service getFeat called');
        return Observable.of(this.feats[id]);
    }

    public getFeats(): Observable<any> {
        // console.log('feat service getSubjectFeats called');
        this.evaluateAllStatus();
        return this.subject.asObservable();
    }

    public select(feat: Feat): void {
        // console.log('feat service select called');
        this.feats[feat.id].selected = !this.feats[feat.id].selected;
        this.pushSubject();
    }

    /*
    private counter = 0;
    public addNewFeat(): void {
        // console.log('feat service addNewFeat called');
        const feat = new Feat('testFeat' + this.counter);
        this.counter = this.counter + 1;
        this.feats[feat.id] = feat;
        this.pushSubject();
    }
    */

    // Private Methods
    private pushSubject(): void {
        this.evaluateAllStatus();
        this.subject.next(this.feats);
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
    }

    public select(feat: Feat): void {

<<<<<<< HEAD
    }

    public test(): void {
        console.log('test still working');
    }

=======
    private evaluateStatus(feat: Feat): void {
        // console.log('feat service evaluateStatus called');
        // console.log(feat.requirements);
        if (feat.requirements === null || eval(feat.requirements)) {
            if (feat.selected) {
                feat.status = Status.Selected;
            } else {
                feat.status = Status.Available;
            }
        } else {
            if (feat.selected) {
                feat.status = Status.Conflicted;
            } else {
                feat.status = Status.Unavailable;
            }
        }
    }
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
}
