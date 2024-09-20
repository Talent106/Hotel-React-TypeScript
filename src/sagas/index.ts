import { all, takeLatest } from 'redux-saga/effects';
import {
  GET_DATA_REQUEST,
  LOGIN_REQUEST,
  PRODUCTS_REQUEST,
  REGISTER_REQUEST
} from '@/actions';

import {
  getDataRequest,
  registerRequest,
  loginRequest,
} from './App';

import {
  productsRequest
} from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_REQUEST, getDataRequest),
    takeLatest(REGISTER_REQUEST, registerRequest),
    takeLatest(LOGIN_REQUEST, loginRequest),
    takeLatest(PRODUCTS_REQUEST, productsRequest)
  ]);
}