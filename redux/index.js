const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 2
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
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('initial listen', store.getState());

const unsubscribe = store.subscribe(() => console.log('update store', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
