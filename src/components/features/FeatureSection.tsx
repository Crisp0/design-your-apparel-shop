
import { Palette, Truck, Shield, Zap, Award, Headphones } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Palette,
      title: 'Advanced Design Studio',
      description: 'Professional-grade tools with intuitive interface for creating stunning custom designs',
      color: 'from-elegant-charcoal to-elegant-charcoal-light'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your designs come to life with photorealistic 3D product visualization',
      color: 'from-elegant-stone to-elegant-stone-light'
    },
    {
      icon: Shield,
      title: 'Premium Materials',
      description: 'Sustainably sourced, luxury fabrics with guaranteed durability and comfort',
      color: 'from-elegant-slate to-elegant-slate-light'
    },
    {
      icon: Truck,
      title: 'Express Fulfillment',
      description: 'Lightning-fast production and worldwide shipping with real-time tracking',
      color: 'from-elegant-charcoal to-elegant-stone'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every piece undergoes rigorous quality control before leaving our studio',
      color: 'from-elegant-stone-dark to-elegant-charcoal'
    },
    {
      icon: Headphones,
      title: 'Concierge Support',
      description: 'Dedicated design consultants available 24/7 to bring your vision to life',
      color: 'from-elegant-slate-light to-elegant-stone'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-charcoal">
            The CustomCraft Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
            Experience the perfect fusion of cutting-edge technology, artisan craftsmanship, and premium materials. Every detail is meticulously designed to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 group-hover:text-elegant-charcoal transition-colors duration-300 font-playfair">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-inter text-base">
                {feature.description}
              </p>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-elegant-charcoal/5 to-elegant-stone/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-elegant-stone/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-12 bg-white rounded-full px-12 py-6 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-base font-medium text-gray-700 font-inter">99.8% Satisfaction Rate</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-base font-medium text-gray-700 font-inter">24/7 Premium Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-base font-medium text-gray-700 font-inter">5M+ Orders Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
