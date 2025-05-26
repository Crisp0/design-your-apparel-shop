
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: string[];
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'Essential Premium Tee',
      price: 34.99,
      originalPrice: 42.99,
      image: '/api/placeholder/500/600',
      category: 'Essentials',
      colors: ['#2C3E50', '#FFFFFF', '#95A5A6', '#ECF0F1'],
      rating: 4.9,
      isNew: true,
    },
    {
      id: '2',
      name: 'Luxury Cashmere Hoodie',
      price: 89.99,
      image: '/api/placeholder/500/600',
      category: 'Premium',
      colors: ['#2C3E50', '#95A5A6', '#5D6D7E', '#34495E'],
      rating: 4.8,
      isFeatured: true,
    },
    {
      id: '3',
      name: 'Minimal Tank Top',
      price: 24.99,
      image: '/api/placeholder/500/600',
      category: 'Basics',
      colors: ['#FFFFFF', '#2C3E50', '#95A5A6'],
      rating: 4.7,
    },
    {
      id: '4',
      name: 'Designer Sweatshirt',
      price: 64.99,
      originalPrice: 79.99,
      image: '/api/placeholder/500/600',
      category: 'Designer',
      colors: ['#34495E', '#5D6D7E', '#95A5A6'],
      rating: 4.8,
    },
    {
      id: '5',
      name: 'Signature Polo',
      price: 49.99,
      image: '/api/placeholder/500/600',
      category: 'Classic',
      colors: ['#2C3E50', '#FFFFFF', '#95A5A6', '#5D6D7E'],
      rating: 4.9,
      isNew: true,
    },
    {
      id: '6',
      name: 'Canvas Tote Bag',
      price: 22.99,
      image: '/api/placeholder/500/600',
      category: 'Accessories',
      colors: ['#ECF0F1', '#95A5A6', '#2C3E50'],
      rating: 4.6,
      isFeatured: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-charcoal">
            Curated Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Discover our handpicked selection of premium apparel, each piece crafted with meticulous attention to detail and designed for the discerning individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-elegant-charcoal text-white rounded-full px-3 py-1 text-xs font-medium">
                      New
                    </Badge>
                  )}
                  {product.isFeatured && (
                    <Badge className="bg-elegant-stone text-white rounded-full px-3 py-1 text-xs font-medium">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-6 right-6 space-y-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <Button size="sm" variant="secondary" className="h-12 w-12 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-12 w-12 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                    <Eye className="h-5 w-5" />
                  </Button>
                </div>

                {/* Color Options */}
                <div className={`absolute bottom-6 left-6 flex space-x-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {product.colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border-3 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-sm text-elegant-stone font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-elegant-charcoal transition-colors duration-200 font-playfair">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-3 text-sm text-gray-600 font-inter">({product.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-elegant-charcoal font-playfair">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through font-inter">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-elegant-stone hover:bg-elegant-stone-dark text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-elegant-charcoal text-elegant-charcoal hover:bg-elegant-charcoal hover:text-white px-10 py-4 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105"
          >
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
