import { IEvaluableItem } from './i-evaluable-item';

export class NotItem implements IEvaluableItem {

    item1: IEvaluableItem;   

    evaluate(): boolean {
        return !this.item1.evaluate();
    }

    reduceToString(): string {
        return `not(${this.item1.reduceToString()})`;
    }


}