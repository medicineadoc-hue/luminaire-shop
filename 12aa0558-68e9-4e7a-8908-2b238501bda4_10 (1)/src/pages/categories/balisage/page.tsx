
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

const Balisage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: "Balise LED solaire chemin",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://readdy.ai/api/search-image?query=Solar%20LED%20pathway%20marker%20light%2C%20low%20profile%20design%2C%20automatic%20dusk%20to%20dawn%20operation%2C%20weatherproof%20outdoor%20path%20lighting%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=55&orientation=squarish",
      rating: 4.6,
      reviews: 234,
      isNew: true,
      discount: 33
    },
    {
      id: 2,
      name: "Balise réfléchissante LED",
      price: 15.99,
      image: "https://readdy.ai/api/search-image?query=Reflective%20LED%20marker%20light%2C%20safety%20pathway%20lighting%2C%20bright%20visibility%20markers%2C%20durable%20outdoor%20construction%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=56&orientation=squarish",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 3,
      name: "Kit 10 balises jardin",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=Set%20of%2010%20garden%20pathway%20marker%20lights%2C%20complete%20landscape%20lighting%20kit%2C%20uniform%20illumination%20system%2C%20easy%20installation%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=57&orientation=squarish",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 4,
      name: "Balise haute visibilité",
      price: 34.99,
      image: "https://readdy.ai/api/search-image?query=High%20visibility%20LED%20marker%20light%2C%20bright%20safety%20beacon%2C%20commercial%20grade%20pathway%20lighting%2C%20heavy%20duty%20construction%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=58&orientation=squarish",
      rating: 4.7,
      reviews: 145
    },
    {
      id: 5,
      name: "Balise couleur changeante",
      price: 42.99,
      image: "https://readdy.ai/api/search-image?query=Color%20changing%20LED%20marker%20light%2C%20RGB%20technology%2C%20decorative%20pathway%20lighting%2C%20party%20and%20event%20illumination%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=59&orientation=squarish",
      rating: 4.4,
      reviews: 98
    },
    {
      id: 6,
      name: "Balise professionnelle IP68",
      price: 67.99,
      image: "https://readdy.ai/api/search-image?query=Professional%20grade%20LED%20marker%20light%20IP68%20rated%2C%20heavy%20duty%20aluminum%20construction%2C%20commercial%20pathway%20lighting%2C%20extreme%20weather%20resistance%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=300&height=300&seq=60&orientation=squarish",
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
              Balisage
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sécurisez et délimitez vos chemins avec nos solutions de balisage LED efficaces et durables.
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
                  {['Balise simple', 'Balise réfléchissante', 'Kit/Ensemble', 'Balise haute visibilité'].map((type) => (
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
                  {['Blanc', 'Rouge', 'Bleu', 'Vert', 'RGB/Couleur'].map((color) => (
                    <label key={color} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Installation */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Installation</h4>
                <div className="space-y-2">
                  {['Piquet terre', 'Fixation sol', 'Adhésif', 'Magnétique', 'Vissage'].map((install) => (
                    <label key={install} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{install}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Fonctionnalités</h4>
                <div className="space-y-2">
                  {['Clignotant', 'Détecteur mouvement', 'Timer', 'Télécommande', 'Étanche IP68'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Usage</h4>
                <div className="space-y-2">
                  {['Jardin', 'Allée', 'Parking', 'Sécurité', 'Événement'].map((usage) => (
                    <label key={usage} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">{usage}</span>
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

export default Balisage;
