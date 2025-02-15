export const APP_NAME=process.env.NEXT_PUBLIC_APP_NAME || 'ECOM_MEK'
export const APP_DESCRIPTION=process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'at your door steps.'
export const APP_SLOGAN=process.env.NEXT_PUBLIC_APP_SLOGAN || 'your ultimate e-commerce destination!'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`