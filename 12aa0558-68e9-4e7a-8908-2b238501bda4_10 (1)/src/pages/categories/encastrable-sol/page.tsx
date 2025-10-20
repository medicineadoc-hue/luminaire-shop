
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const EncastrableSol = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Spot encastrable LED rond",
      price: 45.99,
      originalPrice: 59.99,
      image: "https://readdy.ai/api/search-image?query=Round%20LED%20recessed%20ground%20light%2C%20flush%20mount%20design%2C%20stainless%20steel%20finish%2C%20pathway%20lighting%2C%20waterproof%20outdoor%20floor%20light%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=49&orientation=squarish",
      rating: 4.7,
      reviews: 178,
      isNew: true,
      discount: 23
    },
    {
      id: 2,
      name: "Encastré carré IP67",
      price: 67.99,
      image: "https://readdy.ai/api/search-image?query=Square%20recessed%20ground%20light%20IP67%20rated%2C%20heavy%20duty%20construction%2C%20LED%20technology%2C%20commercial%20grade%20in-ground%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=50&orientation=squarish",
      rating: 4.8,
      reviews: 145
    },
    {
      id: 3,
      name: "Spot encastrable RGB",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=RGB%20color%20changing%20recessed%20ground%20light%2C%20smart%20control%20LED%20technology%2C%20decorative%20landscape%20lighting%2C%20party%20and%20event%20illumination%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=51&orientation=squarish",
      rating: 4.6,
      reviews: 123
    },
    {
      id: 4,
      name: "Encastré haute puissance",
      price: 125.99,
      image: "https://readdy.ai/api/search-image?query=High%20power%20recessed%20ground%20light%2C%20professional%20grade%20LED%20spotlight%2C%20architectural%20landscape%20lighting%2C%20heavy%20duty%20aluminum%20construction%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=52&orientation=squarish",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 5,
      name: "Kit 6 spots encastrables",
      price: 189.99,
      image: "https://readdy.ai/api/search-image?query=Set%20of%206%20recessed%20ground%20lights%2C%20complete%20installation%20kit%2C%20uniform%20pathway%20lighting%2C%20LED%20technology%2C%20professional%20landscape%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=53&orientation=squarish",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 6,
      name: "Encastré solaire intelligent",
      price: 78.99,
      image: "https://readdy.ai/api/search-image?query=Smart%20solar%20recessed%20ground%20light%2C%20eco-friendly%20LED%20technology%2C%20automatic%20dusk%20to%20dawn%20operation%2C%20wireless%20outdoor%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=54&orientation=squarish",
      rating: 4.5,
      reviews: 167
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
              Encastrables de Sol
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez des effets d'éclairage spectaculaires avec nos spots encastrables de sol discrets et performants.
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

              {/* Shape */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Forme</h4>
                <div className="space-y-2">
                  {['Rond', 'Carré', 'Rectangulaire', 'Linéaire'].map((shape) => (
                    <label key={shape} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{shape}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Power */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Puissance</h4>
                <div className="space-y-2">
                  {['1-3W', '3-6W', '6-10W', '10-15W', '15W+'].map((power) => (
                    <label key={power} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{power}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Protection IP */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Indice de protection</h4>
                <div className="space-y-2">
                  {['IP65', 'IP67', 'IP68'].map((ip) => (
                    <label key={ip} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{ip}</span>
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
                  {['Dimmable', 'RGB', 'Solaire', 'Télécommande', 'Smart/WiFi'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Matériau</h4>
                <div className="space-y-2">
                  {['Acier inox', 'Aluminium', 'Laiton', 'Plastique ABS', 'Fonte'].map((material) => (
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

export default EncastrableSol;
