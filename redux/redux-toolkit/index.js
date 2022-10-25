const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const { IcecreamActions } = require('./features/icecream/icecreamSlice')
const { fetchUsers } = require('./features/user/userSlice')

console.log('Intial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated Store', store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))


// store.dispatch(IcecreamActions.ordered())
// store.dispatch(IcecreamActions.ordered())
// store.dispatch(IcecreamActions.restocked(2))

store.dispatch(fetchUsers())

// unsubscribe();