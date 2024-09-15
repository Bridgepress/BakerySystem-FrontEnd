import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductListActions from './productList.actions';
import { HttpClient } from "@angular/common/http";
import { apiEnvKey, environment } from "../../../Requests/Options/BaseUrl";
import { Product } from "../product.model";
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductListEffects {
    getProducts = createEffect(() =>
        this.actions$.pipe(
          ofType(ProductListActions.GET_PRODUCTS),
          switchMap(() => {
            return this.http.get<Product[]>(`${environment(apiEnvKey)}/api/Product/GetAllProducts`)
              .pipe(
                map(products => new ProductListActions.GetProductsSuccess(products)),
                catchError(error => of(new ProductListActions.GetProductsFail(error)))
              );
          })
        )
      );
      
    constructor(private actions$: Actions, private http: HttpClient) {}
}
