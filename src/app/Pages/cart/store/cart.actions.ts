import { Action } from "@ngrx/store";
import { Product } from "../../home/product.model";

export const ADD_PRODUCT = '[Cart] Add Product';
export const REMOVE_PRODUCT = '[Cart] Remove Product';
export const CLEAR_CART = '[Cart] Clear Cart';
export const EDIT_PRODUCT = '[Cart] Edit Product';

export class AddProduct implements Action{
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class RemoveProduct implements Action{
  readonly type = REMOVE_PRODUCT;
}

export class ClearCart implements Action{
    readonly type = CLEAR_CART;
}

export class EditProduct implements Action{
    readonly type = EDIT_PRODUCT;
    constructor(public payload: {index: number, product: Product}) {}
}

export type CartActions = AddProduct 
                        | RemoveProduct 
                        | ClearCart
                        | EditProduct;