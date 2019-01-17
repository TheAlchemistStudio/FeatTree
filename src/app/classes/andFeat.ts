import { IEvaluableFeat } from './IEvaluableFeat';

export class AndFeat implements IEvaluableFeat {

    first: IEvaluableFeat;
    second: IEvaluableFeat;
    
    isAvailable(): boolean {
        return this.first.isAvailable() && this.second.isAvailable();
    }

    isConflicted(): boolean {
        return this.first.isConflicted() && this.second.isConflicted();
    }

    reduceToString(): string {
        return `(${this.first.reduceToString()}) and (${this.second.reduceToString()})`;
    }

}