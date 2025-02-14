import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Cart, OrderItem } from '@/types'
import { calcDeliveryPrice } from '@/lib/actions/order.actions'

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  shippingPrice: undefined,
  totalPrice: 0,
  paymentMethod: undefined,
  
}

interface CartState {
  cart: Cart
  addItem: (item: OrderItem, quantity: number) => Promise<string>
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: initialState,

      addItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart
        const existItem = items.find(
          (x) =>
            x.product === item.product
            
        )

        const updatedCartItems = existItem
          ? items.map((x) =>
              x.product === item.product 
                ? { ...existItem, quantity: existItem.quantity + quantity }
                : x
            )
          : [...items, { ...item, quantity }]

        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            ...(await calcDeliveryPrice({
              items: updatedCartItems,
            })),
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        return updatedCartItems.find(
          (x) =>
            x.product === item.product 
        )?.clientId!
      },
      init: () => set({ cart: initialState }),
    }),
    {
      name: 'cart-store',
    }
  )
)
export default useCartStore