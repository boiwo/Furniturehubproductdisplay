import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ cartCount, onCartClick, onSearch, searchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
            </Button>
            <div>
              <div className="text-orange-600">ROCKSTART</div>
              <div className="text-xs text-gray-600">FURNITURE HUB</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search furniture..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {/* Cart Button */}
          <Button
            variant="default"
            className="relative bg-orange-600 hover:bg-orange-700"
            onClick={onCartClick}
          >
            <ShoppingCart className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full size-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search furniture..."
            className="w-full pl-10"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
