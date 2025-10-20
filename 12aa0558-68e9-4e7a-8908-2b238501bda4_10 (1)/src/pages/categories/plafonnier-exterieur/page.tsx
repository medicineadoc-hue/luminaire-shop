
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const PlafonnierExterieur = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Plafonnier extérieur LED détecteur",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://readdy.ai/api/search-image?query=Outdoor%20ceiling%20light%20with%20motion%20sensor%2C%20LED%20technology%2C%20white%20round%20design%2C%20weatherproof%20housing%20for%20porch%20and%20patio%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=19&orientation=squarish",
      rating: 4.8,
      reviews: 156,
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Plafonnier étanche IP65",
      price: 67.99,
      image: "https://readdy.ai/api/search-image?query=Waterproof%20outdoor%20ceiling%20light%20IP65%20rated%2C%20black%20aluminum%20construction%2C%20flush%20mount%20design%2C%20marine%20grade%20lighting%20fixture%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=20&orientation=squarish",
      rating: 4.6,
      reviews: 124
    },
    {
      id: 3,
      name: "Plafonnier vintage bronze",
      price: 98.99,
      image: "https://readdy.ai/api/search-image?query=Vintage%20bronze%20outdoor%20ceiling%20light%2C%20antique%20finish%20with%20glass%20shade%2C%20traditional%20porch%20lighting%2C%20classic%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=21&orientation=squarish",
      rating: 4.7,
      reviews: 189
    },
    {
      id: 4,
      name: "Plafonnier moderne carré",
      price: 76.99,
      image: "https://readdy.ai/api/search-image?query=Modern%20square%20outdoor%20ceiling%20light%2C%20minimalist%20design%2C%20brushed%20steel%20finish%2C%20contemporary%20patio%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=22&orientation=squarish",
      rating: 4.5,
      reviews: 98
    },
    {
      id: 5,
      name: "Plafonnier solaire intelligent",
      price: 125.99,
      image: "https://readdy.ai/api/search-image?query=Smart%20solar%20outdoor%20ceiling%20light%20with%20remote%20control%2C%20eco-friendly%20LED%20technology%2C%20modern%20black%20design%2C%20sustainable%20lighting%20solution%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=23&orientation=squarish",
      rating: 4.4,
      reviews: 87
    },
    {
      id: 6,
      name: "Plafonnier industriel métal",
      price: 145.99,
      image: "https://readdy.ai/api/search-image?query=Industrial%20metal%20outdoor%20ceiling%20light%2C%20heavy%20duty%20construction%2C%20exposed%20bulb%20design%2C%20commercial%20grade%20weatherproof%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=24&orientation=squarish",
      rating: 4.9,
      reviews: 267
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
              Plafonniers Extérieurs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sécurisez et embellissez vos espaces extérieurs avec nos plafonniers résistants aux intempéries.
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

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Fonctionnalités</h4>
                <div className="space-y-2">
                  {['Détecteur de mouvement', 'Solaire', 'Dimmable', 'Télécommande', 'Timer'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Protection IP */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Indice de protection</h4>
                <div className="space-y-2">
                  {['IP44', 'IP54', 'IP65', 'IP67'].map((ip) => (
                    <label key={ip} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{ip}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Style</h4>
                <div className="space-y-2">
                  {['Moderne', 'Vintage', 'Industriel', 'Classique', 'Minimaliste'].map((style) => (
                    <label key={style} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{style}</span>
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

export default PlafonnierExterieur;
