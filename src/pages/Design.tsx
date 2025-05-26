
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DesignCustomizer from '@/components/design/DesignCustomizer';

const Design = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-elegant-charcoal">
              Design Your Custom Apparel
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload your design and choose the perfect placement on your garment
            </p>
          </div>
          <DesignCustomizer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Design;
