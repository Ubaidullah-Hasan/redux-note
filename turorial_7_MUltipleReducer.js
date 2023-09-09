const { createStore, combineReducers } = require('redux');

const get_product = "get_product";
const add_product = "add_product";
// create state
const initial_Product = {
    products: ['rice', 'oil'],
    count: 2,
}


// create actions and rape into the function
const getProduct = () => {
    return {
        type: get_product,
    }
};
const addProduct = (product) => {
    return {
        type: add_product,
        payload: product,
    }
}


// create reducer for product
const productReducer = (state = initial_Product, action) => {
    switch (action.type) {
        case get_product:
            return {
                ...state,
            }
        case add_product:
            return {
                products: [...state.products, action.payload],
                count: state.count + 1,
            }

        default:
            return state;
    }
}



const get_cart = "get_cart";
const add_cart = "add_cart";

const initial_cart = {
    cart: ['rice'],
    numberOfProducts: 1,
}

const getCart = () => {
    return {
        type: get_cart,
    }
}
const addCart = (product) => {
    return {
        type: add_cart,
        payload: product,
    }
}

// create reducer for cart
const cartReducer = (state = initial_cart, action) => {
    switch (action.type) {
        case get_cart:
            return {
                ...state,
            }
        case add_cart:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }

        default:
            return state;
    }
}

/* ****************************************************************
CREATE MULTIPLE REDUCER (after 9 munite) 
=> purpose: pass the many reducers
1) const { createStore, combineReducers } = require('redux');
2) const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});
**************************************************************** */

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});


// create store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(getProduct());
store.dispatch(addProduct("orange"));
store.dispatch(getCart());
store.dispatch(addCart('milk'));