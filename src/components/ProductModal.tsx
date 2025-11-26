import { Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from '../types/product';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">
                -{discount}% OFF
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <Badge variant="outline">{product.category}</Badge>

            <div>
              <h2 className="mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-orange-600">
                  Ksh {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    Ksh {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <p className="text-sm text-green-600">
                  You save Ksh {(product.originalPrice! - product.price).toLocaleString()}!
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="size-3 rounded-full bg-green-500" />
                  <span className="text-sm text-green-600">In Stock</span>
                </>
              ) : (
                <>
                  <div className="size-3 rounded-full bg-red-500" />
                  <span className="text-sm text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-sm">Features:</h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="size-4 text-green-600" />
                  Free delivery within Nairobi
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="size-4 text-green-600" />
                  Professional assembly available
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="size-4 text-green-600" />
                  1-year warranty included
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="size-4 text-green-600" />
                  Easy returns within 7 days
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              disabled={!product.inStock}
            >
              <ShoppingCart className="size-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
