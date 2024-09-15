import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductListActions from './store/productList.actions';
import * as fromApp from '../../store/app.reducer';
import { selectProducts } from './product.selector';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products$?: Observable<{products: Product[]}>;
  selectedItem?: Product;
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedType: string = 'All';
  allProducts: Product[] = [];

  types: Type[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Cake', viewValue: 'Cake'},
    {value: 'Muffin', viewValue: 'Muffin'},
    {value: 'Bread', viewValue: 'Bread'},
    {value: 'Cookie', viewValue: 'Cookie'},
    {value: 'Pie', viewValue: 'Pie'},
  ];
  
  constructor(private store: Store<fromApp.AppState>) { 
  }

  ngOnInit(): void {
    this.store.select(selectProducts).subscribe(products => {
      if (products.length === 0) {
        this.store.dispatch(new ProductListActions.GetProducts());
      } else {
        this.allProducts = products;
        this.applyFilters();
      }
    });
  }

  applyFilters() {
    this.filteredProducts = this.allProducts.filter(product => {
      const matchesSearchTerm = product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'All' || product.type === this.selectedType;
      return matchesSearchTerm && matchesType;
    });
  }

  selectedProduct(product: Product){
    this.selectedItem = product;
  }
}
