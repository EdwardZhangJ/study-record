function thunk(store) {
  const next = store.dispatch
  function thunkAndDispatch(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = thunkAndDispatch
}

export default thunk
