import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import productSaga  from '../productSaga';
import productReducer from  "../productSlice";

const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
    reducer:{
        product: productReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default Store;