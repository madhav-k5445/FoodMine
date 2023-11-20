import { Component } from '@angular/core';
import { foodDetails } from '../shared/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!:foodDetails;

  constructor(foodsrv:FoodService,actvatedroute:ActivatedRoute,private router:Router){


    actvatedroute.params.subscribe((params)=>{
      if(params.foodId)
      this.food=foodsrv.getFoodById(params.foodId)
    })
   

  }

}
