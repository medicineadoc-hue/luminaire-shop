
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

export default function Plafonnier() {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 400]);

  const products = [
    {
      id: 1,
      name: 'Plafonnier LED Moderne',
      price: 125.90,
      image: 'modern ceiling light LED fixture round design warm lighting contemporary style white finish',
      rating: 4.7,
      reviews: 89,
      isNew: true,
      brand: 'ModernLight'
    },
    {
      id: 2,
      name: 'Plafonnier Cristal',
      price: 289.90,
      image: 'crystal ceiling light luxury fixture sparkling crystals elegant design sophisticated lighting',
      rating: 4.9,
      reviews: 156,
      brand: 'Crystal'
    },
    {
      id: 3,
      name: 'Plafonnier Industriel',
      price: 98.90,
      image: 'industrial ceiling light metal fixture vintage style exposed bulbs rustic design',
      rating: 4.5,
      reviews: 67,
      brand: 'Industrial'
    },
    {
      id: 4,
      name: 'Plafonnier Scandinave',
      price: 156.90,
      image: 'scandinavian ceiling light wood natural materials minimalist design nordic style warm lighting',
      rating: 4.8,
      reviews: 124,
      brand: 'Nordic'
    }
  ];

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
              <span className="text-gray-900">Plafonniers</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Plafonniers</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Éclairage plafonnier design et fonctionnel pour tous vos espaces
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
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
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-product-shop>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
