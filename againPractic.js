const crypto = require("crypto");
const { createStore, conbineReducer, combineReducers } = require('redux');

const increment = "increment";
const decrement = "decrement";
const reset = "reset";

const counter = {
    count: 0,
    time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
};

const incrementCount = () => {
    return {
        type: increment,
    }
}
const decrementCount = () => {
    return {
        type: decrement,
    }
}
const resetCounter = () => {
    return {
        type: reset
    }
}

// payload use 
const increment_by_value = 'inctement by value';
const incrementByValue = (value) => {
    return {
        type: increment_by_value,
        payload: value,
    }
}


const reducerCounter = (state = counter, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1,
            }
        case decrement:
            return {
                ...state,
                count: state.count - 1,
            }
        case reset:
            return {
                ...state,
                count: 0,
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

const store = createStore(reducerCounter);
store.subscribe(() => {
    console.log(store.getState());
});
// store.dispatch(incrementCount());
// store.dispatch(resetCounter());
// store.dispatch(decrementCount());
// store.dispatch(incrementByValue(10));


/* ********************************
ADD USER CODE
******************************** */
const addUser = "ADD_USER";

const addUserState = {
    id: '',
    name: [],
    count: 0,
}

const addNewUser = (value) => {
    return {
        type: addUser,
        payload: value,
    }
}

const reducerAddUser = (state = addUserState, action) => {
    switch (action.type) {
        case addUser:
            return {
                id: crypto.randomBytes(16).toString("hex"),
                name: [...state.name, action.payload],
                count: state.count + 1,
            }

        default:
            return state;
    }
}

const userStore = createStore(reducerAddUser);
userStore.subscribe(() => {
    console.log(userStore.getState());
});
// userStore.dispatch(addNewUser("rahim"));
// userStore.dispatch(addNewUser("karim"));
// userStore.dispatch(addNewUser("jabbar"));

// multiple reducers use
const rootReducer = combineReducers({
    counterR: reducerCounter,
    userR: reducerAddUser
})

const multipleReducerStore = createStore(rootReducer);
multipleReducerStore.subscribe(()=> {
    console.log(multipleReducerStore.getState());
})
multipleReducerStore.dispatch(incrementCount());
multipleReducerStore.dispatch(incrementByValue(10));
multipleReducerStore.dispatch(addNewUser("New User"));

