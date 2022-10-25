const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const { IcecreamActions } = require('./features/icecream/icecreamSlice')

console.log('Intial State', store.getState())

const unsubscribe = store.subscribe(() => {

})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))


store.dispatch(IcecreamActions.ordered())
store.dispatch(IcecreamActions.ordered())
store.dispatch(IcecreamActions.restocked(2))

unsubscribe();