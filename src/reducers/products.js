const initialState = [
  {
    id: '123',
    title: '小米 8',
    price: 3199,
    inventory: 10
  },
  {
    id: '234',
    title: '一加 6',
    price: 3299,
    inventory: 5
  }
]
const products = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = state.map(t => {
        if (t.id === action.id && t.inventory > 0) {
          t.inventory--
        }
        return t
      })
      return newState
    default:
      return state
  }
}
export default products
