import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';

export default function OffresSpeciales() {
  const promoProducts = [
    {
      id: 1,
      name: 'PLAFONNIER BENT',
      price: '89,40 MAD',
      originalPrice: '298,00 MAD',
      image: 'https://luxalight.ma/3138-home_default/plafonnier-bent.jpg',
      brand: 'BRILLIANT',
      discount: '-70%'
    },
    {
      id: 2,
      name: 'Suspension HOLMA',
      price: '1 529,00 MAD',
      originalPrice: '2 780,00 MAD',
      image: 'https://luxalight.ma/1089-home_default/suspension-holma.jpg',
      brand: 'BRILLIANT',
      discount: '-45%'
    },
    {
      id: 3,
      name: 'Suspension VASKO SMOKED',
      price: '651,00 MAD',
      originalPrice: '868,00 MAD',
      image: 'https://luxalight.ma/3431-home_default/suspension-vasko-metal-verre-smoked-luxalight-maroc.jpg',
      brand: 'BRILLIANT',
      discount: '-25%'
    },
    {
      id: 4,
      name: 'Applique KUMARI NOIR',
      price: '276,00 MAD',
      originalPrice: '368,00 MAD',
      image: 'https://luxalight.ma/3449-home_default/applique-kumari-noir.jpg',
      brand: 'BRILLIANT',
      discount: '-25%'
    },
    {
      id: 5,
      name: 'Spot ARLENO',
      price: '16,89 MAD',
      originalPrice: '39,00 MAD',
      image: 'https://luxalight.ma/2334-home_default/spot-arleno.jpg',
      brand: 'BRILLIANT',
      discount: '-56,7%'
    },
    {
      id: 6,
      name: 'Suspension DIDAVI',
      price: '257,60 MAD',
      originalPrice: '368,00 MAD',
      image: 'https://luxalight.ma/2928-home_default/suspension-didavi.jpg',
      brand: 'BRILLIANT',
      discount: '-30%'
    }
  ];

  const categories = [
    {
      name: 'Éclairage Intérieur',
      href: '/offres-interieur',
      image: 'https://readdy.ai/api/search-image?query=Interior%20lighting%20sale%20promotion%20with%20modern%20pendant%20lights%20and%20ceiling%20fixtures%20at%20discounted%20prices%20in%20elegant%20showroom%20setting%20with%20sale%20tags&width=400&height=300&seq=24&orientation=landscape',
      description: 'Promotions sur luminaires intérieurs',
      discount: 'Jusqu\'à -70%'
    },
    {
      name: 'Éclairage Extérieur',
      href: '/offres-exterieur',
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20lighting%20sale%20promotion%20with%20garden%20lights%20wall%20sconces%20and%20pathway%20fixtures%20at%20special%20prices%20with%20promotional%20display&width=400&height=300&seq=25&orientation=landscape',
      description: 'Offres spéciales extérieur',
      discount: 'Jusqu\'à -50%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://readdy.ai/api/search-image?query=Special%20offers%20and%20sales%20promotion%20banner%20for%20lighting%20fixtures%20with%20discount%20tags%20and%20modern%20luminaires%20displayed%20in%20attractive%20retail%20setting&width=1200&height=400&seq=26&orientation=landscape)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              OFFRES LIMITÉES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Offres Spéciales
            </h1>
            <p className="text-xl mb-6">
              Profitez de nos promotions exceptionnelles sur une sélection de luminaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold transition-colors duration-200 whitespace-nowrap cursor-pointer hover:bg-gray-100">
                Voir toutes les offres
              </button>
              <div className="text-white">
                <div className="text-sm opacity-90">Économisez jusqu'à</div>
                <div className="text-3xl font-bold">70%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales Timer */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <i className="ri-time-line text-xl mr-2"></i>
              <span className="font-bold">Offres Flash - Temps limité !</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs">HEURES</div>
              </div>
              <div className="text-xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">45</div>
                <div className="text-xs">MINUTES</div>
              </div>
              <div className="text-xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs">SECONDES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catégories en Promotion</h2>
            <p className="text-gray-600">Découvrez nos offres par catégorie</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => window.location.href = category.href}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {category.discount}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meilleures Offres</h2>
            <p className="text-gray-600">Nos promotions les plus attractives du moment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
            {promoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Ne Ratez Aucune Offre !</h2>
            <p className="text-xl mb-8">
              Inscrivez-vous à notre newsletter pour être informé en priorité de nos promotions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                S'inscrire
              </button>
            </div>
            <p className="text-sm mt-4 opacity-90">
              Recevez nos offres exclusives et nouveautés en avant-première
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Deals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Choisir Nos Offres ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-price-tag-3-line text-2xl text-red-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prix Garantis</h3>
              <p className="text-gray-600 text-sm">Les meilleurs prix du marché</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-red-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qualité Assurée</h3>
              <p className="text-gray-600 text-sm">Produits authentiques et garantis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-red-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600 text-sm">Expédition sous 24h</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl text-red-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support Dédié</h3>
              <p className="text-gray-600 text-sm">Assistance personnalisée</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}