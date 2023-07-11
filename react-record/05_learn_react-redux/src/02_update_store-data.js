const store = require('./store')

console.log(store.getState());

const nameAction = {type: 'CHANGE_NAME', payload: 'John'}
store.dispatch(nameAction)
