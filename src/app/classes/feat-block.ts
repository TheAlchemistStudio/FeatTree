import { Operation } from "./operation.enum";
import { IEvaluableItem } from "./i-evaluable-item";

export class FeatBlock {

    operation: Operation;
    first: IEvaluableItem;
    second?: IEvaluableItem;

}