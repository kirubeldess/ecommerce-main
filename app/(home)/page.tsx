// import data from "@/lib/data";

// export default function Home() {
  //   return (
    //     <HomeCarousel items={data.carousels}/>
    //   );
    // }
    
    
    import { HomeCarousel } from "@/components/shared/home/home-carousel";
import { HomeCard } from '@/components/shared/home/home-card'
// import { HomeCarousel } from '@/components/shared/home/home-carousel'
// import { Card, CardContent } from '@/components/ui/card'
// import { getAllCategories, getProductsForCard } from '@/lib/actions/product.actions'
import { toSlug } from '@/lib/utils'
import data from "@/lib/data";
import { getAllCategories,getProductsByTag,getProductsForCard} from "@/lib/actions/product.actions";
import { HomeLatestCard } from "@/components/shared/home/home-latest-card";
import { HomeBestSellers } from "@/components/shared/home/home-best-sellers";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/shared/product/product-slider";
import BrowsingHistoryList from "@/components/shared/browsing-history-list";


export default async function HomePage() {
  const categories = (await getAllCategories()).slice(0, 5)
  const newArrivals = await getProductsForCard({
    tag: 'latest-products',
    limit: 4,
  })
  // const featureds = await getProductsForCard({
  //   tag: 'featured',
  //   limit: 4,
  // })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
    limit: 4,
  })
  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}-cat.png`,
        href: `/search?category=${category}`,
      })),
    },
    // {
    //   title: 'Explore New Arrivals',
    //   items: newArrivals,
    //   link: {
    //     text: 'View All',
    //     href: '/search?tag=latest-products',
    //   },
    // },
    // {
    //   title: 'Discover Best Sellers',
    //   items: bestSellers,
    //   link: {
    //     text: 'View All',
    //     href: '/search?tag=latest-products',
    //   },
    // },
    // {
    //   title: 'Featured Products',
    //   items: featureds,
    //   link: {
    //     text: 'Shop Now',
    //     href: '/search?tag=latest-products',
    //   },
    // },
  ]
  const latCards = [
    {
         title: 'Explore New Arrivals',
         items: newArrivals,
         link: {
           text: 'View All',
           href: '/search?tag=latest-products',
         },
     },
  ]
  const bestSales=[
    {
      title: 'Discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View All',
        href: '/search?tag=latest-products',
      },
    }
  ]

  const bestSellingProducts = await getProductsByTag({tag: 'best-seller'})
  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-2 bg-white items-center '>
        <HomeCard cards={cards} />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <HomeLatestCard latCards={latCards} />
          </div>
          <div className="flex-1">
            <HomeBestSellers bestSales={bestSales} />
          </div>
        </div>
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider 
              title="Best Selling Products"
              products={bestSellingProducts}
              // hideDetails
            />
          </CardContent>
        </Card>
      </div>
      <div className="p-4 bg-background">
        <BrowsingHistoryList/>
      </div>
    </>
  )
}