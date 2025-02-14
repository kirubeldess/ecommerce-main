'use client'
import ProductPrice from '@/components/shared/product/product-price'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { CheckCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import useCartStore from '@/hooks/use-cart-store'
import BrowsingHistoryList from '@/components/shared/browsing-history-list'

export default function CartAddItem({ itemId }: { itemId: string }) {
  const {
    cart: { items, itemsPrice },
  } = useCartStore()
  const item = items.find((x) => x.clientId === itemId)

  if (!item) return notFound()
  return (

    <div className="space-y-6">
  <div className="flex flex-col md:flex-row gap-4">
    <Card className="w-full md:w-3/5 shadow-md rounded-lg">
      <CardContent className="flex items-center justify-center gap-4 p-6">
        <Link href={`/product/${item.slug}`} className="flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="rounded-md shadow-md"
          />
        </Link>
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
            <CheckCircle2Icon className="h-6 w-6" />
            Added to Cart
          </h3>
          <p className="text-muted-foreground">{item.name}</p>
        </div>
      </CardContent>
    </Card>

    <Card className="w-full md:w-2/5 shadow-md rounded-lg">
      <CardContent className="p-4 flex flex-col items-center">
        <div className="text-center">
          <span className="text-lg font-semibold">Cart Subtotal:</span>
          <ProductPrice className="text-2xl font-bold text-primary" price={itemsPrice} />
        </div>
        <div className="w-full mt-4 space-y-2">
          <Link href="/checkout" className={cn(buttonVariants(), "w-full rounded-md")}>
            Proceed to Checkout ({items.reduce((a, c) => a + c.quantity, 0)} items)
          </Link>
          <Link href="/cart" className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-md")}>
            Go to Cart
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>

  <BrowsingHistoryList />
</div>

  )
}