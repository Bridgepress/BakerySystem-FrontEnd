import { Action } from "@ngrx/store";
import { Product } from "../product.model";
import { AddProduct, EditProduct, GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, ProductListActions, StartEdit, UpdateProduct } from "./productList.actions";
import { UPDATE_PRODUCT,
            DELETE_PRODUCT,
            STOP_EDIT,
            START_EDIT,
            ADD_PRODUCT } from "./productList.actions";

export interface State{
    products: Product[];
    editedProduct: Product | null;
    editedProductIndex: number;
}

const initialState: State = {
    products: [],
    editedProduct: null,
    editedProductIndex: -1
};

export function productListReducer(state: State = initialState, action: ProductListActions | Action) : State{
   switch(action.type){
         case ADD_PRODUCT:
              return {
                ...state,
                products: [...state.products, (action as AddProduct).payload]
              };
              case UPDATE_PRODUCT: {
                const updatedProduct = (action as UpdateProduct).payload;
                const productIndex = state.products.findIndex(p => p.id === updatedProduct.id);
                const updatedProducts = [...state.products];
                updatedProducts[productIndex] = { ...updatedProduct };
          
                return {
                  ...state,
                  products: updatedProducts
                };
              }
         case DELETE_PRODUCT:
              return {
                ...state,
                products: state.products.filter((product, index) => {
                     return index !== state.editedProductIndex;
                }),
                editedProduct: null,
                editedProductIndex: -1
              };
         case  STOP_EDIT:
              return {
                ...state,
                editedProduct: null,
                editedProductIndex: -1
              };
         case START_EDIT:
              return {
                ...state,
                editedProductIndex: (action as {index: number}).index,
                editedProduct: { ...state.products[(action as {index: number}).index] }
              };
        case GET_PRODUCTS_SUCCESS: 
            return {
                ...state,
                products: (action as {payload: Product[]}).payload
            };
        case GET_PRODUCTS:
            return {
                ...state
            };
        case GET_PRODUCTS_FAIL:
            return {
                ...state
            };
         default:
              return state;
   }
}

