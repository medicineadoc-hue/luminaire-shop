
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const SuspensionExterieure = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Suspension extérieure LED étanche",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://readdy.ai/api/search-image?query=Waterproof%20outdoor%20pendant%20light%20with%20LED%20technology%2C%20black%20aluminum%20housing%2C%20modern%20design%20for%20patio%20and%20garden%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=13&orientation=squarish",
      rating: 4.8,
      reviews: 142,
      isNew: true,
      discount: 23
    },
    {
      id: 2,
      name: "Suspension lanterne vintage",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=Vintage%20outdoor%20lantern%20pendant%20light%2C%20antique%20bronze%20finish%2C%20glass%20panels%2C%20traditional%20design%20for%20porch%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=14&orientation=squarish",
      rating: 4.6,
      reviews: 98
    },
    {
      id: 3,
      name: "Suspension moderne acier inox",
      price: 156.99,
      image: "https://readdy.ai/api/search-image?query=Modern%20stainless%20steel%20outdoor%20pendant%20light%2C%20cylindrical%20design%2C%20weather%20resistant%2C%20contemporary%20patio%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=15&orientation=squarish",
      rating: 4.7,
      reviews: 167
    },
    {
      id: 4,
      name: "Suspension rustique bois",
      price: 78.99,
      image: "https://readdy.ai/api/search-image?query=Rustic%20wooden%20outdoor%20pendant%20light%20with%20rope%20details%2C%20farmhouse%20style%2C%20weathered%20wood%20finish%2C%20outdoor%20dining%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=16&orientation=squarish",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 5,
      name: "Suspension solaire intelligente",
      price: 95.99,
      image: "https://readdy.ai/api/search-image?query=Smart%20solar%20outdoor%20pendant%20light%20with%20motion%20sensor%2C%20eco-friendly%20LED%20lighting%2C%20modern%20black%20design%2C%20sustainable%20garden%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=17&orientation=squarish",
      rating: 4.4,
      reviews: 76
    },
    {
      id: 6,
      name: "Suspension industrielle IP65",
      price: 198.99,
      image: "https://readdy.ai/api/search-image?query=Industrial%20outdoor%20pendant%20light%20IP65%20rated%2C%20heavy%20duty%20metal%20construction%2C%20exposed%20bulb%20design%2C%20commercial%20grade%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=18&orientation=squarish",
      rating: 4.9,
      reviews: 234
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
              Suspensions Extérieures
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Illuminez vos espaces extérieurs avec nos suspensions résistantes aux intempéries, alliant style et durabilité.
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
                  {['Moderne', 'Vintage', 'Industriel', 'Rustique', 'Classique'].map((style) => (
                    <label key={style} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Energy Source */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Source d'énergie</h4>
                <div className="space-y-2">
                  {['LED', 'Solaire', 'Halogène', 'Fluorescent'].map((energy) => (
                    <label key={energy} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{energy}</span>
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

export default SuspensionExterieure;
