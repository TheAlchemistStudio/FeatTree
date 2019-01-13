import Status from './status.enum';

export class Feat {

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
        this.title = object.title || this.title;
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
    
}

export default Feat;
