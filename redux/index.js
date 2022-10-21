const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICE_ORDERED = 'ICE_ORDERED';
const ICE_RESTOCKED = 'ICE_RESTOCKED';

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICE_ORDERED,
        payload: qty,
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICE_RESTOCKED,
        payload: qty,
    }
}
const initialCakeState = {
    numberOfCakes: 10,

}
const initialIceCreamState = {
    numberOfIceCream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICE_ORDERED:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1,
            }
        case ICE_RESTOCKED:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream + action.payload
            }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createStore(rootReducer)

console.log('initial listen', store.getState());

const unsubscribe = store.subscribe(() => console.log('update store', store.getState()));

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderIceCream();

actions.restockIceCream(3);



unsubscribe();
