import { X, Plus, Minus, Trash2, CheckCircle } from 'lucide-react';
import { CartItem } from '../types/product';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const handleMakeOrder = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
      setOrderSuccess(false);
      onClose();
    }, 3000);
  };

  if (orderSuccess) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <CheckCircle className="size-24 text-green-600" />
            <div className="space-y-2">
              <h2 className="text-green-600">Order Successful!</h2>
              <p className="text-gray-600">
                Thank you for your purchase at ROCKSTART FURNITURE HUB
              </p>
              <p className="text-sm text-gray-500">
                Your order has been placed successfully. We'll contact you shortly for delivery details.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg w-full">
              <p className="text-sm">Order Total: <span className="text-green-600">Ksh {total.toLocaleString()}</span></p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length} items)</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button onClick={onClose} className="bg-orange-600 hover:bg-orange-700">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="size-20 object-cover rounded"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-orange-600">
                      Ksh {item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-orange-600">Ksh {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Make Order Button */}
            <Button 
              className="w-full bg-orange-600 hover:bg-orange-700"
              onClick={handleMakeOrder}
            >
              Make Order
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}