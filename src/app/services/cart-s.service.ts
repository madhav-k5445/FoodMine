import { Injectable } from '@angular/core';
import { cart } from '../shared/cart';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartSService {
private cart:cart=new cart();
private cartSubject:BehaviorSubject<cart> =new BehaviorSubject(this.cart);
  constructor() { }
}
