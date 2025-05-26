
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Premium Tees',
        'Designer Hoodies',
        'Classic Polos',
        'Luxury Accessories',
        'Gift Collections',
        'Corporate Solutions'
      ]
    },
    {
      title: 'Design Services',
      links: [
        'Custom Design Studio',
        'Professional Templates',
        'Design Consultation',
        'Brand Guidelines',
        'Bulk Orders',
        'White Label'
      ]
    },
    {
      title: 'Customer Care',
      links: [
        'Help Center',
        'Shipping & Returns',
        'Size Guide',
        'Care Instructions',
        'Order Tracking',
        'Contact Support'
      ]
    },
    {
      title: 'Company',
      links: [
        'About CustomCraft',
        'Sustainability',
        'Press & Media',
        'Careers',
        'Partnerships',
        'Investor Relations'
      ]
    }
  ];

  return (
    <footer className="bg-elegant-charcoal text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-elegant-stone to-white flex items-center justify-center">
                <span className="text-elegant-charcoal font-bold text-xl">C</span>
              </div>
              <span className="text-3xl font-playfair font-semibold">
                CustomCraft
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed font-inter">
              Elevating personal style through premium custom apparel. Where craftsmanship meets creativity, and quality exceeds expectations.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-elegant-charcoal-light flex items-center justify-center hover:bg-elegant-stone transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 font-playfair">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-inter hover:translate-x-1 inline-block transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-elegant-charcoal-light mt-16 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-playfair mb-6">Get in Touch</h3>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span className="font-inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span className="font-inter">hello@customcraft.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span className="font-inter">New York, NY 10001</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold font-playfair mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-6 font-inter">Subscribe to receive exclusive offers, design inspiration, and early access to new collections.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-elegant-charcoal-light border border-elegant-stone/20 rounded-l-full focus:outline-none focus:ring-2 focus:ring-elegant-stone focus:border-transparent text-white placeholder-gray-400 font-inter"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-elegant-stone to-elegant-stone-light hover:from-elegant-stone-dark hover:to-elegant-stone text-white rounded-r-full transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-elegant-charcoal-light mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
          <p className="font-inter">&copy; 2024 CustomCraft. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 lg:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200 font-inter">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 font-inter">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200 font-inter">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
