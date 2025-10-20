
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

export default function Suspension() {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Suspension Design Moderne',
      price: 89.90,
      originalPrice: 119.90,
      image: 'modern pendant light fixture elegant design warm lighting home decor minimalist style black metal',
      rating: 4.8,
      reviews: 124,
      isNew: true,
      brand: 'LuxaDesign'
    },
    {
      id: 2,
      name: 'Suspension Industrielle',
      price: 156.90,
      image: 'industrial pendant light vintage style metal cage warm bulb exposed filament rustic design',
      rating: 4.6,
      reviews: 89,
      brand: 'Industrial'
    },
    {
      id: 3,
      name: 'Suspension Cristal',
      price: 245.90,
      image: 'crystal pendant light luxury chandelier elegant design sparkling crystals warm lighting sophisticated',
      rating: 4.9,
      reviews: 156,
      brand: 'Crystal'
    },
    {
      id: 4,
      name: 'Suspension Scandinave',
      price: 78.90,
      image: 'scandinavian pendant light wood natural materials minimalist design warm lighting nordic style',
      rating: 4.7,
      reviews: 203,
      isNew: true,
      brand: 'Nordic'
    },
    {
      id: 5,
      name: 'Suspension Art Déco',
      price: 198.90,
      image: 'art deco pendant light geometric design brass finish vintage style elegant lighting luxury',
      rating: 4.5,
      reviews: 67,
      brand: 'Vintage'
    },
    {
      id: 6,
      name: 'Suspension Minimaliste',
      price: 65.90,
      image: 'minimalist pendant light simple design clean lines modern style white finish contemporary lighting',
      rating: 4.4,
      reviews: 98,
      brand: 'Modern'
    }
  ];

  const brands = ['LuxaDesign', 'Industrial', 'Crystal', 'Nordic', 'Vintage', 'Modern'];
  const styles = ['Moderne', 'Industriel', 'Scandinave', 'Art Déco', 'Minimaliste', 'Classique'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Accueil</Link>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <Link to="/interieur" className="text-gray-500 hover:text-gray-700">Intérieur</Link>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900">Suspensions</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Suspensions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez notre collection de suspensions design pour illuminer votre intérieur avec style
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Filtres</h3>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Prix</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{priceRange[0]}€</span>
                        <span>{priceRange[1]}€</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Marques</h4>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedBrands([...selectedBrands, brand]);
                              } else {
                                setSelectedBrands(selectedBrands.filter(b => b !== brand));
                              }
                            }}
                            className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Styles */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Styles</h4>
                    <div className="space-y-2">
                      {styles.map((style) => (
                        <label key={style} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedStyles.includes(style)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedStyles([...selectedStyles, style]);
                              } else {
                                setSelectedStyles(selectedStyles.filter(s => s !== style));
                              }
                            }}
                            className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                    Appliquer les filtres
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:w-3/4">
                {/* Sort and Results */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">{products.length} produits trouvés</p>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-8"
                  >
                    <option value="featured">Mis en avant</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="newest">Plus récents</option>
                    <option value="rating">Mieux notés</option>
                  </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-product-shop>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                      <i className="ri-arrow-left-line"></i>
                    </button>
                    <button className="px-3 py-2 bg-amber-600 text-white rounded">1</button>
                    <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                    <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                    <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
