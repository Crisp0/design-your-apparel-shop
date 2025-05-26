
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Custom Design', href: '/custom' },
    { name: 'Apparel', href: '/apparel' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-elegant-charcoal to-elegant-stone flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-playfair font-semibold text-elegant-charcoal">
              CustomCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-elegant-charcoal transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-elegant-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-12 pr-4 py-3 w-80 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-elegant-charcoal focus:border-transparent bg-white"
              />
            </div>
            <Button variant="ghost" size="sm" className="relative p-3 hover:bg-gray-50 rounded-full">
              <Heart className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="relative p-3 hover:bg-gray-50 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="relative p-3 hover:bg-gray-50 rounded-full">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-elegant-charcoal border-2 border-white">
                2
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-elegant-charcoal transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <Button variant="ghost" size="sm" className="flex items-center space-x-3 text-gray-600">
                <User className="h-5 w-5" />
                <span>Account</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-3 relative text-gray-600">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <Badge variant="destructive" className="ml-2 bg-elegant-charcoal">2</Badge>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
