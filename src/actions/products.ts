import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    Response
} from ".";

export interface Products {
    select: string;
    title: string;
    price: number;
    cut: number;
    quantity: number;
}

export interface ProductsRequestAction {
    type: typeof PRODUCTS_REQUEST;
    payload: Products
}

export interface ProductsSuccessAction {
    type: typeof PRODUCTS_SUCCESS;
    response: Response
}

export const productsRequest = (e: Products): ProductsRequestAction => ({
    type: PRODUCTS_REQUEST,
    payload: e
});

export const productsSuccess = (response: Response): ProductsSuccessAction => ({
    type: PRODUCTS_SUCCESS,
    response
});

export type ProductsTypes =
| ProductsRequestAction
| ProductsSuccessAction