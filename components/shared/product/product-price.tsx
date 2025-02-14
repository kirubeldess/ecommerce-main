'use client'
import { cn} from '@/lib/utils'

const ProductPrice = ({
  price,
  className,
}: {
  price: number
  className?: string
}) => {
  const stringValue = price.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']

return (
    <div className={cn('text-xl', className)}>
       {intValue}
       <span className='text-xs align-super'>{floatValue}</span>
       <span className='text-sm font-semibold'>ETB</span>
    </div>
)

}

export default ProductPrice