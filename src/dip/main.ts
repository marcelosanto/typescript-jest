/*
   DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)
*/

import { Persistency } from './services/persistency'
import { Messaging } from './services/messaging'
import { Order } from './classes/order'
import { ShoppingCart } from './classes/shopping-cart'
import { Product } from './classes/product'
import { NoDiscount } from './classes/discount'
import { EnterpriseCustomer } from './classes/customer'

const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const menssaging = new Messaging()
const persistency = new Persistency()
const enterpriseCustomer = new EnterpriseCustomer(
  'Caipora Farms',
  '111.1111-0001/29',
)

const order = new Order(
  shoppingCart,
  menssaging,
  persistency,
  enterpriseCustomer,
)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 3.29))
shoppingCart.addItem(new Product('Copo', 19.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
