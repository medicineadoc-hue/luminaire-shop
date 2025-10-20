
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';
import { products } from '../../../mocks/products';

const Lustre = () => {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const lustreProducts = products.filter(product => 
    product.category === 'lustre' || product.name.toLowerCase().includes('lustre')
  );

  const brands = ['Philips', 'EGLO', 'Trio', 'Searchlight', 'Brilliant'];

  const filteredProducts = lustreProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand || 'Philips');
    return matchesPrice && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20crystal%20chandelier%20hanging%20in%20luxurious%20dining%20room%20with%20warm%20golden%20lighting%2C%20sophisticated%20interior%20design%2C%20high-end%20home%20decor%2C%20beautiful%20ambient%20lighting&width=1200&height=320&seq=lustre-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Lustres</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection de lustres élégants pour illuminer vos espaces avec style et sophistication
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Filtres</h3>
            
            {/* Sort */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trier par
              </label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-8"
              >
                <option value="name">Nom</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gamme de prix
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-20 p-2 border border-gray-300 rounded text-sm"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-20 p-2 border border-gray-300 rounded text-sm"
                  placeholder="Max"
                />
                <span className="text-sm text-gray-500">€</span>
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marques
              </label>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="mr-2 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSortBy('name');
                setPriceRange([0, 1000]);
                setSelectedBrands([]);
              }}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Lustres ({sortedProducts.length} produits)
              </h2>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-xl text-gray-500">Aucun produit trouvé</p>
                <p className="text-gray-400">Essayez de modifier vos filtres</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Lustres de Qualité Supérieure
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nos lustres combinent élégance et fonctionnalité pour créer des points focaux spectaculaires dans vos intérieurs. 
              Que ce soit pour votre salon, salle à manger ou hall d'entrée, nos lustres apportent une touche de sophistication 
              et un éclairage optimal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-2xl text-amber-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Design Premium</h4>
                <p className="text-gray-600 text-sm">Designs exclusifs et matériaux de haute qualité</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-amber-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Éclairage Optimal</h4>
                <p className="text-gray-600 text-sm">Diffusion parfaite de la lumière dans vos espaces</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tools-line text-2xl text-amber-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Installation Facile</h4>
                <p className="text-gray-600 text-sm">Montage simplifié avec instructions détaillées</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lustre;
