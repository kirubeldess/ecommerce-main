export const APP_NAME=process.env.NEXT_PUBLIC_APP_NAME || 'ECOM_MEK'
export const APP_DESCRIPTION=process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'at your door steps.'
export const APP_SLOGAN=process.env.NEXT_PUBLIC_APP_SLOGAN || 'your ultimate e-commerce destination!'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`


//for future use(telebirr and stuff)
export const AVAILABLE_PAYMENT_METHODS = [
    {
      name: 'Cash On Delivery',
      commission: 0,
      isDefault: true,
    },
  ]

export const DEFAULT_PAYMENT_METHOD =
    process.env.DEFAULT_PAYMENT_METHOD || 'Cash On Delivery'

export const AVAILABLE_SHOPS = [
  {
    name: 'Shop 1',
    isDefault: true,
  },
  {
    name: 'Shop 2',
    isDefault: false,
  },
  {
    name: 'Shop 3',
    isDefault: false,
  }
]
export const DEFAULT_SHOP = [
  process.env.DEFAULT_PAYMENT_METHOD || 'Shop 1'
]