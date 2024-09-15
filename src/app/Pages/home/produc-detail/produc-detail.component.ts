import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../home/product.model';


@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrl: './produc-detail.component.css'
})
export class ProducDetailComponent implements OnInit {
  @Input() product?: Product;
  @Input() index: number = 0;
  @Output() productSelectedEvent = new EventEmitter<Product>(); ;
  
  constructor() { }

  ngOnInit(): void {
    console.log('Product in detail:', this.product);
  }

  selectedProduct(product?: Product){
    this.productSelectedEvent.emit(product);
  }
}
