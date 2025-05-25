
import { Palette, Truck, Shield, Zap } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Palette,
      title: 'Design Studio',
      description: 'Upload your designs or create from scratch with our intuitive editor',
      color: 'from-brand-burgundy to-brand-burgundy-light'
    },
    {
      icon: Zap,
      title: 'Instant Preview',
      description: 'See your design come to life with real-time 3D product previews',
      color: 'from-brand-sage to-brand-sage-light'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'High-quality materials and professional printing guaranteed',
      color: 'from-brand-teal to-brand-teal-light'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick production and shipping, your custom apparel in days',
      color: 'from-brand-burgundy to-brand-sage'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-burgundy to-brand-sage bg-clip-text text-transparent">
              Why Choose CustomWear?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with premium materials to deliver the best custom apparel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-brand-burgundy transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy/5 to-brand-sage/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-700">99% Customer Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-gray-700">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm font-medium text-gray-700">1M+ Orders Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
