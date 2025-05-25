
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-sage/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-sage/20">
              <Sparkles className="h-4 w-4 text-brand-burgundy" />
              <span className="text-sm font-medium text-brand-burgundy">Custom Design Studio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-brand-burgundy via-brand-burgundy to-brand-sage bg-clip-text text-transparent">
                Create
              </span>
              <br />
              <span className="text-gray-900">Your Style</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Design custom apparel with our intuitive editor. Upload your art, choose premium materials, and bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-burgundy to-brand-burgundy-light hover:from-brand-burgundy-dark hover:to-brand-burgundy text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Designing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-white transition-all duration-300"
              >
                Browse Products
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-burgundy">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-burgundy">50+</div>
                <div className="text-sm text-gray-600">Product Options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-burgundy">24h</div>
                <div className="text-sm text-gray-600">Fast Production</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy/20 to-brand-sage/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-brand-sage/10 to-brand-burgundy/10 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-brand-burgundy to-brand-sage rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  Your Design Here
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Custom T-Shirt</span>
                  <span className="text-lg font-bold text-brand-burgundy">$24.99</span>
                </div>
                <Button className="w-full bg-brand-sage hover:bg-brand-sage-dark text-white">
                  Customize Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
