import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Observable, take } from 'rxjs';
import { Product } from '../home/product.model';
import * as OrderTrackerActions from '../order-tracking/store/orderTracking.actions'
import { Order } from '../order-tracking/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    products$?: Observable<{products: Product[]}>;
    allSum: number = 0;

    constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.products$ = this.store.select('cart');
      this.products$?.subscribe(cartState => {
        this.calculateTotalSum(cartState.products);
      });
   }

   calculateTotalSum(products: Product[]): void {
    this.allSum = products.reduce((sum, product) => {
      return sum + product.price * product.count;
    }, 0);
  }

  createOrder() {
    this.products$?.pipe(take(1)).subscribe(cartState => {
      let newOrder = new Order(
        cartState.products,
        'Pending'        
      );
      this.store.dispatch(new OrderTrackerActions.AddOrder(newOrder));
    });
  }
  
}
