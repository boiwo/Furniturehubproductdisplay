from app import app, db
from models import Product

# Full list of 35 products
products_data = [
    # Dining Chairs
    {"name": "Modern Dining Chair", "category": "Dining", "price": 899, "original_price": 1299,
     "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=735&auto=format&fit=crop",
     "description": "Elegant modern dining chair with premium upholstery", "in_stock": True, "rating": 4.8, "reviews": 124},
    {"name": "Classic Wooden Dining Chair", "category": "Dining", "price": 1299, "original_price": 0,
     "image": "https://plus.unsplash.com/premium_photo-1661962693188-029179e87a9e?q=80&w=996&auto=format&fit=crop",
     "description": "Handcrafted wooden dining chair with cushioned seat", "in_stock": True, "rating": 4.6, "reviews": 89},
    {"name": "Luxury Velvet Dining Chair", "category": "Dining", "price": 1899, "original_price": 2499,
     "image": "https://plus.unsplash.com/premium_photo-1683120975679-dbca0a428106?q=80&w=870&auto=format&fit=crop",
     "description": "Plush velvet dining chair with gold metal legs", "in_stock": True, "rating": 4.9, "reviews": 156},

    # Office Desks
    {"name": "Executive Office Desk", "category": "Office", "price": 12500, "original_price": 15000,
     "image": "https://images.unsplash.com/photo-1762341115993-8b949d576a10?q=80&w=870&auto=format&fit=crop",
     "description": "Spacious executive desk with built-in storage", "in_stock": True, "rating": 4.7, "reviews": 203},
    {"name": "L-Shaped Corner Desk", "category": "Office", "price": 8900, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1719150006658-753737b77211?q=80&w=687&auto=format&fit=crop",
     "description": "Modern L-shaped desk perfect for home office", "in_stock": True, "rating": 4.5, "reviews": 98},
    {"name": "Standing Desk Adjustable", "category": "Office", "price": 15999, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1723201964235-ea5b99b55d17?q=80&w=1136&auto=format&fit=crop",
     "description": "Electric height-adjustable standing desk", "in_stock": True, "rating": 4.9, "reviews": 312},

    # Office Chairs
    {"name": "Ergonomic Office Chair", "category": "Office", "price": 5500, "original_price": 7000,
     "image": "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=687&auto=format&fit=crop",
     "description": "Premium ergonomic chair with lumbar support", "in_stock": True, "rating": 4.8, "reviews": 421},
    {"name": "Executive Leather Chair", "category": "Office", "price": 8900, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1688051603470-2945077e752d?q=80&w=687&auto=format&fit=crop",
     "description": "Genuine leather executive chair with massage", "in_stock": True, "rating": 4.7, "reviews": 267},
    {"name": "Mesh Back Office Chair", "category": "Office", "price": 3500, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1701937188915-ec0dbcbe3963?q=80&w=765&auto=format&fit=crop",
     "description": "Breathable mesh back chair with adjustable arms", "in_stock": True, "rating": 4.4, "reviews": 178},
    {"name": "Gaming Office Chair Pro", "category": "Office", "price": 6500, "original_price": 8500,
     "image": "https://images.unsplash.com/photo-1701937189060-8b87985d85e1?q=80&w=764&auto=format&fit=crop",
     "description": "High-back gaming chair with footrest", "in_stock": True, "rating": 4.6, "reviews": 534},

    # Coffee Tables
    {"name": "Modern Glass Coffee Table", "category": "Living Room", "price": 4500, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1759722665660-c6ce8cd19ae3?q=80&w=754&auto=format&fit=crop",
     "description": "Tempered glass coffee table with metal frame", "in_stock": True, "rating": 4.5, "reviews": 145},
    {"name": "Wooden Round Coffee Table", "category": "Living Room", "price": 3500, "original_price": 4500,
     "image": "https://images.unsplash.com/photo-1642657547271-722df15ce6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Solid oak round coffee table with storage", "in_stock": True, "rating": 4.7, "reviews": 198},
    {"name": "Marble Top Coffee Table", "category": "Living Room", "price": 8900, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1762943483512-3433cfa9569d?q=80&w=735&auto=format&fit=crop",
     "description": "Luxury marble top coffee table with gold legs", "in_stock": True, "rating": 4.9, "reviews": 87},

    # Bookcases & Cabinets
    {"name": "Modern Bookshelf Cabinet", "category": "Storage", "price": 6500, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1758977404636-82f318f674ce?q=80&w=754&auto=format&fit=crop",
     "description": "5-tier bookshelf with cabinet storage", "in_stock": True, "rating": 4.6, "reviews": 234},
    {"name": "Floating Wall Cabinet", "category": "Storage", "price": 2500, "original_price": 3200,
     "image": "https://plus.unsplash.com/premium_photo-1681487834818-369c5e07675a?q=80&w=870&auto=format&fit=crop",
     "description": "Space-saving floating wall cabinet", "in_stock": True, "rating": 4.4, "reviews": 156},
    {"name": "Display Cabinet Glass Door", "category": "Storage", "price": 7800, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1605972713797-0f20b224371c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Elegant display cabinet with LED lighting", "in_stock": True, "rating": 4.8, "reviews": 112},
    {"name": "Corner Bookshelf Unit", "category": "Storage", "price": 4200, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1139&auto=format&fit=crop",
     "description": "Space-efficient corner bookshelf unit", "in_stock": True, "rating": 4.3, "reviews": 89},

    # Sofas
    {"name": "3-Seater Luxury Sofa", "category": "Living Room", "price": 25000, "original_price": 32000,
     "image": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Premium leather 3-seater sofa", "in_stock": True, "rating": 4.9, "reviews": 287},
    {"name": "L-Shaped Sectional Sofa", "category": "Living Room", "price": 35000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1759722665610-e13e59aa117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Spacious L-shaped sectional with chaise", "in_stock": True, "rating": 4.8, "reviews": 345},
    {"name": "Velvet 2-Seater Sofa", "category": "Living Room", "price": 18000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1653340513561-3ef95d9e4d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Plush velvet 2-seater loveseat", "in_stock": True, "rating": 4.6, "reviews": 178},
    {"name": "Recliner Sofa Set", "category": "Living Room", "price": 42000, "original_price": 55000,
     "image": "https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?q=80&w=1074&auto=format&fit=crop",
     "description": "Electric recliner sofa set with cup holders", "in_stock": True, "rating": 4.9, "reviews": 423},

    # Beds
    {"name": "King Size Bed Frame", "category": "Bedroom", "price": 15000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1629230324981-0293a8ae17e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Solid wood king size bed with headboard", "in_stock": True, "rating": 4.7, "reviews": 256},
    {"name": "Queen Size Upholstered Bed", "category": "Bedroom", "price": 12500, "original_price": 16000,
     "image": "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=786&auto=format&fit=crop",
     "description": "Elegant upholstered queen bed with storage", "in_stock": True, "rating": 4.8, "reviews": 312},
    {"name": "Platform Bed with Drawers", "category": "Bedroom", "price": 18000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1669316714681-5fe047de58b1?q=80&w=1160&auto=format&fit=crop",
     "description": "Modern platform bed with built-in drawers", "in_stock": True, "rating": 4.6, "reviews": 189},
    {"name": "Single Bed Metal Frame", "category": "Bedroom", "price": 5500, "original_price": 0,
     "image": "https://plus.unsplash.com/premium_photo-1684175656253-8c08ec031be9?q=80&w=870&auto=format&fit=crop",
     "description": "Sturdy metal frame single bed", "in_stock": True, "rating": 4.3, "reviews": 134},

    # Wardrobes
    {"name": "Sliding Door Wardrobe", "category": "Bedroom", "price": 22000, "original_price": 28000,
     "image": "https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Large sliding door wardrobe with mirror", "in_stock": True, "rating": 4.7, "reviews": 267},
    {"name": "Walk-In Closet System", "category": "Bedroom", "price": 45000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1723641279715-140a5bb29712?q=80&w=735&auto=format&fit=crop",
     "description": "Complete walk-in closet organization system", "in_stock": True, "rating": 4.9, "reviews": 156},
    {"name": "4-Door Wardrobe", "category": "Bedroom", "price": 18000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1573311392049-4186e3a47e9c?q=80&w=870&auto=format&fit=crop",
     "description": "Spacious 4-door wardrobe with shelves", "in_stock": True, "rating": 4.5, "reviews": 198},
    {"name": "Corner Wardrobe Unit", "category": "Bedroom", "price": 15000, "original_price": 19000,
     "image": "https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Space-saving corner wardrobe unit", "in_stock": True, "rating": 4.4, "reviews": 145},

    # Dining Tables + Bar Stools (Added)
    {"name": "Dining Table Set 6-Seater", "category": "Dining", "price": 18000, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Complete dining table with 6 chairs", "in_stock": True, "rating": 4.8, "reviews": 289},
    {"name": "Bar Stool Set of 2", "category": "Dining", "price": 4500, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
     "description": "Modern adjustable bar stools", "in_stock": True, "rating": 4.4, "reviews": 178},

    # Extras
    {"name": "Office File Cabinet", "category": "Office", "price": 3500, "original_price": 4500,
     "image": "https://plus.unsplash.com/premium_photo-1661947515012-df167349cfa2?q=80&w=1631&auto=format&fit=crop",
     "description": "3-drawer file cabinet with lock", "in_stock": True, "rating": 4.2, "reviews": 167},
    {"name": "Shoe Rack Cabinet", "category": "Storage", "price": 2800, "original_price": 0,
     "image": "https://images.unsplash.com/photo-1708088588197-bd7d8088019a?q=80&w=688&auto=format&fit=crop",
     "description": "Multi-tier shoe rack with cabinet", "in_stock": True, "rating": 4.1, "reviews": 234},
]

# Seeder Logic
with app.app_context():
    print("🧹 Clearing old products...")
    Product.query.delete()
    db.session.commit()

    print(f"🌱 Seeding {len(products_data)} products...")
    for data in products_data:
        db.session.add(Product(**data))
    db.session.commit()

    print("✅ Successfully seeded all products!")
