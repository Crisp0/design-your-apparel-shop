
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'T-Shirts',
        'Hoodies',
        'Tank Tops',
        'Sweatshirts',
        'Accessories',
        'Gift Cards'
      ]
    },
    {
      title: 'Design Tools',
      links: [
        'Design Studio',
        'Templates',
        'Upload Art',
        'Size Guide',
        'Design Tips',
        'File Requirements'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Shipping Info',
        'Returns',
        'Size Guide',
        'Contact Us',
        'Order Status'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Sustainability',
        'Reviews',
        'Blog'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-burgundy to-brand-sage"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-burgundy to-brand-sage bg-clip-text text-transparent">
                CustomWear
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Create custom apparel that tells your story. Premium quality, unlimited creativity, delivered fast.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-burgundy transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest designs and exclusive offers</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-brand-burgundy to-brand-burgundy-light hover:from-brand-burgundy-dark hover:to-brand-burgundy text-white rounded-r-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 CustomWear. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
