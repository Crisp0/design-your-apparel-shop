
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingCart } from 'lucide-react';

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
  isBestseller?: boolean;
}

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Cotton T-Shirt',
      price: 24.99,
      originalPrice: 29.99,
      image: '/api/placeholder/400/400',
      category: 'T-Shirts',
      colors: ['#000000', '#FFFFFF', '#8B1538', '#9CAF88'],
      rating: 4.8,
      isNew: true,
    },
    {
      id: '2',
      name: 'Essential Hoodie',
      price: 49.99,
      image: '/api/placeholder/400/400',
      category: 'Hoodies',
      colors: ['#000000', '#FFFFFF', '#8B1538', '#9CAF88', '#4A6B6B'],
      rating: 4.9,
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Performance Tank Top',
      price: 19.99,
      image: '/api/placeholder/400/400',
      category: 'Tank Tops',
      colors: ['#000000', '#FFFFFF', '#8B1538'],
      rating: 4.7,
    },
    {
      id: '4',
      name: 'Oversized Sweatshirt',
      price: 39.99,
      originalPrice: 44.99,
      image: '/api/placeholder/400/400',
      category: 'Sweatshirts',
      colors: ['#9CAF88', '#4A6B6B', '#8B1538'],
      rating: 4.6,
    },
    {
      id: '5',
      name: 'Classic Polo Shirt',
      price: 34.99,
      image: '/api/placeholder/400/400',
      category: 'Polo Shirts',
      colors: ['#000000', '#FFFFFF', '#8B1538', '#9CAF88'],
      rating: 4.8,
      isNew: true,
    },
    {
      id: '6',
      name: 'Vintage Tote Bag',
      price: 16.99,
      image: '/api/placeholder/400/400',
      category: 'Accessories',
      colors: ['#000000', '#9CAF88', '#8B1538'],
      rating: 4.9,
      isBestseller: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-burgundy to-brand-sage bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of customizable apparel, perfect for bringing your creative vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-brand-sage text-white">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-brand-burgundy text-white">Bestseller</Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 space-y-2 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Color Options */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-brand-sage font-medium">{product.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-burgundy transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-brand-burgundy">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-brand-sage hover:bg-brand-sage-dark text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
