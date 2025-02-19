import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='p-4'>
      <header className='bg-card mb-4 border-b'>
        <div className="max-w-6xl mx-auto relative flex items-center py-4">
          <Link href='/' className='absolute left-0 ml-4 text-primary font-bold'>
            {APP_NAME}
          </Link>
          <div className="text-3xl font-bold text-primary mx-auto">
            <h1 className='text-3xl font-bold text-primary mx-auto'>Checkout</h1>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}