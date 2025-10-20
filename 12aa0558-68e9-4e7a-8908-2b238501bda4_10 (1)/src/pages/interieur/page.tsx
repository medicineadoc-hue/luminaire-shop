import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';

export default function Interieur() {
  const categories = [
    {
      name: 'Suspension',
      href: '/suspension',
      image: 'https://readdy.ai/api/search-image?query=Modern%20pendant%20lighting%20fixtures%20hanging%20from%20ceiling%20in%20contemporary%20interior%20design%20with%20warm%20ambient%20lighting%20and%20elegant%20metal%20finishes&width=400&height=300&seq=1&orientation=landscape',
      description: 'Éclairage suspendu moderne'
    },
    {
      name: 'Plafonnier',
      href: '/plafonnier',
      image: 'https://readdy.ai/api/search-image?query=Ceiling%20mounted%20light%20fixtures%20with%20contemporary%20design%20in%20modern%20living%20room%20with%20clean%20white%20background%20and%20sophisticated%20lighting&width=400&height=300&seq=2&orientation=landscape',
      description: 'Luminaires de plafond élégants'
    },
    {
      name: 'Lustre',
      href: '/lustre',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20crystal%20chandelier%20with%20multiple%20lights%20in%20luxurious%20dining%20room%20setting%20with%20warm%20golden%20lighting%20and%20sophisticated%20design&width=400&height=300&seq=3&orientation=landscape',
      description: 'Lustres de prestige'
    },
    {
      name: 'Applique',
      href: '/applique',
      image: 'https://readdy.ai/api/search-image?query=Modern%20wall%20sconce%20lighting%20fixtures%20mounted%20on%20white%20wall%20with%20contemporary%20design%20and%20warm%20ambient%20lighting%20in%20minimalist%20interior&width=400&height=300&seq=4&orientation=landscape',
      description: 'Éclairage mural décoratif'
    },
    {
      name: 'Lampadaire',
      href: '/lampadaire',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20floor%20lamp%20with%20sleek%20design%20in%20modern%20living%20room%20with%20warm%20lighting%20and%20minimalist%20background%20setting&width=400&height=300&seq=5&orientation=landscape',
      description: 'Lampes sur pied design'
    },
    {
      name: 'Lampe de table',
      href: '/lampe-table',
      image: 'https://readdy.ai/api/search-image?query=Stylish%20table%20lamp%20with%20modern%20design%20on%20wooden%20surface%20with%20warm%20ambient%20lighting%20and%20contemporary%20interior%20background&width=400&height=300&seq=6&orientation=landscape',
      description: 'Éclairage de table raffiné'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Suspension VASKO SMOKED',
      price: '868,39 MAD',
      originalPrice: '997,00 MAD',
      image: 'https://luxalight.ma/3430-home_default/suspension-vasko-metal-verre-smoked-luxalight-maroc.jpg',
      brand: 'BRILLIANT',
      discount: '-12,9%'
    },
    {
      id: 2,
      name: 'Suspension DIDAVI',
      price: '257,60 MAD',
      originalPrice: '368,00 MAD',
      image: 'https://luxalight.ma/2928-home_default/suspension-didavi.jpg',
      brand: 'BRILLIANT',
      discount: '-30%'
    },
    {
      id: 3,
      name: 'Lampe à pied ANNAS',
      price: '1 980,00 MAD',
      image: 'https://luxalight.ma/3434-home_default/lampe-a-pied-annas-.jpg',
      brand: 'BRILLIANT'
    },
    {
      id: 4,
      name: 'Applique KUMARI NOIR',
      price: '276,00 MAD',
      originalPrice: '368,00 MAD',
      image: 'https://luxalight.ma/3449-home_default/applique-kumari-noir.jpg',
      brand: 'BRILLIANT',
      discount: '-25%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://readdy.ai/api/search-image?query=Luxurious%20interior%20lighting%20showroom%20with%20modern%20pendant%20lights%20chandeliers%20and%20elegant%20fixtures%20displayed%20in%20sophisticated%20contemporary%20setting%20with%20warm%20ambient%20lighting&width=1200&height=400&seq=7&orientation=landscape)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luminaires Intérieurs
            </h1>
            <p className="text-xl mb-6">
              Découvrez notre collection complète d'éclairage intérieur pour transformer votre espace
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Voir tous les produits
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catégories d'Éclairage Intérieur</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez notre gamme complète de luminaires intérieurs pour chaque pièce de votre maison
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => window.location.href = category.href}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produits Vedettes</h2>
            <p className="text-gray-600">Découvrez nos luminaires intérieurs les plus populaires</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600 text-sm">Pour les commandes E-Commerce</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-arrow-go-back-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Retour Marchandise</h3>
              <p className="text-gray-600 text-sm">Retour gratuit moins de 7 jours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-secure-payment-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Paiement Simplifié</h3>
              <p className="text-gray-600 text-sm">Vous payez à la livraison</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support 24h / 7j</h3>
              <p className="text-gray-600 text-sm">Nous sommes à votre écoute 24/24</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}