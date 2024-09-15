import { Action } from "@ngrx/store";
import { Product } from "../../home/product.model";
import * as OrderTrackingActions from './orderTracking.actions';
import { Order } from "../order.model";

export interface State {
  orders: Order[];
  editedOrder: Order | null;
  editedOrderIndex: number;
}

const initialState: State = {
    orders: [],
    editedOrder: null,
    editedOrderIndex: -1
};

export function orderTrackingReducer(state: State = initialState, action: OrderTrackingActions.OrderTrackingActions | Action) {
  switch (action.type) {
    case OrderTrackingActions.ADD_ORDER:
        return{
            ...state,
            orders: [...state.orders, (action as OrderTrackingActions.AddOrder).payload]
        };
    case OrderTrackingActions.GET_ORDERS:
        return{
            ...state,
            orders: [...state.orders]
        };
    case OrderTrackingActions.GET_ORDERS_SUCCESS: 
    return {
        ...state,
        orders: (action as {payload: Order[]}).payload
    };
    case OrderTrackingActions.GET_ORDERS_FAIL:
        return{
            ...state,
            orders: [...state.orders]
        };
    case OrderTrackingActions.UPDATE_ORDER: {
        const updatedOrder = (action as OrderTrackingActions.UpdateOrder).payload;
        const updatedOrders = state.orders.map(order =>
            order.id === updatedOrder.id ? updatedOrder : order
        );
        return {
            ...state,
            orders: updatedOrders
        };
    }
    default:
      return state;
  }
}
