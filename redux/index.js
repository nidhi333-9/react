const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 2
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('initial listen', store.getState());

const unsubscribe = store.subscribe(() => console.log('update store', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(2));


unsubscribe();
