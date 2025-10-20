
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const DecoExterieure = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Guirlande LED solaire jardin",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://readdy.ai/api/search-image?query=Solar%20LED%20string%20lights%20for%20garden%20decoration%2C%20warm%20white%20bulbs%2C%20weatherproof%20outdoor%20fairy%20lights%2C%20festive%20patio%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=31&orientation=squarish",
      rating: 4.7,
      reviews: 234,
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Lanterne décorative LED",
      price: 45.99,
      image: "https://readdy.ai/api/search-image?query=Decorative%20LED%20lantern%20for%20outdoor%20use%2C%20vintage%20metal%20design%20with%20warm%20light%2C%20portable%20garden%20decoration%2C%20battery%20operated%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=32&orientation=squarish",
      rating: 4.6,
      reviews: 156
    },
    {
      id: 3,
      name: "Projecteur couleur RGB",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=RGB%20color%20changing%20outdoor%20projector%20light%2C%20smart%20WiFi%20control%2C%20waterproof%20landscape%20lighting%2C%20party%20and%20event%20decoration%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=33&orientation=squarish",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 4,
      name: "Boule lumineuse flottante",
      price: 67.99,
      image: "https://readdy.ai/api/search-image?query=Floating%20LED%20sphere%20light%20for%20pool%20and%20garden%2C%20waterproof%20glowing%20orb%2C%20color%20changing%20outdoor%20decoration%2C%20modern%20landscape%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=34&orientation=squarish",
      rating: 4.5,
      reviews: 98
    },
    {
      id: 5,
      name: "Étoiles laser projection",
      price: 125.99,
      image: "https://readdy.ai/api/search-image?query=Laser%20star%20projector%20for%20outdoor%20decoration%2C%20moving%20stars%20and%20patterns%2C%20Christmas%20and%20holiday%20lighting%2C%20weatherproof%20projection%20light%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=35&orientation=squarish",
      rating: 4.4,
      reviews: 167
    },
    {
      id: 6,
      name: "Flamme LED réaliste",
      price: 78.99,
      image: "https://readdy.ai/api/search-image?query=Realistic%20LED%20flame%20light%20for%20outdoor%20decoration%2C%20flickering%20fire%20effect%2C%20solar%20powered%20torch%20light%2C%20garden%20pathway%20decoration%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=36&orientation=squarish",
      rating: 4.9,
      reviews: 278
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Décoration Extérieure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez vos espaces extérieurs en véritables œuvres d'art avec nos éclairages décoratifs créatifs.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtres</h3>
              
              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trier par
                </label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="featured">Mis en avant</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                  <option value="newest">Plus récents</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gamme de prix
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                </div>
              </div>

              {/* Type */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Type</h4>
                <div className="space-y-2">
                  {['Guirlandes', 'Lanternes', 'Projecteurs', 'Boules lumineuses', 'Flammes LED', 'Étoiles laser'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Power Source */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Alimentation</h4>
                <div className="space-y-2">
                  {['Solaire', 'Batterie', 'Secteur', 'USB', 'Rechargeable'].map((power) => (
                    <label key={power} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{power}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Fonctionnalités</h4>
                <div className="space-y-2">
                  {['Changement de couleur', 'Télécommande', 'WiFi/Smart', 'Timer', 'Détecteur mouvement'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Occasion</h4>
                <div className="space-y-2">
                  {['Quotidien', 'Fêtes', 'Noël', 'Été', 'Mariage'].map((occasion) => (
                    <label key={occasion} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {products.length} produits trouvés
              </p>
              <div className="flex items-center space-x-2">
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <i className="ri-grid-line"></i>
                </button>
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <i className="ri-list-check"></i>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50">
                  <i className="ri-arrow-left-line"></i>
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 border rounded-md ${
                      page === 1 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DecoExterieure;
