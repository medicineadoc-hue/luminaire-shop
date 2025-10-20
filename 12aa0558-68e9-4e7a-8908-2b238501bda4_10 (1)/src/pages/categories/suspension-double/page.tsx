
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const SuspensionDouble = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Suspension double moderne LED",
      price: 189.99,
      originalPrice: 249.99,
      image: "https://readdy.ai/api/search-image?query=Modern%20double%20pendant%20light%20with%20two%20cylindrical%20LED%20shades%2C%20black%20metal%20finish%2C%20contemporary%20dining%20room%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=7&orientation=squarish",
      rating: 4.8,
      reviews: 156,
      isNew: true,
      discount: 24
    },
    {
      id: 2,
      name: "Suspension double industrielle",
      price: 145.99,
      image: "https://readdy.ai/api/search-image?query=Industrial%20double%20pendant%20light%20with%20metal%20cage%20shades%2C%20vintage%20copper%20finish%2C%20exposed%20bulbs%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=8&orientation=squarish",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Suspension double verre soufflé",
      price: 225.99,
      image: "https://readdy.ai/api/search-image?query=Double%20pendant%20light%20with%20blown%20glass%20shades%2C%20elegant%20crystal%20clear%20glass%2C%20brass%20accents%2C%20luxury%20lighting%20fixture%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=9&orientation=squarish",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 4,
      name: "Suspension double minimaliste",
      price: 98.99,
      image: "https://readdy.ai/api/search-image?query=Minimalist%20double%20pendant%20light%20with%20simple%20geometric%20shades%2C%20white%20and%20wood%20finish%2C%20Scandinavian%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=10&orientation=squarish",
      rating: 4.5,
      reviews: 124
    },
    {
      id: 5,
      name: "Suspension double vintage",
      price: 167.99,
      image: "https://readdy.ai/api/search-image?query=Vintage%20double%20pendant%20light%20with%20Edison%20bulbs%2C%20antique%20brass%20finish%2C%20retro%20industrial%20style%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=11&orientation=squarish",
      rating: 4.7,
      reviews: 178
    },
    {
      id: 6,
      name: "Suspension double cristal",
      price: 299.99,
      image: "https://readdy.ai/api/search-image?query=Luxury%20double%20pendant%20light%20with%20crystal%20elements%2C%20elegant%20chandelier%20style%2C%20chrome%20finish%2C%20sparkling%20crystals%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=12&orientation=squarish",
      rating: 4.8,
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
              Suspensions Doubles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez un éclairage harmonieux avec nos suspensions doubles, parfaites pour les îlots de cuisine et les tables à manger.
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

              {/* Style */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Style</h4>
                <div className="space-y-2">
                  {['Moderne', 'Industriel', 'Vintage', 'Minimaliste', 'Classique'].map((style) => (
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
                  {['Métal', 'Verre', 'Cristal', 'Bois', 'Tissu'].map((material) => (
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

export default SuspensionDouble;
