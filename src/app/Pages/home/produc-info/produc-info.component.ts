import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../home/product.model';
import * as CartActions from '../../cart/store/cart.actions';
import { Observable, take } from 'rxjs';
import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as ProductListActions from '../store/productList.actions';

@Component({
  selector: 'app-produc-info',
  templateUrl: './produc-info.component.html',
  styleUrl: './produc-info.component.css'
})
export class ProducInfoComponent implements OnInit {
  @Input() product?: Product;
  @Input() index: number = 0;
  productInCart$?: Observable<{products: Product[]}>;

  constructor(private store: Store<fromApp.AppState>) { }
  
  ngOnInit(): void {
  }

  addToCart() {
    let updateMainProduct = { ...this.product, count: this.product!.count - 1 };
    this.store.select('cart').pipe(take(1)).subscribe(cartState => {
      const existingProductIndex = cartState.products?.findIndex(p => p.id === this.product?.id);   
      if (existingProductIndex !== -1 && existingProductIndex !== undefined) {
        const existingProduct = cartState.products[existingProductIndex];
        const updatedProduct = { ...existingProduct, count: +existingProduct.count + 1 };      
        this.store.dispatch(new CartActions.EditProduct({ index: existingProductIndex, product: updatedProduct }));
      } else if (this.product) {
        const productToAdd = { ...this.product, count: 1 };
        this.store.dispatch(new CartActions.AddProduct(productToAdd));
      }
    });
    this.store.dispatch(new ProductListActions.UpdateProduct(updateMainProduct as Product));
    if (updateMainProduct.id) {
      this.product = updateMainProduct as Product;
    }
  }
}

