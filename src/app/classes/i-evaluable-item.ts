export interface IEvaluableItem {

    item1?: IEvaluableItem;
    item2?: IEvaluableItem;

    evaluate(): boolean;
    reduceToString(): string;
    
}