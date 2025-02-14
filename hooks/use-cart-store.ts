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

  updateItem: (item:OrderItem, quantity: number) => Promise<void>
  removeItem: (item: OrderItem) => void
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
      updateItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart
        const exist = items.find(
          (x) =>
            x.product === item.product 
        )
        if (!exist) return
        const updatedCartItems = items.map((x) =>
          x.product === item.product 
            ? { ...exist, quantity: quantity }
            : x
        )
        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            ...(await calcDeliveryPrice({
              items: updatedCartItems,
            })),
          },
        })
      },
      removeItem: async (item: OrderItem) => {
        const { items } = get().cart
        const updatedCartItems = items.filter(
          (x) =>
            x.product !== item.product 
        )
        set({
          cart: {
            ...get().cart,
            items: updatedCartItems,
            ...(await calcDeliveryPrice({
              items: updatedCartItems,
            })),
          },
        })
      },
      init: () => set({ cart: initialState }),
    }),
    {
      name: 'cart-store',
    }
  )
)
export default useCartStore