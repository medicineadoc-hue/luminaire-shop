
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const LampeTable = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Lampe de table moderne LED",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://readdy.ai/api/search-image?query=Modern%20LED%20table%20lamp%20with%20sleek%20metallic%20base%20and%20white%20fabric%20shade%2C%20minimalist%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting&width=300&height=300&seq=1&orientation=squarish",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Lampe de bureau articulée",
      price: 65.99,
      image: "https://readdy.ai/api/search-image?query=Adjustable%20desk%20lamp%20with%20articulated%20arm%2C%20black%20metal%20finish%2C%20modern%20office%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=2&orientation=squarish",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Lampe de chevet tactile",
      price: 45.99,
      image: "https://readdy.ai/api/search-image?query=Touch%20bedside%20table%20lamp%20with%20warm%20wood%20base%20and%20white%20shade%2C%20cozy%20bedroom%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=3&orientation=squarish",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Lampe vintage Edison",
      price: 78.99,
      image: "https://readdy.ai/api/search-image?query=Vintage%20Edison%20bulb%20table%20lamp%20with%20brass%20base%20and%20exposed%20filament%20bulb%2C%20retro%20industrial%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=4&orientation=squarish",
      rating: 4.5,
      reviews: 92
    },
    {
      id: 5,
      name: "Lampe de lecture flexible",
      price: 39.99,
      image: "https://readdy.ai/api/search-image?query=Flexible%20reading%20lamp%20with%20adjustable%20neck%2C%20chrome%20finish%2C%20focused%20task%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=5&orientation=squarish",
      rating: 4.4,
      reviews: 67
    },
    {
      id: 6,
      name: "Lampe décorative cristal",
      price: 129.99,
      image: "https://readdy.ai/api/search-image?query=Crystal%20decorative%20table%20lamp%20with%20elegant%20base%20and%20white%20shade%2C%20luxury%20home%20decor%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=6&orientation=squarish",
      rating: 4.9,
      reviews: 203
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
              Lampes de Table
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection de lampes de table élégantes pour illuminer vos espaces de vie avec style et fonctionnalité.
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

              {/* Categories */}
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

              {/* Material */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Matériau</h4>
                <div className="space-y-2">
                  {['Métal', 'Bois', 'Cristal', 'Céramique', 'Verre'].map((material) => (
                    <label key={material} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{material}</span>
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

export default LampeTable;
