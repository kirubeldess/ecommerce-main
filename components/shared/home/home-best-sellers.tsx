import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardItem = {
  title: string
  link: { text: string; href: string }
  items: {
    name: string
    items?: string[]
    image: string
    href: string
  }[]
}

export function HomeBestSellers({ bestSales }: { bestSales: CardItem[] }) {
  return (
    <div className="from-primary/5 to-primary/10 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {bestSales.map((bestSale) => (
          <div 
            key={bestSale.title}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <h3 className="text-3xl font-extrabold text-center mb-12 text-primary relative pb-4">
              {bestSale.title}
              <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-primary/30 -translate-x-1/2 rounded-full"></span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {bestSale.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col items-center w-28 sm:w-32 md:w-40 transition-transform duration-200"
                >
                  <div className="relative bg-primary/5 rounded-lg p-3 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={36}
                      width={36}
                      className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 text-center font-medium text-gray-700 group-hover:text-primary transition-colors duration-300 text-xs sm:text-sm line-clamp-2">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

            {bestSale.link && (
              <div className="mt-8 text-center">
                <Link
                  href={bestSale.link.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                >
                  {bestSale.link.text}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
