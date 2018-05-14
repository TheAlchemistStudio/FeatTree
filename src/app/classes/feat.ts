import Status from './status.enum';

export class Feat {

    private _id : string;

    title : string = 'no title';
    description : string = 'no description';
    prerequisites : string = 'no prerequisistes';
    benefit : string = 'no benefit';
    normal : string = 'no normal';
    type : string[] = ['no type'];
    subtype : string[] = ['no subtype'];
    requirements : string = 'no requirements';
    selected : boolean = false;
    status : Status = Status.Available;

    public get id() : string {
        return this._id;
    }

    constructor(id : string) {
        this._id = id;
    }
    
}

export default Feat;
