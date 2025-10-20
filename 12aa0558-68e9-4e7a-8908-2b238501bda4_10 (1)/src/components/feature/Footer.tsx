
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Votre Espace</h2>
              <p className="text-gray-300 text-lg">ne sera plus jamais le même</p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/magasins"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Nos magasins
              </Link>
              <a 
                href="tel:+212660675200"
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                06 60 67 52 00
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Luxalight © 2025</h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <a href="https://web.facebook.com/luxalight.ma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://wa.me/212660675200" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <i className="ri-whatsapp-fill text-xl"></i>
              </a>
              <a href="https://www.instagram.com/luxalight/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCHQmucJSlMd7_Niwz7-9QOw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/luxalight/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://www.tiktok.com/@luxalight.officiel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors duration-200">
                <i className="ri-tiktok-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}