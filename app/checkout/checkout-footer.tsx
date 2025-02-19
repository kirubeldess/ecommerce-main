import { APP_NAME } from '@/lib/constants'
import React from 'react'

export default function CheckoutFooter() {
  return (
    <div className='border-t-2 space-y-2 my-4 py-4'>
      <p>
        Need help? Contact us by +251963154918
      </p>
      <p>
        For an item ordered from {APP_NAME}: When you click the &apos;Place Your
        Order&apos; button, your order will be processed.
      </p>
    </div>
  )
}