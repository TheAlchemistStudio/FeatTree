import { IEvaluableFeat } from './IEvaluableFeat';

export class OrFeat implements IEvaluableFeat {

    first: IEvaluableFeat;    
    second: IEvaluableFeat;

    isAvailable(): boolean {
        return this.first.isAvailable() || this.second.isAvailable();
    }

    isConflicted(): boolean {
        return this.first.isConflicted() || this.second.isConflicted();
    }

    reduceToString(): string {
        return `(${this.first.reduceToString()}) or (${this.second.reduceToString()})`;
    }


}