import { all } from 'redux-saga/effects';
// Import your individual sagas here
// import someSaga from './someSaga';

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    // someSaga(),
  ]);
}