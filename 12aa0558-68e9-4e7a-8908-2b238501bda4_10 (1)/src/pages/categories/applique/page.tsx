
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ProductCard from '../../../components/feature/ProductCard';

export default function Applique() {
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Applique Murale LED',
      price: 67.90,
      image: 'modern wall sconce LED light fixture contemporary design warm lighting interior decoration',
      rating: 4.6,
      reviews: 78,
      isNew: true,
      brand: 'ModernLight'
    },
    {
      id: 2,
      name: 'Applique Vintage',
      price: 89.90,
      image: 'vintage wall light fixture retro design brass finish warm bulb classic style',
      rating: 4.8,
      reviews: 124,
      brand: 'Vintage'
    },
    {
      id: 3,
      name: 'Applique Design',
      price: 156.90,
      image: 'designer wall sconce modern fixture elegant design sophisticated lighting contemporary style',
      rating: 4.7,
      reviews: 89,
      brand: 'Design'
    },
    {
      id: 4,
      name: 'Applique Industrielle',
      price: 78.90,
      image: 'industrial wall light metal fixture vintage style exposed bulb rustic design',
      rating: 4.5,
      reviews: 56,
      brand: 'Industrial'
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
              <span className="text-gray-900">Appliques</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Appliques Murales</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Éclairage mural design pour créer une ambiance chaleureuse
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
