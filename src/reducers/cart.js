const initialState = {
  addId: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = { ...state }
      if (newState.addId.indexOf(action.id) === -1) {
        newState.addId.push(action.id)
      }
      return newState
    default:
      return state
  }
}

export default cart
