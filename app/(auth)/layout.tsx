import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col items-center min-h-screen  '>
      <header className='mt-20 md:mt-4'>
        <Link href='/' className='text-primary font-bold'>
          {APP_NAME}
        </Link>
      </header>
      <main className='mx-auto max-w-sm min-w-80 p-4 mb-7'>{children}</main>
      <footer className=' flex-1 mt-12 md:mt-5 bg-gray-800 w-full flex flex-col gap-4 items-center p-8 text-sm'>
        <div >
          <p className='text-gray-400'>{APP_COPYRIGHT}</p>
        </div>
      </footer>
    </div>
  )
}