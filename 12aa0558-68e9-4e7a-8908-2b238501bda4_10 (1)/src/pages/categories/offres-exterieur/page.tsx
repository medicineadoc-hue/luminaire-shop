
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';
import { products } from '../../../mocks/products';

const OffresExterieur = () => {
  const [sortBy, setSortBy] = useState('discount');

  const exteriorCategories = ['suspension-exterieure', 'plafonnier-exterieur', 'applique-exterieure', 'deco-exterieure', 'borne-poteau', 'piquet-terre', 'encastrable-sol', 'balisage', 'projecteur', 'hublot'];
  
  const offresExterieurProducts = products.filter(product => 
    exteriorCategories.includes(product.category) && product.discount && product.discount > 0
  );

  const sortedProducts = [...offresExterieurProducts].sort((a, b) => {
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
      <div className="relative h-80 bg-gradient-to-r from-green-600 to-blue-500">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Special%20offers%20on%20outdoor%20lighting%20fixtures%2C%20garden%20lights%20and%20exterior%20wall%20sconces%20with%20discount%20tags%2C%20modern%20outdoor%20LED%20lighting%20promotion%2C%20beautiful%20garden%20illumination%20at%20dusk%20with%20sale%20banners&width=1200&height=500&seq=offres-exterieur-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-500/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Offres Spéciales Extérieur</h1>
            <p className="text-xl mb-6">Jusqu'à -40% sur l'éclairage extérieur et de jardin</p>
            <div className="flex items-center gap-4">
              <span className="bg-white text-green-600 px-4 py-2 rounded-full font-bold">
                <i className="ri-leaf-line mr-2"></i>
                Éco-responsable
              </span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                <i className="ri-flashlight-line mr-2"></i>
                LED Haute Performance
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Promotions Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
            <i className="ri-shield-check-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Étanchéité Garantie</h3>
            <p className="text-sm">IP65 minimum sur tous les produits</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
            <i className="ri-battery-charge-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Économie d'Énergie</h3>
            <p className="text-sm">Jusqu'à 80% d'économie avec la LED</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <i className="ri-tools-line text-3xl mb-3"></i>
            <h3 className="font-bold mb-2">Installation Facile</h3>
            <p className="text-sm">Guide d'installation inclus</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-green-800">
                <i className="ri-leaf-line mr-2"></i>
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
                    <span className="text-sm">Appliques extérieures</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Bornes et poteaux</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Projecteurs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Balisage</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Encastrables sol</span>
                  </label>
                </div>
              </div>

              {/* IP Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Indice de protection</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">IP44</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">IP54</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">IP65</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">IP67</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Weather Info */}
            <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <h4 className="font-bold text-blue-800 mb-3">
                <i className="ri-sun-line mr-2"></i>
                Saison idéale
              </h4>
              <p className="text-sm text-blue-700 mb-3">
                Profitez des beaux jours pour installer votre éclairage extérieur
              </p>
              <div className="text-xs text-blue-600">
                <i className="ri-temp-hot-line mr-1"></i>
                Résistant aux intempéries
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                <i className="ri-leaf-line text-green-500 mr-2"></i>
                Offres Extérieur ({sortedProducts.length} produits)
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
                  {product.discount && product.discount > 25 && (
                    <div className="absolute top-2 left-2 z-10 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <i className="ri-leaf-line mr-1"></i>
                      ECO
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
                <button className="px-3 py-2 bg-green-600 text-white rounded">1</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border rounded hover:bg-gray-50">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Guide CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Guide d'Installation Gratuit</h3>
              <p className="mb-6">Recevez notre guide complet pour installer votre éclairage extérieur comme un professionnel</p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-300 whitespace-nowrap">
                <i className="ri-download-line mr-2"></i>
                Télécharger le guide
              </button>
            </div>
            <div className="text-center">
              <i className="ri-tools-line text-6xl mb-4"></i>
              <p className="text-sm">Installation facile en 3 étapes</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OffresExterieur;
