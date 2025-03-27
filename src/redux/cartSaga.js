import { takeEvery, put } from 'redux-saga/effects';

function* addToCartSaga(action) {
  yield put({ type: 'ADD_TO_CART', payload: action.payload });
}

// test changes 
function* cartSaga() {
  yield takeEvery('ASYNC_ADD_TO_CART', addToCartSaga);
}

export default cartSaga;
