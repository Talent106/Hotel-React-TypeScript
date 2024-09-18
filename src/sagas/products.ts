import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    ProductsRequestAction
} from '@/actions/products';
import {
    ERROR_FOUND,
    PRODUCTS_SUCCESS,
    Response
} from '@/actions';
import api from '@/api/api';

export function* productsRequest(actions: ProductsRequestAction) {
    try {
        const response: Response = yield call(api.products, actions.payload);
        if (response.data.success) {
            yield put({ type: PRODUCTS_SUCCESS, response: response.data.data });
            yield toast.success(response.data.message);
        } else {
            yield put({ type: ERROR_FOUND });
            yield toast.warning(response.data.message);
        }
    } catch (err) {
        yield put({ type: ERROR_FOUND });
    }
}