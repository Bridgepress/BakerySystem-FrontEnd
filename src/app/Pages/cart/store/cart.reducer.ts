import { Action } from "@ngrx/store";
import { Product } from "../../home/product.model";
import * as CartActions from './cart.actions';

export interface State {
  products: Product[];
  editedProduct: Product | null;
  editedProducttIndex: number;
}

const initialState: State = {
    products: [],
    editedProduct: null,
    editedProducttIndex: -1
};

export function cartReducer(state: State = initialState, action: CartActions.CartActions | Action) {
  switch (action.type) {
    case CartActions.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, (action as CartActions.AddProduct).payload]
      };
      case CartActions.EDIT_PRODUCT: {
        const index = (action as CartActions.EditProduct).payload.index;
        const updatedProduct = (action as CartActions.EditProduct).payload.product;
        const updatedProducts = [...state.products];
        updatedProducts[index] = updatedProduct;
  
        return {
          ...state,
          products: updatedProducts
        };
      }
    case CartActions.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products?.filter((product, index) => {
            return index !== state.editedProducttIndex;
        }),
        editedProducttIndex: -1,
        editedProduct: null
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        products: null
      };
    default:
      return state;
  }
}
