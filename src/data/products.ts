import { Product } from '../types/product';

export const products: Product[] = [
  // Dining Chairs
  {
    id: 1,
    name: "Modern Dining Chair",
    category: "Dining",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant modern dining chair with premium upholstery",
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Classic Wooden Dining Chair",
    category: "Dining",
    price: 1299,
    image: "https://plus.unsplash.com/premium_photo-1661962693188-029179e87a9e?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Handcrafted wooden dining chair with cushioned seat",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Luxury Velvet Dining Chair",
    category: "Dining",
    price: 1899,
    originalPrice: 2499,
    image: "https://plus.unsplash.com/premium_photo-1683120975679-dbca0a428106?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Plush velvet dining chair with gold metal legs",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  
  // Office Desks
  {
    id: 4,
    name: "Executive Office Desk",
    category: "Office",
    price: 12500,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1762341115993-8b949d576a10?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spacious executive desk with built-in storage",
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 5,
    name: "L-Shaped Corner Desk",
    category: "Office",
    price: 8900,
    image: "https://images.unsplash.com/photo-1719150006658-753737b77211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern L-shaped desk perfect for home office",
    inStock: true,
    rating: 4.5,
    reviews: 98
  },
  {
    id: 6,
    name: "Standing Desk Adjustable",
    category: "Office",
    price: 15999,
    image: "https://images.unsplash.com/photo-1723201964235-ea5b99b55d17?q=80&w=1136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Electric height-adjustable standing desk",
    inStock: true,
    rating: 4.9,
    reviews: 312
  },

  // Office Chairs
  {
    id: 7,
    name: "Ergonomic Office Chair",
    category: "Office",
    price: 5500,
    originalPrice: 7000,
    image: "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium ergonomic chair with lumbar support",
    inStock: true,
    rating: 4.8,
    reviews: 421
  },
  {
    id: 8,
    name: "Executive Leather Chair",
    category: "Office",
    price: 8900,
    image: "https://images.unsplash.com/photo-1688051603470-2945077e752d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Genuine leather executive chair with massage",
    inStock: true,
    rating: 4.7,
    reviews: 267
  },
  {
    id: 9,
    name: "Mesh Back Office Chair",
    category: "Office",
    price: 3500,
    image: "https://images.unsplash.com/photo-1701937188915-ec0dbcbe3963?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Breathable mesh back chair with adjustable arms",
    inStock: true,
    rating: 4.4,
    reviews: 178
  },
  {
    id: 10,
    name: "Gaming Office Chair Pro",
    category: "Office",
    price: 6500,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1701937189060-8b87985d85e1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-back gaming chair with footrest",
    inStock: true,
    rating: 4.6,
    reviews: 534
  },

  // Coffee Tables
  {
    id: 11,
    name: "Modern Glass Coffee Table",
    category: "Living Room",
    price: 4500,
    image: "https://images.unsplash.com/photo-1759722665660-c6ce8cd19ae3?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tempered glass coffee table with metal frame",
    inStock: true,
    rating: 4.5,
    reviews: 145
  },
  {
    id: 12,
    name: "Wooden Round Coffee Table",
    category: "Living Room",
    price: 3500,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1642657547271-722df15ce6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZSUyMG1vZGVybnxlbnwxfHx8fDE3NjQxNjAyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Solid oak round coffee table with storage",
    inStock: true,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 13,
    name: "Marble Top Coffee Table",
    category: "Living Room",
    price: 8900,
    image: "https://images.unsplash.com/photo-1762943483512-3433cfa9569d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxury marble top coffee table with gold legs",
    inStock: true,
    rating: 4.9,
    reviews: 87
  },

  // Bookcases & Cabinets
  {
    id: 14,
    name: "Modern Bookshelf Cabinet",
    category: "Storage",
    price: 6500,
    image: "https://images.unsplash.com/photo-1758977404636-82f318f674ce?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "5-tier bookshelf with cabinet storage",
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 15,
    name: "Floating Wall Cabinet",
    category: "Storage",
    price: 2500,
    originalPrice: 3200,
    image: "https://plus.unsplash.com/premium_photo-1681487834818-369c5e07675a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Space-saving floating wall cabinet",
    inStock: true,
    rating: 4.4,
    reviews: 156
  },
  {
    id: 16,
    name: "Display Cabinet Glass Door",
    category: "Storage",
    price: 7800,
    image: "https://images.unsplash.com/photo-1605972713797-0f20b224371c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBjYWJpbmV0fGVufDF8fHx8MTc2NDE2MDI3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant display cabinet with LED lighting",
    inStock: true,
    rating: 4.8,
    reviews: 112
  },
  {
    id: 17,
    name: "Corner Bookshelf Unit",
    category: "Storage",
    price: 4200,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Space-efficient corner bookshelf unit",
    inStock: true,
    rating: 4.3,
    reviews: 89
  },

  // Sofas
  {
    id: 18,
    name: "3-Seater Luxury Sofa",
    category: "Living Room",
    price: 25000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhfGVufDF8fHx8MTc2NDExMDUxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium leather 3-seater sofa",
    inStock: true,
    rating: 4.9,
    reviews: 287
  },
  {
    id: 19,
    name: "L-Shaped Sectional Sofa",
    category: "Living Room",
    price: 35000,
    image: "https://images.unsplash.com/photo-1759722665610-e13e59aa117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN0aW9uYWwlMjBjb3VjaHxlbnwxfHx8fDE3NjQxNjEwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Spacious L-shaped sectional with chaise",
    inStock: true,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 20,
    name: "Velvet 2-Seater Sofa",
    category: "Living Room",
    price: 18000,
    image: "https://images.unsplash.com/photo-1653340513561-3ef95d9e4d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY291Y2glMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NDE0NjIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Plush velvet 2-seater loveseat",
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 21,
    name: "Recliner Sofa Set",
    category: "Living Room",
    price: 42000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Electric recliner sofa set with cup holders",
    inStock: true,
    rating: 4.9,
    reviews: 423
  },

  // Beds
  {
    id: 22,
    name: "King Size Bed Frame",
    category: "Bedroom",
    price: 15000,
    image: "https://images.unsplash.com/photo-1629230324981-0293a8ae17e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5nJTIwYmVkfGVufDF8fHx8MTc2NDE2MTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Solid wood king size bed with headboard",
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: 23,
    name: "Queen Size Upholstered Bed",
    category: "Bedroom",
    price: 12500,
    originalPrice: 16000,
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant upholstered queen bed with storage",
    inStock: true,
    rating: 4.8,
    reviews: 312
  },
  {
    id: 24,
    name: "Platform Bed with Drawers",
    category: "Bedroom",
    price: 18000,
    image: "https://images.unsplash.com/photo-1669316714681-5fe047de58b1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern platform bed with built-in drawers",
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 25,
    name: "Single Bed Metal Frame",
    category: "Bedroom",
    price: 5500,
    image: "https://plus.unsplash.com/premium_photo-1684175656253-8c08ec031be9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sturdy metal frame single bed",
    inStock: true,
    rating: 4.3,
    reviews: 134
  },

  // Wardrobes
  {
    id: 26,
    name: "Sliding Door Wardrobe",
    category: "Bedroom",
    price: 22000,
    originalPrice: 28000,
    image: "https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwd2FyZHJvYmV8ZW58MXx8fHwxNzY0MTYxMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Large sliding door wardrobe with mirror",
    inStock: true,
    rating: 4.7,
    reviews: 267
  },
  {
    id: 27,
    name: "Walk-In Closet System",
    category: "Bedroom",
    price: 45000,
    image: "https://images.unsplash.com/photo-1723641279715-140a5bb29712?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Complete walk-in closet organization system",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 28,
    name: "4-Door Wardrobe",
    category: "Bedroom",
    price: 18000,
    image: "https://images.unsplash.com/photo-1573311392049-4186e3a47e9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spacious 4-door wardrobe with shelves",
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: 29,
    name: "Corner Wardrobe Unit",
    category: "Bedroom",
    price: 15000,
    originalPrice: 19000,
    image: "https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjQxMzYwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Space-saving corner wardrobe unit",
    inStock: true,
    rating: 4.4,
    reviews: 145
  },

  // Additional Items
  {
    id: 30,
    name: "TV Stand Modern",
    category: "Living Room",
    price: 5500,
    image: "https://plus.unsplash.com/premium_photo-1683133212932-7dd8bd0b2c67?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern TV stand with cable management",
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 31,
    name: "Side Table Nightstand",
    category: "Bedroom",
    price: 2500,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1619311731741-d82f87274198?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Compact nightstand with drawer",
    inStock: true,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 32,
    name: "Dining Table Set 6-Seater",
    category: "Dining",
    price: 18000,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjQxNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete dining table with 6 chairs",
    inStock: true,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 33,
    name: "Bar Stool Set of 2",
    category: "Dining",
    price: 4500,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBzdG9vbHxlbnwxfHx8fDE3NjQxNjEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modern adjustable bar stools",
    inStock: true,
    rating: 4.4,
    reviews: 178
  },
  {
    id: 34,
    name: "Office File Cabinet",
    category: "Office",
    price: 3500,
    originalPrice: 4500,
    image: "https://plus.unsplash.com/premium_photo-1661947515012-df167349cfa2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "3-drawer file cabinet with lock",
    inStock: true,
    rating: 4.2,
    reviews: 167
  },
  {
    id: 35,
    name: "Shoe Rack Cabinet",
    category: "Storage",
    price: 2800,
    image: "https://images.unsplash.com/photo-1708088588197-bd7d8088019a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Multi-tier shoe rack with cabinet",
    inStock: true,
    rating: 4.1,
    reviews: 234
  }
];

export const categories = ["All", "Office", "Living Room", "Bedroom", "Dining", "Storage"];