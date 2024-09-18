import { all, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  PRODUCTS_REQUEST,
  REGISTER_REQUEST
} from '@/actions';

import {
  registerRequest,
  loginRequest
} from './App';

import {
  productsRequest
} from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(REGISTER_REQUEST, registerRequest),
    takeLatest(LOGIN_REQUEST, loginRequest),
    takeLatest(PRODUCTS_REQUEST, productsRequest)
  ]);
}