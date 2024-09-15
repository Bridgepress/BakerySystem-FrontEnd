import { Action } from "@ngrx/store";
import { Order } from "../order.model";

export const ADD_ORDER = '[Cart] Add Order';
export const GET_ORDERS = '[Cart] Get Orders';
export const UPDATE_ORDER = '[Cart] Update Order';
export const GET_ORDERS_SUCCESS = '[Cart] Get Orders Success';
export const GET_ORDERS_FAIL = '[Cart] Get Orders Fail';

export class AddOrder implements Action{
  readonly type = ADD_ORDER;
  constructor(public payload: Order) {}
}

export class GetOrders implements Action{
  readonly type = GET_ORDERS;
  constructor(public payload: Order) {}
}

export class UpdateOrder implements Action{
  readonly type = UPDATE_ORDER;
  constructor(public payload: Order) {}
}

export class GetOrdersSuccess implements Action{
    readonly type = GET_ORDERS_SUCCESS;
    constructor(public payload: Order[]) {}
}

export class GetOrdersFail implements Action{
    readonly type = GET_ORDERS_FAIL;
    constructor(public payload: any) {}
}

export type OrderTrackingActions = AddOrder 
                                | GetOrders 
                                | UpdateOrder
                                | GetOrdersSuccess
                                | GetOrdersFail;