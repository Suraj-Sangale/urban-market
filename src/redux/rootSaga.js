import { all } from 'redux-saga/effects';
import cartSaga from './cartSaga';

function* rootSaga() {
  yield all([
    cartSaga(),
  ]);
}

export default rootSaga;
