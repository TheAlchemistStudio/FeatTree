import { IEvaluableFeat } from './IEvaluableFeat';

export class NotFeat implements IEvaluableFeat {

    first: IEvaluableFeat;   

    isAvailable(): boolean {
        return !this.first.isAvailable();
    }

    isConflicted(): boolean {
        return !this.first.isConflicted();
    }

    reduceToString(): string {
        return `not(${this.first.reduceToString()})`;
    }


}