import { call, put, takeEvery} from 'redux-saga/effects';
import { getProductFailure, getProductSuccess} from './productSlice';

function* workProductFetch(){
    try{
        const item = yield call(() => fetch('https://fakestoreapi.com/products'))
        const data = yield item.json();
        yield put(getProductSuccess(data));
    }
    catch{
        yield put(getProductFailure());
    }
}

function* productSaga(){
    yield takeEvery('products/getProductFetch', workProductFetch)
}

export default productSaga;