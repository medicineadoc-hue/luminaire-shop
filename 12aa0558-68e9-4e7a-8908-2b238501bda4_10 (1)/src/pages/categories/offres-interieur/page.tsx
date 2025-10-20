
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';
import { products } from '../../../mocks/products';

const OffresInterieur = () => {
  const [sortBy, setSortBy] = useState('discount');

  const interiorCategories = ['suspension', 'plafonnier', 'applique', 'lampadaire', 'lustre', 'lampe-table', 'suspension-double'];
  
  const offresInterieurProducts = products.filter(product => 
    interiorCategories.includes(product.category) && product.discount && product.discount > 0
  );

  const sortedProducts = [...offresInterieurProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
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
      <div className="relative h-80 bg-gradient-to-r from-red-600 to-orange-500">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Special%20offers%20and%20discounts%20on%20modern%20interior%20lighting%20fixtures%2C%20elegant%20pendant%20lights%20and%20chandeliers%20with%20sale%20tags%2C%20luxury%20home%20lighting%20promotion%2C%20warm%20ambient%20lighting%20in%20contemporary%20living%20room&width=1200&height=500&seq=offres-interieur-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-orange-500/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Offres Spéciales Intérieur</h1>
            <p className="text-xl mb-6">Jusqu'à -50% sur une sélection de luminaires d'intérieur</p>
            <div className="flex items-center gap-4">
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold">
                <i className="ri-fire-line mr-2"></i>
                Ventes Flash
              </span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                <i className="ri-time-line mr-2"></i>
                Offre limitée
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Promotions Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
            <i className="ri-truck-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Livraison Gratuite</h3>
            <p className="text-sm">Dès 99€ d'achat</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
            <i className="ri-shield-check-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Garantie Étendue</h3>
            <p className="text-sm">3 ans sur tous les produits</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <i className="ri-customer-service-2-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Support Expert</h3>
            <p className="text-sm">Conseils personnalisés</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-red-800">
                <i className="ri-fire-line mr-2"></i>
                Filtres Promotions
              </h3>
              
              {/* Sort Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Trier par</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md pr-8"
                >
                  <option value="discount">Remise la plus élevée</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="name">Nom</option>
                </select>
              </div>

              {/* Discount Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Pourcentage de remise</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">10-20%</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">20-30%</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">30-40%</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">40%+</span>
                  </label>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Catégories</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Suspensions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Plafonniers</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Appliques</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Lampadaires</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Lustres</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
              <h4 className="font-bold text-yellow-800 mb-3">
                <i className="ri-time-line mr-2"></i>
                Offre limitée
              </h4>
              <div className="text-2xl font-bold text-yellow-600 mb-2">
                23:45:12
              </div>
              <p className="text-sm text-yellow-700">Temps restant</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                <i className="ri-fire-line text-red-500 mr-2"></i>
                Offres Intérieur ({sortedProducts.length} produits)
              </h2>
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
                <div key={product.id} className="relative">
                  {product.discount && product.discount > 30 && (
                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <i className="ri-fire-line mr-1"></i>
                      HOT
                    </div>
                  )}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border rounded hover:bg-gray-50">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button className="px-3 py-2 bg-red-600 text-white rounded">1</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ne ratez aucune promotion !</h3>
          <p className="mb-6">Inscrivez-vous à notre newsletter et recevez en exclusivité nos meilleures offres</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded text-gray-900"
            />
            <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold hover:bg-yellow-300 whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OffresInterieur;
