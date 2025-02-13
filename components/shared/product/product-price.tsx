'use client'
import { cn} from '@/lib/utils'

const ProductPrice = ({
  price,
  className,
//   listPrice = 0,
//   isDeal = false,
//   forListing = true,
//   plain = false,
}: {
  price: number
//   isDeal?: boolean
//   listPrice?: number
  className?: string
//   forListing?: boolean
//   plain?: boolean
}) => {
  const stringValue = price.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']

return (
    <div className={cn('text-3xl', className)}>
       {intValue}
       <span className='text-xs align-super'>{floatValue}</span>
       <span className='text-sm font-semibold'>ETB</span>
    </div>
)

}

export default ProductPrice