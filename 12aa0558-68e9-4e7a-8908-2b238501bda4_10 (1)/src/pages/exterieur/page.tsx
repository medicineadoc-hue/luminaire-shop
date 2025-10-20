import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';

export default function Exterieur() {
  const categories = [
    {
      name: 'Suspension extérieure',
      href: '/suspension-exterieure',
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20pendant%20lighting%20fixtures%20hanging%20from%20pergola%20or%20patio%20ceiling%20with%20weather%20resistant%20design%20and%20warm%20ambient%20lighting%20in%20garden%20setting&width=400&height=300&seq=8&orientation=landscape',
      description: 'Éclairage suspendu pour extérieur'
    },
    {
      name: 'Plafonnier extérieur',
      href: '/plafonnier-exterieur',
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20ceiling%20mounted%20light%20fixtures%20with%20waterproof%20design%20on%20covered%20patio%20or%20terrace%20with%20contemporary%20styling%20and%20warm%20lighting&width=400&height=300&seq=9&orientation=landscape',
      description: 'Luminaires de plafond étanches'
    },
    {
      name: 'Applique extérieure',
      href: '/applique-exterieure',
      image: 'https://readdy.ai/api/search-image?query=Modern%20outdoor%20wall%20sconce%20lighting%20fixtures%20mounted%20on%20exterior%20wall%20with%20weatherproof%20design%20and%20elegant%20contemporary%20styling&width=400&height=300&seq=10&orientation=landscape',
      description: 'Éclairage mural extérieur'
    },
    {
      name: 'Borne et Poteau',
      href: '/borne-poteau',
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20bollard%20and%20post%20lighting%20fixtures%20along%20garden%20pathway%20with%20modern%20design%20and%20warm%20ambient%20lighting%20in%20landscaped%20setting&width=400&height=300&seq=11&orientation=landscape',
      description: 'Éclairage de chemin et jardin'
    },
    {
      name: 'Projecteur',
      href: '/projecteur',
      image: 'https://readdy.ai/api/search-image?query=LED%20outdoor%20floodlight%20fixtures%20for%20security%20and%20landscape%20lighting%20with%20powerful%20illumination%20and%20weatherproof%20housing%20in%20modern%20design&width=400&height=300&seq=12&orientation=landscape',
      description: 'Éclairage de sécurité puissant'
    },
    {
      name: 'Encastrable sol',
      href: '/encastrable-sol',
      image: 'https://readdy.ai/api/search-image?query=Ground%20recessed%20lighting%20fixtures%20embedded%20in%20outdoor%20walkway%20or%20deck%20with%20subtle%20warm%20lighting%20and%20waterproof%20design&width=400&height=300&seq=13&orientation=landscape',
      description: 'Éclairage encastré au sol'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Applique VANCE',
      price: '268,00 MAD',
      image: 'https://luxalight.ma/733-home_default/applique-vance.jpg',
      brand: 'BRILLIANT'
    },
    {
      id: 2,
      name: 'Applique CHORUS',
      price: '138,00 MAD',
      image: 'https://luxalight.ma/1438-home_default/applique-chorus.jpg',
      brand: 'BRILLIANT'
    },
    {
      id: 3,
      name: 'Projecteur LED Extérieur',
      price: '450,00 MAD',
      image: 'https://readdy.ai/api/search-image?query=Modern%20LED%20outdoor%20floodlight%20with%20sleek%20black%20housing%20and%20powerful%20illumination%20for%20security%20lighting%20with%20clean%20product%20photography%20background&width=400&height=400&seq=14&orientation=squarish',
      brand: 'LUXALIGHT'
    },
    {
      id: 4,
      name: 'Borne Lumineuse Jardin',
      price: '320,00 MAD',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20outdoor%20bollard%20light%20with%20modern%20cylindrical%20design%20and%20warm%20LED%20lighting%20for%20garden%20pathway%20illumination%20with%20simple%20background&width=400&height=400&seq=15&orientation=squarish',
      brand: 'NEW GARDEN'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://readdy.ai/api/search-image?query=Beautiful%20outdoor%20lighting%20display%20with%20various%20exterior%20fixtures%20illuminating%20garden%20patio%20and%20walkways%20at%20dusk%20with%20warm%20ambient%20lighting%20and%20modern%20landscape%20design&width=1200&height=400&seq=16&orientation=landscape)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luminaires Extérieurs
            </h1>
            <p className="text-xl mb-6">
              Illuminez vos espaces extérieurs avec notre gamme complète d'éclairage résistant aux intempéries
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Découvrir la collection
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catégories d'Éclairage Extérieur</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Créez une ambiance parfaite dans vos espaces extérieurs avec nos solutions d'éclairage spécialisées
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produits Extérieurs Populaires</h2>
            <p className="text-gray-600">Nos luminaires extérieurs les plus appréciés</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Weather Resistance Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Résistance aux Intempéries</h2>
              <p className="text-gray-600">Tous nos luminaires extérieurs sont conçus pour résister aux conditions climatiques</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-drop-line text-2xl text-blue-500"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Étanche IP65</h3>
                <p className="text-gray-600 text-sm">Protection contre la pluie et les projections d'eau</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-sun-line text-2xl text-blue-500"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Anti-UV</h3>
                <p className="text-gray-600 text-sm">Résistant aux rayons ultraviolets et à la décoloration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-snowflake-line text-2xl text-blue-500"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tout Temps</h3>
                <p className="text-gray-600 text-sm">Fonctionne par temps chaud, froid et humide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}