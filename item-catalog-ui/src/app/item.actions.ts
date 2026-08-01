import { createAction, props } from '@ngrx/store';
import { create } from 'domain';
import { Item ,Product,Service } from './item-models';


export const deleteItem=createAction(
    '[Item] Delete',
    props <{id:number}>()
);

export const deleteItemSuccess=createAction(
    '[Item] Delete Success',
    props <{id:number}>()
);


export const loadItem=createAction(
    '[Item] Load'
);

export const loadItemsSuccess = createAction(
'[Items] Load Success',
props<{ items: Item[] }>()
);


export const addProduct=createAction(
    '[Item] Add Product',
    props <{product: Product}>()
);

export const addProductSuccess = createAction(
'[Items] Add Product Success',
props<{ product: Product}>()
);


export const addService=createAction(
    '[Item] Add Service',
    props <{service: Service}>()
);

export const addServiceSuccess = createAction(
'[Items] Add Service Success',
props<{ service: Service}>()
);

