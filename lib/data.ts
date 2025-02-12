import { IProductInput ,Data} from "@/types"
import { toSlug } from "./utils"

const products: IProductInput[] = [
  
  {
    name: 'Teddy Bear',
    slug: toSlug('Teddy Bear'),
    category: 'Kids',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['latest-products'],
    isPublished: true,
    price: 250,
    // listPrice: 0,
    brand: 'Teddy Bear',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    // countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Deoderant',
    slug: toSlug('Deoderant for fresh smell'),
    category: 'Cosmetics',
    images: [
      '/images/p12-1.jpg',
      '/images/p12-2.jpg',
      '/images/p12-3.jpg',
      '/images/p12-4.jpg',
    ],
    tags: ['featured'],
    isPublished: true,
    price: 250,
    // listPrice: 250,
    brand: 'Axe',
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    // countInStock: 12,
    description:
      'Made with sustainably sourced in USA ',

    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Yellow', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: "Organic Honey ",
    slug: toSlug('Pure and natural honey sourced from organic farms'),
    category: 'Food and Groceries',
    brand: 'Tesfaye',
    images: ['/images/p13-1.jpg', '/images/p13-2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 350,
    // listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    // countInStock: 13,
    description:
      'Pure and natural honey sourced from organic farms.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Green', 'White'],

    reviews: [],
  },
  {
    name: 'Pasta',
    slug: toSlug(
      'Healthy and fiber-rich pasta made from whole wheat.'
    ),
    category: 'Food and Groceries',
    brand: 'Boez',
    images: ['/images/p14-1.jpg', '/images/p14-2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 105,
    // listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    // countInStock: 14,
    description:
      'Healthy and fiber-rich pasta made from whole wheat.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Yellow', 'White'],

    reviews: [],
  },
  {
    name: "Eggs",
    slug: toSlug(
      "High-quality, farm-fresh eggs rich in protein"
    ),
    category: 'Food and Groceries',
    brand: '-',
    images: ['/images/p15-1.jpg', '/images/p15-2.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 12,
    // listPrice: 35.99,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    // countInStock: 15,
    description:
      "High-quality, farm-fresh eggs rich in protein ",
    // sizes: ['XL', 'XXL'],
    // colors: ['Green', 'Yellow'],

    reviews: [],
  },
  {
    name: 'Lipstics',
    slug: toSlug('A moisturizing lip balm enriched with shea butter and vitamin E'),
    category: 'Cosmetics',
    brand: 'Victorias',
    images: ['/images/p16-1.jpg', '/images/p16-2.jpg'],
    tags: ['best-seller','featured'],
    isPublished: true,
    price: 30,
    // listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    // countInStock: 16,
    numSales: 56,
    description:
      'A moisturizing lip balm enriched with shea butter and vitamin E.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Grey', 'White'],

    reviews: [],
  },
  // Jeans
  {
    name: 'Diapers',
    slug: toSlug('Diapers for babies'),
    category: 'Kids',
    brand: 'Pampers',
    images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
    tags: ['latest-products'],
    isPublished: true,
    price: 95,
    // listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 54,
    numSales: 21,
    description:
      'Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: "Coloring & Activity Book",
    slug: toSlug(
      "A fun activity book with puzzles, mazes, and stickers."
    ),
    category: 'Kids',
    brand: "Sinarline",
    images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 100,
    // listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 22,
    numSales: 54,
    description:
      'A fun activity book with puzzles, mazes, and stickers.',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Chocolate Bars',
    slug: toSlug('Rich, antioxidant-packed dark chocolate with no added sugar.'),
    category: 'Food and Groceries',
    brand: 'Galaxy',
    images: ['/images/p23-1.jpg', '/images/p23-2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 65,
    // listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 23,
    numSales: 54,
    description:
      'Rich, antioxidant-packed dark chocolate with no added sugar.',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Grey', 'Blue'],

    reviews: [],
  },
  {
    name: "Coca Cola",
    slug: toSlug(
      "Refreshing drink"
    ),
    category: 'Food and Groceries',
    brand: 'Coca Cola',
    images: ['/images/p24-1.jpg', '/images/p24-2.jpg'],
    tags: ['featured','best-seller'],
    isPublished: true,
    price: 35,
    // listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 24,
    numSales: 53,
    description:
      'Refreshing drink',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Mango Juice',
    slug: toSlug('Refrehing Drink'),
    category: 'Food and Groceries',
    brand: '3D',
    images: ['/images/p25-1.jpg', '/images/p25-2.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 40,
    // listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 25,
    numSales: 48,
    description:
      'Refreshing Drink',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
]


const data : Data={
    products,
    headerMenus: [
      {
        name: 'Latest Products',
        href: '/search?tag=latest-products',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
    ],
    carousels: [
      {
        title: 'Best Sellers in Food and Groceries',
        buttonCaption: 'Shop Now',
        image: '/images/foodandbevmain.png',
        url: '/search?category=Food and Groceries',
        isPublished: true,
      },
      {
        title: 'Best Sellers in Accessories',
        buttonCaption: 'Shop Now',
        image: '/images/accessories.png',
        url: '/search?category=Accessories',
        isPublished: true,
      },
      {
        title: 'Best Deals on Cosmetics',
        buttonCaption: 'See More',
        image: '/images/cosmetics-main.png',
        url: '/search?category=Cosmestics',
        isPublished: true,
      },
      {
        title: 'Best Deals on Home Supplies',
        buttonCaption: 'See More',
        image: '/images/homesup.png',
        url: '/search?category=Home Supplies',
        isPublished: true,
      },
      {
        title: 'Best Deals on Kids Products',
        buttonCaption: 'See More',
        image: '/images/kidspro.png',
        url: '/search?category=Kids',
        isPublished: true,
      },
    ],
  }
  
  export default data