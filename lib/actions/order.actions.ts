import { OrderItem } from '@/types'
import { round2 } from '../utils'

export const calcDeliveryPrice = async ({
  items,
}: {
  items: OrderItem[]
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  const shippingPrice = 10
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