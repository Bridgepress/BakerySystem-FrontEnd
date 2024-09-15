import { Subject } from "rxjs";
import { Product } from "./product.model";

export class ProductService{
    productChange = new Subject<Product[]>();
    private products: Product[] = [];
  
}