export class Purchased{
    // tslint:disable-next-line:variable-name
    constructor(public _id: string, public name: string,
                public price: number, public quantity: number,
                public datePurchased: string, public orderStatuse: string ){

    }
}
