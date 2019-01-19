import { IEvaluableItem } from './i-evaluable-item';

export class AndItem implements IEvaluableItem {

    item1: IEvaluableItem;
    item2: IEvaluableItem;

    evaluate(): boolean {
        return this.item1.evaluate() && this.item2.evaluate();
    }

    reduceToString(): string {
        return `(${this.item1.reduceToString()}) and (${this.item2.reduceToString()})`;
    }

}