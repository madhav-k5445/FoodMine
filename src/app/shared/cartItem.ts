import { foodDetails } from "./shared";

export class cartItem {
    constructor(public food:foodDetails){ }
    quantity:number=0;
    price:number=this.food.price;
}