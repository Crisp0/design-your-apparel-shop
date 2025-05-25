
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import FeatureSection from '@/components/features/FeatureSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
