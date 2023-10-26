import { Injectable } from '@angular/core';
import { foodDetails } from 'src/app/shared/shared';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foodDetails[]{
    return[
      {
       id:1,
       name:"pizza",
       price:90,
       favorate:false,
       stars:4.5,
       imageUrl:"assets/images/food4.jpg",
       origens:['italy'],
       cookTime:"10-20"
      }
     ]
    
  }
}
// return[
//   {
//    id:1,
//    name:"pizza",
//    price:90,
//    favorate:false,
//    stars:4.5,
//    imageUrl:"assets/images/food4.jpg",
//    origens:['italy'],
//    cookTime:"10-20"
//   }
//  ]

//  "assets/images/food1.jpg",
//  "assets/images/food2.jpg",
//  "assets/images/food3.jpg",
//  "assets/images/food4.jpg",
//  "assets/images/food5.jpg",
//  "assets/images/food6.jpg"