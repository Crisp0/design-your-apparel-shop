
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Shop All', href: '/products' },
    { name: 'T-Shirts', href: '/products/t-shirts' },
    { name: 'Hoodies', href: '/products/hoodies' },
    { name: 'Tank Tops', href: '/products/tanks' },
    { name: 'Accessories', href: '/products/accessories' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-burgundy to-brand-sage"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-burgundy to-brand-sage bg-clip-text text-transparent">
              CustomWear
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-burgundy transition-colors duration-200 hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent"
              />
            </div>
            <Button variant="ghost" size="sm" className="relative hover:bg-brand-sage/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative hover:bg-brand-sage/10">
              <ShoppingCart className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-brand-burgundy">
                3
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand-burgundy transition-colors duration-200 px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 relative">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                <Badge variant="destructive" className="ml-2 bg-brand-burgundy">3</Badge>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
