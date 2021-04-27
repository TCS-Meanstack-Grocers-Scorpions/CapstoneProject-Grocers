export class Purchased {
                                                    //format datePurchased:"4/27/2021"
    constructor(public userId:string,public items=[{}]){ }
     //items[{pid:productId,name:productname,quantity:quantityPurchased,price:productPrice,datePurchased:"4/27/2021"},orderStatus:"processing", orderTotal:20]; 


}

