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
    
}

export default Feat;
