import { put, call } from 'redux-saga/effects';
import { ToastContainer, toast } from 'react-toastify';
import {
    RegisterRequestAction,
    REGISTER_SUCCESS,
    ERROR_FOUND,
    Response,
    LoginRequestAction,
    LOGIN_SUCCESS
} from '@/actions'; 
import API from '@/api/api';

export function* registerRequest(actions: RegisterRequestAction) {
    try {
        const response: Response = yield call(API.register, actions.payload);
        if (response.data.success) {
            yield put({ type: REGISTER_SUCCESS, payload: response.data });
        } else {
            yield put({ type: ERROR_FOUND });
            yield toast.error(response.data.message);
        }
    } catch {
        yield put({ type: ERROR_FOUND });
    }
}

export function* loginRequest(actions: LoginRequestAction) {
    try {
        const response: Response = yield call(API.login, actions.payload);
        if (response.data.success) {
            yield put({ type: LOGIN_SUCCESS, payload: response.data });
        } else {
            yield put({ type: ERROR_FOUND });
        }
    } catch {
        yield put({ type: ERROR_FOUND });
    }
}