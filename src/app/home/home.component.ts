import { Component,OnInit } from "@angular/core";
import { FoodService } from "../services/food/food.service";
import { foodDetails } from "../shared/shared";
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{

    foods:foodDetails[]=[];
    constructor(private foodService:FoodService){ }
    ngOnInit():void{
        this.foods=this.foodService.getAll();
    }

}