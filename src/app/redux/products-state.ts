import { ProductModel } from "../models/product.model";

export class ProductsState {
    products: ProductModel[] = []
}
// איזה פעולות אנונ רוצים לעשות על המידע 
export enum ProductsActionType {  //UpperCase and  PascalCase
    FetchProducts = 'FetchProducts',
    AddProduct = 'AddProduct',
    UpdateProduct = 'UpdateProduct',
    DeleteProduct =  'DeleteProduct'
}
// איזה אוביקט אקשן נשלח לדיספאט    interface either , or ; ts prefers ;
export interface ProductsAction {
    type: ProductsActionType;
    payload: any;
}

// Products Action Creators - function for creating ProductsAction objects. each function creates one Action object:
// Action creators שלא נצטרך להרכיב את כל פעם מחדש 
export function fetchProductsAction(products: ProductModel[]):ProductsAction {
    return {type: ProductsActionType.FetchProducts, payload: products}
}
export function addProductAction(product: ProductModel):ProductsAction {
    return {type: ProductsActionType.AddProduct, payload: product}
}

export function updateProductAction(product: ProductModel):ProductsAction {
    return {type:ProductsActionType.UpdateProduct, payload: product}
}

export function deleteProductAction(id: number): ProductsAction {
    return {type: ProductsActionType.DeleteProduct, payload: id}
}

// Products Reducer - the main function performing any action on products state:
// the new ProductsState() is a default value for the first time only
// לוקח סטייט ודיפאט ומחזיר לנו סטייט חדש 
export function productsReducer(currentState = new ProductsState(), action: ProductsAction):ProductsState {
    // Must duplicate the current state and not touch the given current state: 
    const newState = {...currentState}

    switch(action.type) {
        case ProductsActionType.FetchProducts:
            newState.products = action.payload

        break;
        case ProductsActionType.AddProduct:
            newState.products.push(action.payload)

        break;
        case ProductsActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id)  //dont forget .id
            if (indexToUpdate >= 0) {
                newState.products[indexToUpdate]  = action.payload
            } 

        break;
        case ProductsActionType.DeleteProduct:
          const indexToDelete = newState.products.findIndex(p => p.id === action.payload)
          if (indexToDelete >= 0) {
              newState.products.splice(indexToDelete, 1)
          }
        break;
    }

    return newState
}


// For instance, we can write them all as follows:
// interface Foo {
//   name: string;
//   bar(): void;
// }
// or we can write as follows:
// interface Foo {
//   name: string,
//   bar(): void,
// }