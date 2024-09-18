import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "@/actions";
import { ProductType } from "@/actions/products";

interface ProductsState {
    loading: boolean;
    products: any[];
    error: string | null;
}

const initialState: ProductsState = {
    loading: false,
    products: [],
    error: null
}

export default function products(state = initialState, action: ProductType): ProductsState {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}