import { categories } from '../data/products';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
}: FilterSidebarProps) {
  return (
    <aside className="w-full md:w-64 space-y-6 bg-white p-6 rounded-lg border border-gray-200">
      {/* Categories */}
      <div>
        <h3 className="mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`w-full justify-start ${
                selectedCategory === category ? 'bg-orange-600 hover:bg-orange-700' : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={50000}
            step={1000}
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange(value as [number, number])}
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Ksh {priceRange[0].toLocaleString()}</span>
            <span>Ksh {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="mb-4">Sort By</h3>
        <RadioGroup value={sortBy} onValueChange={onSortChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="featured" id="featured" />
            <Label htmlFor="featured">Featured</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-low" id="price-low" />
            <Label htmlFor="price-low">Price: Low to High</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-high" id="price-high" />
            <Label htmlFor="price-high">Price: High to Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rating" id="rating" />
            <Label htmlFor="rating">Highest Rated</Label>
          </div>
        </RadioGroup>
      </div>
    </aside>
  );
}
