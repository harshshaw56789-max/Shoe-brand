import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'StrideX Velocity Pro',
    price: 189.99,
    description: 'Engineered for elite runners, the Velocity Pro features our proprietary AeroFoam technology for maximum energy return and a breathable mesh upper for long-distance comfort.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Neon Green', hex: '#39FF14' },
      { name: 'Stealth Black', hex: '#000000' }
    ],
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: '2',
    name: 'Urban Glide X',
    price: 129.99,
    description: 'The ultimate everyday sneaker. Minimalist design meets premium leather craftsmanship. Perfect for the modern urban explorer.',
    category: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: 'Cloud White', hex: '#FFFFFF' },
      { name: 'Ash Grey', hex: '#808080' }
    ],
    rating: 4.6,
    reviews: 89,
    featured: true
  },
  {
    id: '3',
    name: 'Court Master Elite',
    price: 159.99,
    description: 'Dominate the court with superior lateral support and high-traction outsoles. Designed for professional basketball performance.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    colors: [
      { name: 'Royal Blue', hex: '#002366' },
      { name: 'Fire Red', hex: '#FF0000' }
    ],
    rating: 4.9,
    reviews: 56
  },
  {
    id: '4',
    name: 'Zenith Knit',
    price: 110.00,
    description: 'Lightweight, flexible, and effortlessly stylish. The Zenith Knit uses recycled materials to create a sock-like fit for all-day wear.',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: 'Midnight', hex: '#191970' },
      { name: 'Sand', hex: '#C2B280' }
    ],
    rating: 4.5,
    reviews: 210
  },
  {
    id: '5',
    name: 'StrideX Apex Trail',
    price: 175.00,
    description: 'Conquer any terrain with the Apex Trail. Featuring rugged lugs and a waterproof membrane for the ultimate outdoor adventure.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Earth Brown', hex: '#5D4037' }
    ],
    rating: 4.7,
    reviews: 42
  },
  {
    id: '6',
    name: 'Retro Pulse 90',
    price: 145.00,
    description: 'A throwback to the golden era of sneakers. Bold colors and chunky silhouettes meet modern comfort technology.',
    category: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: 'Multi-Color', hex: '#FFD700' },
      { name: 'Classic White', hex: '#FFFFFF' }
    ],
    rating: 4.8,
    reviews: 156,
    featured: true
  },
  {
    id: '7',
    name: 'Aero Lift Training',
    price: 135.00,
    description: 'Optimized for high-intensity interval training and weightlifting. Stable base with responsive cushioning.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Electric Blue', hex: '#7DF9FF' },
      { name: 'Carbon', hex: '#333333' }
    ],
    rating: 4.6,
    reviews: 78
  },
  {
    id: '8',
    name: 'Luxe Loafer Hybrid',
    price: 195.00,
    description: 'The comfort of a sneaker with the sophistication of a loafer. Hand-stitched premium suede for the discerning gentleman.',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: 'Tan', hex: '#D2B48C' },
      { name: 'Navy', hex: '#000080' }
    ],
    rating: 4.9,
    reviews: 34
  },
  {
    id: '9',
    name: 'StrideX Marathon Pro',
    price: 220.00,
    description: 'Our most advanced racing shoe yet. Carbon-fiber plate for explosive propulsion and ultra-lightweight construction.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: 'Hyper Orange', hex: '#FF4500' },
      { name: 'Volt', hex: '#CEFF00' }
    ],
    rating: 5.0,
    reviews: 18
  },
  {
    id: '10',
    name: 'Street Icon High',
    price: 150.00,
    description: 'High-top silhouette that defines street culture. Durable canvas and vulcanized rubber sole.',
    category: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1520316587275-5e4f06f35f16?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520316587275-5e4f06f35f16?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Black/White', hex: '#000000' },
      { name: 'Red/White', hex: '#FF0000' }
    ],
    rating: 4.7,
    reviews: 342
  },
  {
    id: '11',
    name: 'Grip Master Golf',
    price: 165.00,
    description: 'Spikeless performance for the green. Waterproof leather and specialized traction pattern for a stable swing.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1535043902736-dc45684dfc27?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535043902736-dc45684dfc27?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Platinum', hex: '#E5E4E2' }
    ],
    rating: 4.5,
    reviews: 52
  },
  {
    id: '12',
    name: 'Cloud Walker Slip-on',
    price: 95.00,
    description: 'The easiest shoe you will ever own. Breathable mesh and memory foam insole for ultimate convenience.',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: 'Slate', hex: '#708090' },
      { name: 'Charcoal', hex: '#36454F' }
    ],
    rating: 4.4,
    reviews: 128
  }
];
