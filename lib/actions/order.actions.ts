import { OrderItem, ShippingAddress } from '@/types'
import { round2 } from '../utils'

export const calcDeliveryPrice = async ({
  items,
  shippingAddress,
}: {
  items: OrderItem[]
  shippingAddress?:ShippingAddress
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  const shippingPrice =
  !shippingAddress ? undefined :
  10
  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0)
  )
  return {
    itemsPrice,
    shippingPrice,
    totalPrice,
  }
}