'use client'
import BrowsingHistoryList from '@/components/shared/browsing-history-list'
import ProductPrice from '@/components/shared/product/product-price'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCartStore from '@/hooks/use-cart-store'
import { APP_NAME} from '@/lib/constants'
// import { ArrowRightIcon, ShoppingCartIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CartPage() {
  const {
    cart: { items, itemsPrice },
    updateItem,
    removeItem,
  } = useCartStore()
  const router = useRouter()
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4  md:gap-4'>
        {items.length === 0 ? (
          <Card className='col-span-4 rounded-none'>
            <CardHeader className='text-3xl  '>
              Your Shopping Cart is empty
            </CardHeader>
            <CardContent>
              Continue shopping on <Link href='/'>{APP_NAME}</Link>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className='col-span-3'>
              <Card className='rounded-none'>
                <CardHeader className='text-3xl pb-0'>
                  Shopping Cart
                </CardHeader>
                <CardContent className='p-4'>
                  <div className='flex justify-end border-b mb-4'>Price</div>

                  {items.map((item) => (
                    <div
                      key={item.clientId}
                      className='flex flex-col md:flex-row justify-between py-4 border-b gap-4'
                    >
                      <Link href={`/product/${item.slug}`}>
                        <div className='relative w-40 h-40'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes='20vw'
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      </Link>

                      <div className='flex-1 space-y-4'>
                        <Link
                          href={`/product/${item.slug}`}
                          className='text-lg hover:no-underline  '
                        >
                          {item.name}
                        </Link>
                        
                        <div className='flex gap-2 items-center'>
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) =>
                              updateItem(item, Number(value))
                            }
                          >
                            <SelectTrigger className='w-auto'>
                              <SelectValue>
                                Quantity: {item.quantity}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent position='popper'>
                              {Array.from({
                                length: 50,
                              }).map((_, i) => (
                                <SelectItem key={i + 1} value={`${i + 1}`}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button
                            variant={'outline'}
                            onClick={() => removeItem(item)}
                            className='bg-red-500 text-white'
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className='text-right'>
                          {item.quantity > 1 && (
                            <>
                              {item.quantity} x
                              <ProductPrice price={item.price}  />
                              <br />
                            </>
                          )}

                          <span className='font-bold text-md'>
                            <ProductPrice
                              price={item.price * item.quantity}
                              
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className='flex justify-end text-lg my-2'>
                    Subtotal (
                    {items.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                    Items):{' '}
                    <span className='font-bold ml-1'>
                      <ProductPrice price={itemsPrice}  />
                    </span>{' '}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className='rounded-none'>
                <CardContent className='py-4 space-y-4'>
                  <div className='text-md'>
                    Subtotal (
                    {items.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                    items):{' '}
                    <span className='font-bold text-sm'>
                      <ProductPrice price={itemsPrice}  />
                    </span>{' '}
                  </div>
                  <Button
                    onClick={() => router.push('/checkout')}
                    className='rounded-full w-full'
                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
      <BrowsingHistoryList className='mt-10' />
    </div>



//  <div className="min-h-screen bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//     <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
//       {items.length === 0 ? (
//         <Card className="col-span-4 rounded-lg shadow-lg bg-white">
//           <CardHeader className="text-center py-12">
//             <div className="text-4xl font-bold text-gray-800 mb-4">🛒 Your Cart Feels Lonely</div>
//             <ShoppingCartIcon className="h-24 w-24 text-gray-300 mx-auto mb-6" />
//           </CardHeader>
//           <CardContent className="text-center pb-12">
//             <p className="text-lg text-gray-600 mb-6">
//               Discover amazing products in our marketplace!
//             </p>
//             <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
//               Start Shopping
//             </Link>
//           </CardContent>
//         </Card>
//       ) : (
//         <>
//           <div className="md:col-span-3 space-y-6">
//             <Card className="rounded-lg shadow-sm border border-gray-200">
//               <CardHeader className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-end">
//                   <span className="text-sm font-semibold text-gray-600">Price</span>
//                 </div>

//                 {items.map((item) => (
//                   <div
//                     key={item.clientId}
//                     className="group p-6 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200 last:border-0"
//                   >
//                     <div className="flex flex-col md:flex-row gap-6">
//                       <Link href={`/product/${item.slug}`} className="flex-shrink-0">
//                         <div className="relative w-40 h-40 rounded-lg overflow-hidden border border-gray-200 group-hover:shadow-md transition-shadow duration-200">
                          
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             fill
//                             sizes='20vw'
//                             style={{
//                               objectFit: 'contain',
//                             }}
//                           />
                          
//                         </div>
                        
//                       </Link>

//                       <div className="flex-1 flex flex-col justify-between">
//                         <div>
//                           <Link
//                             href={`/product/${item.slug}`}
//                             className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
//                           >
//                             {item.name}
//                           </Link>
//                         </div>

//                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                           <div className="flex items-center gap-3">
//                             <Select
//                               value={item.quantity.toString()}
//                               onValueChange={(value) => updateItem(item, Number(value))}
//                             >
//                               <SelectTrigger className="w-32 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500">
//                                 <SelectValue>
//                                   <span className="text-gray-700">Qty: {item.quantity}</span>
//                                 </SelectValue>
//                               </SelectTrigger>
//                               <SelectContent className="rounded-md shadow-lg border border-gray-200">
//                                 {Array.from({ length: 50 }).map((_, i) => (
//                                   <SelectItem
//                                     key={i + 1}
//                                     value={`${i + 1}`}
//                                     className="hover:bg-gray-100 focus:bg-gray-100"
//                                   >
//                                     {i + 1}
//                                   </SelectItem>
//                                 ))}
//                               </SelectContent>
//                             </Select>
//                             <Button
//                               variant="ghost"
//                               onClick={() => removeItem(item)}
//                               className="text-red-600 hover:bg-red-50 px-3 py-2 rounded-md"
//                             >
//                               <TrashIcon className="h-5 w-5 mr-2" />
//                               Remove
//                             </Button>
//                           </div>
                          
//                           <div className="text-right">
//                             {item.quantity > 1 && (
//                               <div className="text-sm text-gray-500">
//                                 {item.quantity} × <ProductPrice price={item.price} />
//                               </div>
//                             )}
//                             <div className="text-xs  font-semibold text-gray-900">
//                               <ProductPrice price={item.price * item.quantity} />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>

//             <div className="flex justify-end">
//               <Card className="w-full md:w-3/4 rounded-lg shadow-sm border border-gray-200">
//                 <CardContent className="p-6">
//                   <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
//                     <span>
//                       Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items):
//                     </span>
//                     <span>
//                       <ProductPrice price={itemsPrice} />
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           <div className="md:col-span-1">
//             <Card className="rounded-lg shadow-lg border border-blue-100 bg-blue-50 sticky top-6">
//               <CardContent className="p-6">
//                 <div className="mb-4 text-center">
//                   <div className="text-sm text-gray-600 mb-2">
//                     Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items):
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     <ProductPrice price={itemsPrice} />
//                   </div>
//                 </div>
//                 <Button
//                   onClick={() => router.push('/checkout')}
//                   className="w-full py-6 text-lg font-semibold bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-md"
//                 >
//                   Checkout Now
//                   <ArrowRightIcon className="h-5 w-5 ml-2" />
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </>
//       )}
//     </div>
    
//     <div className="mt-10">
//       <BrowsingHistoryList className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" />
//     </div>
//   </div>
// </div> 
  )
}