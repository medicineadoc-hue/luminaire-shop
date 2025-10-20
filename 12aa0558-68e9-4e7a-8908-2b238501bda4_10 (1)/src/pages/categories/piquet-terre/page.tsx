
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const PiquetTerre = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Piquet LED solaire jardin",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://readdy.ai/api/search-image?query=Solar%20LED%20garden%20stake%20light%2C%20modern%20design%20with%20warm%20white%20light%2C%20weatherproof%20outdoor%20pathway%20lighting%2C%20easy%20installation%20ground%20spike%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=43&orientation=squarish",
      rating: 4.6,
      reviews: 189,
      isNew: true,
      discount: 29
    },
    {
      id: 2,
      name: "Spot piquet orientable",
      price: 35.99,
      image: "https://readdy.ai/api/search-image?query=Adjustable%20ground%20spike%20spotlight%2C%20directional%20LED%20light%20for%20landscape%2C%20black%20metal%20construction%2C%20garden%20accent%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=44&orientation=squarish",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 3,
      name: "Piquet décoratif couleur",
      price: 18.99,
      image: "https://readdy.ai/api/search-image?query=Decorative%20color%20changing%20ground%20stake%20light%2C%20RGB%20LED%20technology%2C%20festive%20garden%20decoration%2C%20party%20outdoor%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=45&orientation=squarish",
      rating: 4.4,
      reviews: 98
    },
    {
      id: 4,
      name: "Ensemble 6 piquets LED",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=Set%20of%206%20LED%20ground%20stake%20lights%2C%20pathway%20lighting%20kit%2C%20uniform%20garden%20illumination%2C%20solar%20powered%20outdoor%20lights%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=46&orientation=squarish",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 5,
      name: "Piquet flamme réaliste",
      price: 42.99,
      image: "https://readdy.ai/api/search-image?query=Realistic%20flame%20effect%20ground%20stake%20light%2C%20flickering%20LED%20torch%2C%20solar%20powered%20garden%20decoration%2C%20atmospheric%20outdoor%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=47&orientation=squarish",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 6,
      name: "Piquet projecteur puissant",
      price: 67.99,
      image: "https://readdy.ai/api/search-image?query=Powerful%20LED%20ground%20spike%20projector%2C%20high%20brightness%20landscape%20lighting%2C%20adjustable%20beam%20angle%2C%20professional%20outdoor%20illumination%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=48&orientation=squarish",
      rating: 4.9,
      reviews: 145
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
              Piquets de Terre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez des ambiances magiques dans vos jardins avec nos piquets d'éclairage faciles à installer.
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
                  {['Spot orientable', 'Piquet décoratif', 'Projecteur', 'Flamme LED', 'Ensemble/Kit'].map((type) => (
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
                  {['Solaire', 'Batterie', 'Secteur 12V', 'Rechargeable'].map((power) => (
                    <label key={power} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{power}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Light Color */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Couleur de lumière</h4>
                <div className="space-y-2">
                  {['Blanc chaud', 'Blanc froid', 'RGB/Couleur', 'Blanc naturel'].map((color) => (
                    <label key={color} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Fonctionnalités</h4>
                <div className="space-y-2">
                  {['Détecteur mouvement', 'Télécommande', 'Timer', 'Dimmable', 'Étanche IP65'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Installation */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Installation</h4>
                <div className="space-y-2">
                  {['Piquet simple', 'Piquet renforcé', 'Base lestée', 'Fixation sol'].map((install) => (
                    <label key={install} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{install}</span>
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

export default PiquetTerre;
