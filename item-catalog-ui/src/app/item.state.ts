import { Item } from './item-models';

import {
  loadItemsSuccess,
  addProductSuccess,
  addServiceSuccess,
  deleteItemSuccess
} from './item.actions';

import { createReducer, on } from '@ngrx/store';

export interface ItemState {
  items: Item[];
}

export const initialState: ItemState = {
  items: []
};

export const itemsReducer = createReducer(
  initialState,

  on(loadItemsSuccess, (state, { items }) => ({
    ...state,
    items
  })),

  on(addProductSuccess, (state, { product }) => ({
    ...state,
    items: [...state.items, product]
  })),

  on(addServiceSuccess, (state, { service }) => ({
    ...state,
    items: [...state.items, service]
  })),

  on(deleteItemSuccess, (state, { id }) => ({
  ...state,
  items: state.items.filter(item => item.id !== id)
}))
);