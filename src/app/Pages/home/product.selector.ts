import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../home/store/productList.reducer';

export const selectProductListState = createFeatureSelector<State>('productList');

export const selectProducts = createSelector(
    selectProductListState,
    (state: State) => state.products
  );