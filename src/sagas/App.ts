import { put, call } from 'redux-saga/effects';
import { ToastContainer, toast } from 'react-toastify';
import {
    Response,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    ERROR_FOUND,
    GET_DATA_SUCCESS,
} from '@/actions';
import {
    RegisterRequestAction,
    LoginRequestAction,
} from '@/actions/App';
import API from '@/api/api';

export function* getDataRequest() {
    try {
        const response: Response = yield call(API.getData);
        if (response.data.success) {
            yield put({ type: GET_DATA_SUCCESS, response: response });
        } else {
            yield toast.error(response.data.message);
            yield put({ type: ERROR_FOUND });
        }
    } catch (err) {
        yield put({ type: ERROR_FOUND });
    }
}

export function* registerRequest(actions: RegisterRequestAction) {
    try {
        const response: Response = yield call(API.register, actions.payload);
        if (response.data.success) {
            yield put({ type: REGISTER_SUCCESS, payload: response.data });
            yield toast.success(response.data.message);
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
            yield toast.success(response.data.message);
        } else {
            yield put({ type: ERROR_FOUND });
            yield toast.error(response.data.message);
        }
    } catch {
        yield put({ type: ERROR_FOUND });
    }
}