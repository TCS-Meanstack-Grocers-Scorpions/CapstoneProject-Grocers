import { Items } from "./model.items";
import { Product } from "./model.product";

export class Purchased{
    // tslint:disable-next-line:variable-name
    constructor(public _id: string, public userId:string, items:Array<Items>,
                public datePurchased: string, public total:number){

    }
}
