import { IEvaluableItem } from './i-evaluable-item';

export class OrItem
 implements IEvaluableItem {

    item1: IEvaluableItem;    
    item2: IEvaluableItem;

    evaluate(): boolean {
        return this.item1.evaluate() || this.item2.evaluate();
    }

    reduceToString(): string {
        return `(${this.item1.reduceToString()}) or (${this.item2.reduceToString()})`;
    }


}