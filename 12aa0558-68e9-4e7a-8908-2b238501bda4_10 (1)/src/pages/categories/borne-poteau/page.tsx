
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const BornePoteau = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Borne LED moderne 80cm",
      price: 149.99,
      originalPrice: 189.99,
      image: "https://readdy.ai/api/search-image?query=Modern%20LED%20bollard%20light%2080cm%20height%2C%20sleek%20black%20aluminum%20design%2C%20pathway%20lighting%2C%20contemporary%20outdoor%20post%20light%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=37&orientation=squarish",
      rating: 4.8,
      reviews: 145,
      isNew: true,
      discount: 21
    },
    {
      id: 2,
      name: "Poteau éclairage classique",
      price: 189.99,
      image: "https://readdy.ai/api/search-image?query=Classic%20outdoor%20lamp%20post%2C%20traditional%20black%20metal%20design%20with%20lantern%20top%2C%20garden%20pathway%20lighting%2C%20vintage%20style%20street%20lamp%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=38&orientation=squarish",
      rating: 4.6,
      reviews: 167
    },
    {
      id: 3,
      name: "Borne solaire intelligente",
      price: 98.99,
      image: "https://readdy.ai/api/search-image?query=Smart%20solar%20bollard%20light%20with%20motion%20sensor%2C%20eco-friendly%20LED%20technology%2C%20modern%20white%20design%2C%20wireless%20outdoor%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=39&orientation=squarish",
      rating: 4.5,
      reviews: 123
    },
    {
      id: 4,
      name: "Poteau industriel métal",
      price: 234.99,
      image: "https://readdy.ai/api/search-image?query=Industrial%20metal%20lamp%20post%2C%20heavy%20duty%20construction%2C%20exposed%20bulb%20design%2C%20commercial%20grade%20outdoor%20lighting%2C%20weatherproof%20finish%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=40&orientation=squarish",
      rating: 4.7,
      reviews: 189
    },
    {
      id: 5,
      name: "Borne design cylindrique",
      price: 167.99,
      image: "https://readdy.ai/api/search-image?query=Cylindrical%20design%20bollard%20light%2C%20minimalist%20stainless%20steel%20construction%2C%20architectural%20outdoor%20lighting%2C%20modern%20landscape%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=41&orientation=squarish",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 6,
      name: "Poteau vintage bronze",
      price: 278.99,
      image: "https://readdy.ai/api/search-image?query=Vintage%20bronze%20lamp%20post%20with%20ornate%20details%2C%20antique%20finish%2C%20classic%20garden%20lighting%2C%20decorative%20outdoor%20post%20light%2C%20traditional%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=42&orientation=squarish",
      rating: 4.8,
      reviews: 156
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
              Bornes et Poteaux
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Balisez et sécurisez vos allées et jardins avec nos bornes et poteaux d'éclairage élégants et durables.
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

              {/* Height */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Hauteur</h4>
                <div className="space-y-2">
                  {['60-80cm', '80-100cm', '100-120cm', '120-150cm', '150cm+'].map((height) => (
                    <label key={height} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{height}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Type</h4>
                <div className="space-y-2">
                  {['Borne', 'Poteau', 'Lampadaire', 'Balise'].map((type) => (
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
                  {['LED', 'Solaire', 'Halogène', 'Fluorescent'].map((power) => (
                    <label key={power} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{power}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Style</h4>
                <div className="space-y-2">
                  {['Moderne', 'Classique', 'Industriel', 'Vintage', 'Minimaliste'].map((style) => (
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
                  {['Aluminium', 'Acier inox', 'Fonte', 'Métal peint', 'Composite'].map((material) => (
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

export default BornePoteau;
