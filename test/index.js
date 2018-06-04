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
  },
  {
    id: '456',
    title: '一加 6',
    price: 3299,
    inventory: 5
  }
]
// const initialState = {
//   '123': {
//     id: '123',
//     title: '小米 8',
//     price: 3199,
//     inventory: 10
//   },
//   '234': {
//     id: '234',
//     title: '一加 6',
//     price: 3299,
//     inventory: 5
//   },
//   '456': {
//     id: '456',
//     title: '一加 6',
//     price: 3299,
//     inventory: 5
//   }
// }
// const addId = ['123', '234']
// const state = addId.map(t => initialState[t])
// console.log(state);

const state = initialState.reduce((obj, t) => {
  obj[t.id] = t
  return obj
}, {})
console.log(state)
