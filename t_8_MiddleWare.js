/* **************** MIDLEWARE USE *****************************************

1) const { applyMiddleware } = require("redux") => import form redux
2) const store = createStore(productReducer, applyMiddleware(...middleware name...));

======== redux logger ========
=> give additional information 

************************************************************************ */


const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const get_products = 'get_products';
const add_products = 'add_products';

const initialProductState = {
    products: ['sugar, tea'],
    countOfProducts: 2,
}

const getProducts = () => {
    return {
        type: get_products,
    }
}
const addProducts = (value) => {
    return {
        type: add_products,
        payload: value,
    }
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case get_products:
            return {
                ...state,
            }
        case add_products:
            return {
                products: [...state.products, action.payload],
                countOfProducts: state.countOfProducts + 1,
            }
        default:
            return state;
    }
}

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(getProducts());
store.dispatch(addProducts('milk'));