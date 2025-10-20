import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';

export default function Professionnel() {
  const categories = [
    {
      name: 'Spot',
      href: '/spot',
      image: 'https://readdy.ai/api/search-image?query=Professional%20LED%20spotlights%20and%20track%20lighting%20fixtures%20for%20commercial%20spaces%20with%20adjustable%20beam%20angles%20and%20modern%20design%20in%20showroom%20setting&width=400&height=300&seq=17&orientation=landscape',
      description: 'Éclairage directionnel professionnel'
    },
    {
      name: 'Rail',
      href: '/rail',
      image: 'https://readdy.ai/api/search-image?query=Track%20lighting%20rail%20systems%20with%20multiple%20adjustable%20spotlights%20for%20commercial%20and%20retail%20spaces%20with%20contemporary%20black%20and%20white%20design&width=400&height=300&seq=18&orientation=landscape',
      description: 'Systèmes de rails d\'éclairage'
    },
    {
      name: 'Ampoules LED',
      href: '/ampoules',
      image: 'https://readdy.ai/api/search-image?query=Professional%20LED%20bulbs%20and%20lamps%20collection%20with%20various%20shapes%20and%20wattages%20for%20commercial%20lighting%20applications%20with%20clean%20white%20background&width=400&height=300&seq=19&orientation=landscape',
      description: 'Ampoules haute performance'
    },
    {
      name: 'Accessoire rail',
      href: '/accessoire-rail',
      image: 'https://readdy.ai/api/search-image?query=Track%20lighting%20accessories%20including%20connectors%20adapters%20and%20mounting%20hardware%20for%20professional%20lighting%20installations%20with%20technical%20product%20display&width=400&height=300&seq=20&orientation=landscape',
      description: 'Accessoires pour systèmes rail'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Spot ARLENO',
      price: '16,89 MAD',
      originalPrice: '39,00 MAD',
      image: 'https://luxalight.ma/2334-home_default/spot-arleno.jpg',
      brand: 'BRILLIANT',
      discount: '-56,7%'
    },
    {
      id: 2,
      name: 'Ampoule LED GU10',
      price: '38,50 MAD',
      image: 'https://luxalight.ma/3100-home_default/ampoule-led-gu10-.jpg',
      brand: 'BRILLIANT'
    },
    {
      id: 3,
      name: 'Rail d\'éclairage 2m',
      price: '180,00 MAD',
      image: 'https://readdy.ai/api/search-image?query=Professional%20black%20track%20lighting%20rail%20system%202%20meters%20long%20with%20mounting%20hardware%20for%20commercial%20spaces%20with%20clean%20product%20photography%20background&width=400&height=400&seq=21&orientation=squarish',
      brand: 'LUXALIGHT'
    },
    {
      id: 4,
      name: 'Spot LED 30W',
      price: '95,00 MAD',
      image: 'https://readdy.ai/api/search-image?query=Professional%20LED%20spotlight%2030W%20with%20adjustable%20beam%20angle%20and%20black%20housing%20for%20track%20lighting%20systems%20with%20simple%20white%20background&width=400&height=400&seq=22&orientation=squarish',
      brand: 'BRILLIANT'
    }
  ];

  const applications = [
    {
      title: 'Magasins et Boutiques',
      description: 'Éclairage d\'accentuation pour mettre en valeur vos produits',
      icon: 'ri-store-2-line'
    },
    {
      title: 'Bureaux et Espaces de Travail',
      description: 'Solutions d\'éclairage ergonomiques et efficaces',
      icon: 'ri-building-line'
    },
    {
      title: 'Restaurants et Hôtels',
      description: 'Ambiance lumineuse pour l\'hospitalité',
      icon: 'ri-hotel-line'
    },
    {
      title: 'Galeries et Musées',
      description: 'Éclairage précis pour l\'art et les expositions',
      icon: 'ri-gallery-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20commercial%20lighting%20showroom%20with%20track%20lighting%20systems%20spotlights%20and%20LED%20fixtures%20displayed%20in%20modern%20retail%20environment%20with%20clean%20contemporary%20design&width=1200&height=400&seq=23&orientation=landscape)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Éclairage Professionnel
            </h1>
            <p className="text-xl mb-6">
              Solutions d'éclairage haute performance pour commerces, bureaux et espaces professionnels
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Voir nos solutions
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions Professionnelles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète d'éclairage professionnel pour tous vos projets commerciaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications Professionnelles</h2>
            <p className="text-gray-600">Nos solutions d'éclairage s'adaptent à tous les secteurs d'activité</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${app.icon} text-2xl text-orange-500`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produits Professionnels</h2>
            <p className="text-gray-600">Équipements d'éclairage haute performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Spécifications Techniques</h2>
            <p className="text-gray-300">Performances et caractéristiques de nos produits professionnels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50,000h</div>
              <h3 className="font-bold mb-2">Durée de vie LED</h3>
              <p className="text-gray-300 text-sm">Longévité exceptionnelle pour un usage intensif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">90+</div>
              <h3 className="font-bold mb-2">IRC (Indice de Rendu des Couleurs)</h3>
              <p className="text-gray-300 text-sm">Reproduction fidèle des couleurs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">80%</div>
              <h3 className="font-bold mb-2">Économie d'énergie</h3>
              <p className="text-gray-300 text-sm">Réduction significative de la consommation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}