import { Product } from "../product.model";

export const ADD_PRODUCT = '[Product List] ADD_PRODUCT';
export const GET_PRODUCTS = '[Product List] GET_PRODUCTS';
export const UPDATE_PRODUCT = '[Product List] UPDATE_PRODUCT';
export const DELETE_PRODUCT = '[Product List] DELETE_PRODUCT';
export const EDIT_PRODUCT = '[Product List] EDIT_PRODUCT';
export const STOP_EDIT = '[Product List] STOP_EDIT';
export const START_EDIT = '[Product List] START_EDIT';
export const GET_PRODUCTS_SUCCESS = '[Product List] GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = '[Product List] GET_PRODUCTS_FAIL';

export class GetProducts{
    readonly type = GET_PRODUCTS;
    constructor(){}
}

export class AddProduct{
    readonly type = ADD_PRODUCT;
    constructor(public payload: Product){}
}

export class UpdateProduct{
    readonly type = UPDATE_PRODUCT;
    constructor(public payload: Product){}
}

export class DeleteProduct{
    readonly type = DELETE_PRODUCT;
}

export class EditProduct{
    readonly type = EDIT_PRODUCT;
    constructor(public payload: number){}
}

export class StopEdit{
    readonly type = STOP_EDIT;
}

export class StartEdit{
    readonly type = START_EDIT;
    constructor(public index: number){}
}

export class GetProductsSuccess {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}

export class GetProductsFail {
    readonly type = GET_PRODUCTS_FAIL;
    constructor(public payload: any) {}
}

export type ProductListActions = AddProduct 
                                | UpdateProduct 
                                | DeleteProduct 
                                | EditProduct 
                                | StopEdit 
                                | StartEdit
                                | GetProducts
                                | GetProductsSuccess
                                | GetProductsFail;