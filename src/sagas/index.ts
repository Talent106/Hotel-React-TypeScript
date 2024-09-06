import { all, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
  REGISTER_REQUEST
} from '@/actions';

import {
  registerRequest,
  loginRequest
} from './App';

export default function* rootSaga() {
  yield all([
    takeLatest(REGISTER_REQUEST, registerRequest),
    takeLatest(LOGIN_REQUEST, loginRequest)
  ]);
}