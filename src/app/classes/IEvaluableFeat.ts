export interface IEvaluableFeat {

    first?: IEvaluableFeat;
    second?: IEvaluableFeat;

    isAvailable(): boolean;
    isConflicted(): boolean;
    reduceToString(): string;
    
}