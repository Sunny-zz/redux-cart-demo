const initialState = {
  addId: [],
  quantityById: {}
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = { ...state }
      const { id } = action
      if (newState.addId.indexOf(id) === -1) {
        newState.addId.push(id)
      }
      newState.quantityById = {
        ...newState.quantityById,
        [id]: newState.quantityById[id] + 1 || 1
      }
      return newState
    default:
      return state
  }
}

export default cart
