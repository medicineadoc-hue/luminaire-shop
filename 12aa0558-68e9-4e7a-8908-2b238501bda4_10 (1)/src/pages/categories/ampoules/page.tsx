
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';
import { products } from '../../../mocks/products';

const Ampoules = () => {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const ampoulesProducts = products.filter(product => 
    product.category === 'ampoules'
  );

  const sortedProducts = [...ampoulesProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Collection%20of%20modern%20LED%20light%20bulbs%20in%20different%20shapes%20and%20sizes%2C%20E27%20E14%20GU10%20bulbs%20with%20warm%20and%20cool%20white%20light%2C%20energy%20efficient%20lighting%20technology%2C%20clean%20white%20background%20display&width=1200&height=400&seq=ampoules-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Ampoules LED</h1>
            <p className="text-xl">Technologie LED pour tous vos luminaires</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Filtres</h3>
              
              {/* Sort Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Trier par</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md pr-8"
                >
                  <option value="name">Nom</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Gamme de prix</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-20 p-2 border border-gray-300 rounded text-sm"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-20 p-2 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                  />
                  <span className="text-sm">€</span>
                </div>
              </div>

              {/* Culot */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Type de culot</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">E27</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">E14</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">GU10</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">GU5.3</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">G9</span>
                  </label>
                </div>
              </div>

              {/* Puissance */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Puissance</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">3-5W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">6-9W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">10-15W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">15W+</span>
                  </label>
                </div>
              </div>

              {/* Température de couleur */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Température de couleur</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Blanc chaud (2700K)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Blanc neutre (4000K)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Blanc froid (6500K)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Variable</span>
                  </label>
                </div>
              </div>

              {/* Forme */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Forme</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Standard</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Flamme</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Globe</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Réflecteur</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Ampoules LED ({sortedProducts.length} produits)</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Affichage:</span>
                <div className="flex gap-2">
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <i className="ri-grid-line"></i>
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <i className="ri-list-check"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-product-shop>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border rounded hover:bg-gray-50">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Ampoules LED Haute Performance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Remplacez vos anciennes ampoules par nos ampoules LED dernière génération. Économies d'énergie garanties, durée de vie exceptionnelle et qualité de lumière optimale pour tous vos luminaires.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Jusqu'à 90% d'économie d'énergie
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Durée de vie 25 000 heures
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Allumage instantané
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Guide des culots :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• E27 : Gros culot à vis (standard)</li>
                <li>• E14 : Petit culot à vis (flamme)</li>
                <li>• GU10 : Spot à baïonnette 230V</li>
                <li>• GU5.3 : Spot à broches 12V</li>
                <li>• G9 : Capsule halogène</li>
                <li>• G4 : Mini capsule 12V</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ampoules;
