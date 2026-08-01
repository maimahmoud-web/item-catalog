import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { ItemService } from './item-service';
import {
  loadItem,
  loadItemsSuccess,
  addProduct,
  addProductSuccess,
  addService,
  addServiceSuccess,
  deleteItem,
  deleteItemSuccess
} from './item.actions';

@Injectable()
export class ItemEffects {
  private actions$ = inject(Actions);
  private itemService = inject(ItemService);

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItem),

      mergeMap(() =>
        this.itemService.getItem().pipe(
          map(items =>
            loadItemsSuccess({ items })
          )
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),

      mergeMap(({ product }) =>
        this.itemService.addProduct(product).pipe(
          map(savedProduct =>
            addProductSuccess({
              product: savedProduct
            })
          )
        )
      )
    )
  );

  addService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addService),

      mergeMap(({ service }) =>
        this.itemService.addService(service).pipe(
          map(savedService =>
            addServiceSuccess({
              service: savedService
            })
          )
        )
      )
    )
  );

  deleteItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteItem),

    mergeMap(({ id }) =>
      this.itemService.deleteItem(id).pipe(
        map(() =>
          deleteItemSuccess({ id })
        ),

      )
    )
  )
);
}