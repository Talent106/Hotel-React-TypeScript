import { put, call } from 'redux-saga/effects';
import { RegisterRequestAction, ERROR_FOUND } from '@/actions'; 
import API from '@/api/api';

export function* registerRequest(actions: RegisterRequestAction) {
    try {
        const response: RegisterRequestAction = yield call(API.register, actions.payload);
    } catch {
        yield put({ type: ERROR_FOUND });
    }
}