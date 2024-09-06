import { put, call } from 'redux-saga/effects';
import { ToastContainer, toast } from 'react-toastify';
import {
    RegisterRequestAction,
    REGISTER_SUCCESS,
    ERROR_FOUND
} from '@/actions'; 
import API from '@/api/api';

interface Response {
    success: boolean;
    message: string;
    data: any[];
}

export function* registerRequest(actions: RegisterRequestAction) {
    try {
        const response: Response = yield call(API.register, actions.payload);
        if (response.success) {
            yield put({ type: REGISTER_SUCCESS, payload: response.data });
        } else {
            yield put({ type: ERROR_FOUND });
            yield toast.error(response.message);
        }
    } catch {
        yield put({ type: ERROR_FOUND });
    }
}