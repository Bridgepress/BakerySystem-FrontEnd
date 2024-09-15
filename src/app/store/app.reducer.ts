
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromProductList from '../Pages/home/store/productList.reducer';
import * as fromCart from '../Pages/cart/store/cart.reducer';
import * as fromOrderTracking from '../Pages/order-tracking/store/orderTracking.reducer';

export interface AppState {
    productList: fromProductList.State;
    cart: fromCart.State;
    orderTracking: fromOrderTracking.State;
}

export const appReducer: ActionReducerMap<AppState, Action> = {
    productList: fromProductList.productListReducer,
    cart: fromCart.cartReducer as ActionReducer<fromCart.State, Action>,
    orderTracking: fromOrderTracking.orderTrackingReducer as ActionReducer<fromOrderTracking.State, Action>
}