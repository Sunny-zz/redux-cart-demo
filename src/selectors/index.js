export const getProductsById = products =>
  products.reduce((obj, t) => {
    obj[t.id] = t
    return obj
  }, {})

//通过 cart 的 addId 属性 在 getProductsById 对象中获取 商品数组
export const getCartProducts = (cart, products) =>
  cart.addId.map(t => getProductsById(products)[t])

export const getTotal = (cart, products) =>
  cart.addId.reduce((total, t) => {
    return total + getProductsById(products)[t].price * cart.quantityById[t]
  }, 0)
