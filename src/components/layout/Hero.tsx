import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gray-100" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-sm">
              <Sparkles className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Premium Custom Design Studio</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Craft Your
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
                Signature
              </span>
              <br />
              Style
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Elevate your wardrobe with premium custom apparel. Our sophisticated design tools and luxury materials transform your vision into wearable art.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/design')}
              >
                Start Creating
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
              >
                <PlayCircle className="mr-3 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-12 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-500">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Design Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">48h</div>
                <div className="text-sm text-gray-500">Express Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-600/10 rounded-3xl transform rotate-2 blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-56 h-56 bg-gradient-to-br from-gray-900 to-gray-600 rounded-2xl flex items-center justify-center text-white text-xl font-semibold shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl mb-2">Your Design</div>
                    <div className="text-sm opacity-80">Premium Quality</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 text-gray-700" />
                </div>
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Premium Cotton Tee</span>
                    <div className="text-2xl font-bold text-gray-900">$34.99</div>
                  </div>
                  <div className="flex space-x-2">
                    {['#2C3E50', '#95A5A6', '#ECF0F1'].map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <Button 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-full py-3 font-medium"
                  onClick={() => navigate('/design')}
                >
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
