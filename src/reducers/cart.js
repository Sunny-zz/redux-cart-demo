// const initialState = {
//   addId: [],
//   quantityById: {}
// }

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const newState = { ...state }
//       const { id } = action
//       if (newState.addId.indexOf(id) === -1) {
//         newState.addId.push(id)
//       }
//       newState.quantityById = {
//         ...newState.quantityById,
//         [id]: newState.quantityById[id] + 1 || 1
//       }
//       return newState
//     default:
//       return state
//   }
// }
import { combineReducers } from 'redux'
const addId = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id } = action
      const newState = [...state]
      if (newState.indexOf(id) === -1) {
        newState.push(id)
      }
      return newState
    default:
      return state
  }
}
const quantityById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id } = action
      return {
        ...state,
        [id]: { ...state }[id] + 1 || 1
      }
    default:
      return state
  }
}

export default combineReducers({
  addId,
  quantityById
})
