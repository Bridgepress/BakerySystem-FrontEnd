import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as OrderTrackingActions from './orderTracking.actions';
import { HttpClient } from "@angular/common/http";
import { apiEnvKey, environment } from "../../../Requests/Options/BaseUrl";
import {Order} from '../order.model';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrderTrackingEffects {
    getOrders = createEffect(() =>
        this.actions$.pipe(
          ofType(OrderTrackingActions.GET_ORDERS),
          switchMap(() => {
            return this.http.get<Order[]>(`${environment(apiEnvKey)}/api/Order/GetAllOrders`)
              .pipe(
                map(orders => new OrderTrackingActions.GetOrdersSuccess(orders)),
                catchError(error => of(new OrderTrackingActions.GetOrdersFail(error)))
              );
          })
        )
      );
    
    addOrder = createEffect(() =>
        this.actions$.pipe(
          ofType(OrderTrackingActions.ADD_ORDER),
          switchMap((action: OrderTrackingActions.AddOrder) => {
            return this.http.post<Order>(`${environment(apiEnvKey)}/api/Order/CreateOrder`, action.payload)
              .pipe(
                tap(order => {}),
                catchError(error => of(new OrderTrackingActions.GetOrdersFail(error)))
              );
          })
        ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}
