import { Status } from './status.enum';
import { IEvaluableItem } from './i-evaluable-item';
import { FeatBlock } from './feat-block';
import { Operation } from './operation.enum';
import { AndItem } from './and-item';
import { OrItem } from './or-item';
import { NotItem } from './not-item';

export class Feat implements IEvaluableItem {

    private _id: string;

    label?: string;
    description?: string;
    prerequisites?: string;
    benefit?: string;
    normal?: string;
    special?: string;
    type?: string[] = [];
    subtype?: string[] = [];
    requirements?: IEvaluableItem = null;
    disqualifiers?: IEvaluableItem = null;
    selected?: boolean = false;
    status?: Status = Status.Available;

    public get id(): string {
        return this._id;
    }

    constructor(id: string) {
        this._id = id;
    }

    set(object: any): Feat {
        this.label = object.label || this.label;
        this.description = object.description || this.description;
        this.prerequisites = object.prerequisites || this.prerequisites;
        this.benefit = object.benefit || this.benefit;
        this.normal = object.normal || this.normal;
        this.special = object.special || this.special;
        this.type = object.type || this.type || [];
        this.subtype = object.subtype || this.subtype || [];
        this.requirements = this.setIEvaluableItem(object.requirements || this.requirements);
        this.disqualifiers = this.setIEvaluableItem(object.disqualifiers || this.disqualifiers);
        this.selected = object.selected || this.selected;
        this.status = object.status || this.status;
        return this;
    }

    private setIEvaluableItem(text: string): IEvaluableItem {
        console.log(`starting for ${this.id}`);
        if (!text) {
            return null;
        }
        const object = JSON.parse(text);
        const featBlock = Object.assign(new FeatBlock(), {
            operation: object.operation,
            first: object.first,
            second: object.second
        });
        console.log(featBlock);
        return this.doSetIEvaluableFeat(featBlock);
    }

    private doSetIEvaluableFeat(block: FeatBlock): IEvaluableItem {
        let feat;
        console.log(block);
        switch (block.operation) {
            case Operation.And:
                feat = new AndItem();
                feat.item1 = block.first;
                feat.item2 = block.second;
                feat.item1 = this.doSetIEvaluableFeat(feat.item1);
                feat.item2 = this.doSetIEvaluableFeat(feat.item2);
            case Operation.Or:
                feat = new OrItem(); 
                feat.item1 = block.first;
                feat.item2 = block.second;
                feat.item1 = this.doSetIEvaluableFeat(feat.item1);
                feat.item2 = this.doSetIEvaluableFeat(feat.item2);
            case Operation.Not:
                feat = new NotItem();
                feat.item1 = block.first;
                feat.item1 = this.doSetIEvaluableFeat(feat.item1);
            case Operation.Evaluate:
                feat = block.first as Feat;
        }
        return feat;
    }

    select(): void {
        if (this.selected) {
            this.selected = false;
        } else {
            this.selected = this.selectable();
        }
        this.evaluateStatus();
    }

    private selectable(): boolean {
        return this.status === Status.Available;
    }

    private evaluateStatus(): void {
        if (this.selected) {
            this.status = Status.Selected;
        } else if (this.evaluateConflicted()) {
            this.status = Status.Conflicted;
        } else if (this.evaluateAvailable()) {
            this.status = Status.Available;
        } else {
            this.status = Status.Unavailable;
        }
    }

    private evaluateAvailable(): boolean {
        if (!this.requirements) {
            return true;
        }
        return this.requirements.evaluate() || true;
    }

    private evaluateConflicted(): boolean {
        if (!this.disqualifiers) {
            return false;
        }
        return this.disqualifiers.evaluate() || false;
    }

    evaluate(): boolean {
        return this.selected;
    }

    reduceToString(): string {
        return this._id;
    }
    
}

export default Feat;
