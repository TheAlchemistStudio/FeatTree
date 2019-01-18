import Status from './status.enum';
import { IEvaluableFeat } from './i-evaluable-feat';

export class Feat implements IEvaluableFeat {

    private _id: string;

    label?: string;
    description?: string;
    prerequisites?: string;
    benefit?: string;
    normal?: string;
    special?: string;
    type?: string[] = [];
    subtype?: string[] = [];
    requirements?: string = null;
    selected?: boolean = false;
    status?: Status = Status.Available;

    public get id(): string {
        return this._id;
    }

    constructor(id: string) {
        this._id = id;
    }

    set(object: any): Feat {
        this.description = object.description || this.description;
        this.prerequisites = object.prerequisites || this.prerequisites;
        this.benefit = object.benefit || this.benefit;
        this.normal = object.normal || this.normal;
        this.special = object.special || this.special;
        this.type = object.type || this.type || [];
        this.subtype = object.subtype || this.subtype || [];
        this.requirements = object.requirements || this.requirements;
        this.selected = object.selected || this.selected;
        this.status = object.status || this.status;
        return this;
    }
    
    isAvailable(): boolean {
        return this.status === Status.Available;
    }

    isConflicted(): boolean {
        return this.status === Status.Conflicted;
    }

    reduceToString(): string {
        return this._id;
    }
    
}

export default Feat;
