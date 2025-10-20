
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';
import { products } from '../../../mocks/products';

const Spot = () => {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 300]);

  const spotProducts = products.filter(product => 
    product.category === 'spot'
  );

  const sortedProducts = [...spotProducts].sort((a, b) => {
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20LED%20track%20spotlights%20and%20recessed%20ceiling%20spots%20in%20contemporary%20interior%2C%20adjustable%20track%20lighting%20system%20with%20warm%20white%20light%2C%20professional%20commercial%20lighting%20design%2C%20clean%20minimalist%20style&width=1200&height=400&seq=spot-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Spots</h1>
            <p className="text-xl">Éclairage directionnel pour tous vos besoins</p>
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

              {/* Type de spot */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Type de spot</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Encastrable</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Sur rail</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">En saillie</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Orientable</span>
                  </label>
                </div>
              </div>

              {/* Puissance */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Puissance</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">5-10W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">10-20W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">20-30W</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">30W+</span>
                  </label>
                </div>
              </div>

              {/* Couleur */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Couleur</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Blanc</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Noir</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Gris</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Spots ({sortedProducts.length} produits)</h2>
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
          <h3 className="text-2xl font-semibold mb-4">Spots LED Professionnels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Découvrez notre large gamme de spots LED pour tous vos projets d'éclairage. Spots encastrables, sur rail ou en saillie, orientables ou fixes, nous avons la solution adaptée à chaque besoin.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Éclairage directionnel précis
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Efficacité énergétique optimale
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Installation flexible
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Applications recommandées :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Éclairage d'accentuation</li>
                <li>• Mise en valeur d'objets</li>
                <li>• Éclairage de travail</li>
                <li>• Magasins et showrooms</li>
                <li>• Galeries et musées</li>
                <li>• Bureaux et espaces commerciaux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Spot;
