const { createStore } = require('redux');

// variables defined (optional)
const increment = "INCREMENT";
const decrement = "DECREMENT";
const addUser = "ADD USER";
const increment_by_value = "INCREMENT_BY_VALUE";


/* ****************************************************************
REDUX WORKING STEPS: 
1) create state
2) dispatch actions => create actions and dispatch
3) create reducer (special function)
4) store
5) require redux: such as => const { createStore } = require('redux');
***************************************************************** */


// state create
const initialCounterState = {
    count: 0,
};
const initialUsersState = {
    users: [{ name: 'John', email: 'hm@example.com' }]
};




/* =======================
CREATE ACTION
* type of object, containing 2 things: 1. type 2. plyload => example ~ {type: '...', payload: '...'}
* we keep the action within a function for handle easily
* payload ~ to update (or set) state values  we can use payload
======================= */
const incrementCounter = () => { // create action
    return {
        type: increment, // type
        // plyload 
    }
};
const decrementCounter = () => {
    return {
        type: decrement,
    }
};
//  ACTION WITH PAYLOAD
const incrementByValue = (value) => {
    return {
        type: increment_by_value,
        payload: value
    }
}



/* =======================
CREATE REDUCER
* special function
* have 2 parameters (state, action) => state will be update depending on the action
======================= */
const countReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state, // object spread (whole object come here and update only count) => then return whole object in the state
                count: state.count + 1,
            }
        case decrement:
            return {
                ...state,
                count: state.count - 1,
            }
        case increment_by_value:
            return {
                ...state,
                count: state.count + action.payload,
            }
        default:
            return state;
    }
}


/* =======================
CREATE STORE
* store hold the state values
* 3 important methods
    => getState()
    => dispatch()
    => subscribe()
======================= */
const store = createStore(countReducer);
store.subscribe(() => {
    console.log(store.getState()); // getState() => use for state print
});

// dispatch action (like call the function)
store.dispatch(incrementCounter());
store.dispatch(incrementByValue(10));





