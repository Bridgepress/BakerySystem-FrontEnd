import { Product } from "../home/product.model";

export class Order{
    constructor(
        public products: Product[],
        public status:string
    ){}
}