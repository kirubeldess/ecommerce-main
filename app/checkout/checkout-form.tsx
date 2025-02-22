'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import CheckoutFooter from './checkout-footer'
import ProductPrice from '@/components/shared/product/product-price'
import useIsMounted from '@/hooks/use-is-mounted'
import useCartStore from '@/hooks/use-cart-store'
import { ShippingAddressSchema } from '@/lib/validator'
import { ShippingAddress } from '@/types'
import {
  AVAILABLE_PAYMENT_METHODS,
  DEFAULT_PAYMENT_METHOD,
  AVAILABLE_SHOPS,
  DEFAULT_SHOP,
} from '@/lib/constants'
import { toast } from '@/hooks/use-toast'
import { createOrder } from '@/lib/actions/order.actions'

const shippingAddressDefaultValues =
  process.env.NODE_ENV === 'development'
    ? {
        fullName: 'Kirubel',
        phone: '963758686',
        block: '12',
        floor: '2',
        room: '222',
      }
    : {
        fullName: '',
        phone: '',
        block: '',
        floor: '',
        room: '',
      }

const CheckoutForm = () => {
  const router = useRouter()
  const isMounted = useIsMounted()

  const {
    cart: {
      items,
      itemsPrice,
      shippingPrice,
      totalPrice,
      shippingAddress,
      paymentMethod = DEFAULT_PAYMENT_METHOD,
      shopFrom = DEFAULT_SHOP,
    },
    setShippingAddress,
    setPaymentMethod,
    setShopFrom,
    updateItem,
    removeItem,
    clearCart,
  } = useCartStore()

  // We'll use a single step state to manage the flow:
  // 1: Shipping Address, 2: Payment Method & Shop, 3: Order Review
  const [currentStep, setCurrentStep] = useState(1)

  // Shipping address form (step 1)
  const shippingAddressForm = useForm<ShippingAddress>({
    resolver: zodResolver(ShippingAddressSchema),
    defaultValues: shippingAddress || shippingAddressDefaultValues,
  })

  const onSubmitShippingAddress: SubmitHandler<ShippingAddress> = (values) => {
    setShippingAddress(values)
    setCurrentStep(2)
  }

  // When shippingAddress already exists, update the form (optional)
  useEffect(() => {
    if (!isMounted || !shippingAddress) return
    shippingAddressForm.setValue('fullName', shippingAddress.fullName)
    shippingAddressForm.setValue('block', shippingAddress.block)
    shippingAddressForm.setValue('floor', shippingAddress.floor)
    shippingAddressForm.setValue('room', shippingAddress.room)
    shippingAddressForm.setValue('phone', shippingAddress.phone)
  }, [isMounted, shippingAddress, shippingAddressForm])

  const handlePlaceOrder = async () => {
    const res = await createOrder({
        items,
        shippingAddress,
        paymentMethod,
        shopFrom: Array.isArray(shopFrom) ? shopFrom[0] : shopFrom,
        itemsPrice,
        shippingPrice,
        totalPrice,
      })
      if (!res.success) {
        toast({
          description: res.message,
          variant: 'destructive',
        })
      } else {
        toast({
          description: res.message,
          variant: 'default',
        })
        clearCart()
        router.push(`/account/orders/${res.data?.orderId}`)
      }
  }

  return (
    <main className='max-w-6xl mx-auto highlight-link'>
      {currentStep === 1 && (
        <div>
          <h2 className='text-xl font-bold mb-4'>Step 1: Enter Shipping Address</h2>
          <Form {...shippingAddressForm}>
            <form
              onSubmit={shippingAddressForm.handleSubmit(onSubmitShippingAddress)}
              className='space-y-4'
            >
              <Card className='md:ml-8 my-4'>
                <CardContent className='p-4 space-y-2'>
                  <div className='text-lg font-bold mb-2'>Your Address</div>

                  <div className='flex flex-col gap-5 md:flex-row'>
                    <FormField
                      control={shippingAddressForm.control}
                      name='fullName'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter full name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={shippingAddressForm.control}
                      name='block'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Block</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter block' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='flex flex-col gap-5 md:flex-row'>
                    <FormField
                      control={shippingAddressForm.control}
                      name='floor'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Floor</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter floor' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={shippingAddressForm.control}
                      name='room'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Room</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter room' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='flex flex-col gap-5 md:flex-row'>
                    <FormField
                      control={shippingAddressForm.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter phone number' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>

                <CardFooter className='p-4'>
                  <Button type='submit' className='rounded-full font-bold'>
                    Ship to this Address
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className='text-xl font-bold mb-4'>Step 2: Choose Payment Method & Shop</h2>
          <Card className='md:ml-8 my-4'>
            <CardContent className='p-4 space-y-4'>
              <div>
                <div className='font-bold mb-2'>Payment Method</div>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value)}
                >
                  {AVAILABLE_PAYMENT_METHODS.map((pm) => (
                    <div key={pm.name} className='flex items-center py-1'>
                      <RadioGroupItem value={pm.name} id={`payment-${pm.name}`} />
                      <Label
                        className='font-bold pl-2 cursor-pointer'
                        htmlFor={`payment-${pm.name}`}
                      >
                        {pm.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <div className='font-bold mb-2'>Select Shop</div>
                <RadioGroup
                //   value={shopFrom}
                  value={Array.isArray(shopFrom) ? shopFrom[0] : shopFrom}
                  onValueChange={(value) => setShopFrom(value)}
                >
                  {AVAILABLE_SHOPS.map((sh) => (
                    <div key={sh.name} className='flex items-center py-1'>
                      <RadioGroupItem value={sh.name} id={`shop-${sh.name}`} />
                      <Label
                        className='font-bold pl-2 cursor-pointer'
                        htmlFor={`shop-${sh.name}`}
                      >
                        {sh.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>

            <CardFooter className='p-4 flex justify-between'>
              <Button variant='outline' onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                className='rounded-full font-bold'
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2 className='text-xl font-bold mb-4'>Step 3: Review Your Order</h2>
          <div className='space-y-4'>
            {/* Shipping Address Summary */}
            <Card>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-lg'>Shipping Address</div>
                  <Button variant='outline' onClick={() => setCurrentStep(1)}>
                    Change
                  </Button>
                </div>
                {shippingAddress && (
                  <p>
                    {shippingAddress.fullName} <br />
                    {shippingAddress.block} <br />
                    {`${shippingAddress.floor}, ${shippingAddress.room}`} <br />
                    {shippingAddress.phone}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Payment Method Summary */}
            <Card>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-lg'>Payment Method</div>
                  <Button variant='outline' onClick={() => setCurrentStep(2)}>
                    Change
                  </Button>
                </div>
                <p>{paymentMethod}</p>
              </CardContent>
            </Card>

            {/* Shop Summary */}
            <Card>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-lg'>Shop</div>
                  <Button variant='outline' onClick={() => setCurrentStep(2)}>
                    Change
                  </Button>
                </div>
                <p>{shopFrom}</p>
              </CardContent>
            </Card>

            {/* Items and Shipping Summary */}
            <Card>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold text-lg'>Items and Shipping</div>
                  <Button variant='outline' onClick={() => setCurrentStep(2)}>
                    Change
                  </Button>
                </div>
                <ul>
                  {items.map((item, index) => (
                    <li key={index} className='py-2'>
                      <div className='flex items-center gap-4'>
                        <div className='relative w-16 h-16'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes='20vw'
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <div>
                          <p className='font-semibold'>{item.name}</p>
                          <p className='font-bold'>
                            <ProductPrice price={item.price} />
                          </p>
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) => {
                              if (value === '0') removeItem(item)
                              else updateItem(item, Number(value))
                            }}
                          >
                            <SelectTrigger className='w-24'>
                              <SelectValue>Qty: {item.quantity}</SelectValue>
                            </SelectTrigger>
                            <SelectContent position='popper'>
                              {Array.from({ length: 100 }).map((_, i) => (
                                <SelectItem key={i + 1} value={`${i + 1}`}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                              <SelectItem key='delete' value='0'>
                                Delete
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Order Total */}
            <Card>
              <CardContent className='p-4'>
                <div className='flex justify-between'>
                  <span>Items:</span>
                  <span>
                    <ProductPrice price={itemsPrice} />
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping &amp; Handling:</span>
                  <span>
                    {shippingPrice === undefined ? (
                      '--'
                    ) : (
                      <ProductPrice price={shippingPrice} />
                    )}
                  </span>
                </div>
                <div className='flex justify-between pt-4 font-bold text-lg'>
                  <span>Order Total:</span>
                  <span>
                    <ProductPrice price={totalPrice} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='flex justify-between mt-6'>
            <Button variant='outline' onClick={() => setCurrentStep(2)}>
              Back
            </Button>
            <Button onClick={handlePlaceOrder} className='rounded-full'>
              Place Your Order
            </Button>
          </div>
        </div>
      )}

      {/* Desktop summary or footer */}
      <CheckoutFooter />
    </main>
  )
}

export default CheckoutForm
