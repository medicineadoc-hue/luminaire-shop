import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Hôtel de Luxe - Casablanca',
      category: 'Hôtellerie',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20lobby%20with%20elegant%20pendant%20lighting%20and%20sophisticated%20ceiling%20fixtures%20creating%20warm%20ambient%20atmosphere%20in%20modern%20Moroccan%20hospitality%20design&width=600&height=400&seq=27&orientation=landscape',
      description: 'Éclairage complet d\'un hôtel 5 étoiles avec plus de 200 luminaires personnalisés'
    },
    {
      id: 2,
      title: 'Restaurant Gastronomique - Marrakech',
      category: 'Restauration',
      image: 'https://readdy.ai/api/search-image?query=Upscale%20restaurant%20interior%20with%20dramatic%20pendant%20lighting%20over%20dining%20tables%20and%20accent%20lighting%20creating%20intimate%20dining%20atmosphere&width=600&height=400&seq=28&orientation=landscape',
      description: 'Ambiance lumineuse sophistiquée pour une expérience culinaire unique'
    },
    {
      id: 3,
      title: 'Boutique de Mode - Rabat',
      category: 'Commerce',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fashion%20boutique%20with%20track%20lighting%20and%20spotlights%20highlighting%20clothing%20displays%20and%20merchandise%20in%20contemporary%20retail%20space&width=600&height=400&seq=29&orientation=landscape',
      description: 'Éclairage d\'accentuation pour mettre en valeur les collections'
    },
    {
      id: 4,
      title: 'Villa Contemporaine - Tanger',
      category: 'Résidentiel',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20villa%20living%20room%20with%20modern%20pendant%20lights%20ceiling%20fixtures%20and%20ambient%20lighting%20in%20luxury%20residential%20interior%20design&width=600&height=400&seq=30&orientation=landscape',
      description: 'Éclairage architectural pour une villa moderne de 500m²'
    },
    {
      id: 5,
      title: 'Bureaux Corporate - Casablanca',
      category: 'Bureaux',
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20space%20with%20professional%20LED%20lighting%20track%20systems%20and%20contemporary%20fixtures%20for%20productive%20work%20environment&width=600&height=400&seq=31&orientation=landscape',
      description: 'Solutions d\'éclairage ergonomiques pour 1000m² de bureaux'
    },
    {
      id: 6,
      title: 'Spa & Wellness - Agadir',
      category: 'Bien-être',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20spa%20interior%20with%20soft%20ambient%20lighting%20and%20relaxing%20atmosphere%20created%20by%20carefully%20placed%20fixtures%20and%20warm%20lighting%20design&width=600&height=400&seq=32&orientation=landscape',
      description: 'Éclairage zen et relaxant pour un centre de bien-être'
    }
  ];

  const categories = ['Tous', 'Hôtellerie', 'Restauration', 'Commerce', 'Résidentiel', 'Bureaux', 'Bien-être'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20lighting%20installation%20portfolio%20showcase%20with%20various%20completed%20projects%20displaying%20modern%20fixtures%20in%20different%20commercial%20and%20residential%20settings&width=1200&height=400&seq=33&orientation=landscape)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Réalisations
            </h1>
            <p className="text-xl mb-6">
              Découvrez nos projets d'éclairage les plus remarquables à travers le Maroc
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm opacity-90">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  index === 0 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-gray-600">De la conception à la réalisation, nous vous accompagnons à chaque étape</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Analyse de vos besoins et de votre espace</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Conception</h3>
              <p className="text-gray-600 text-sm">Création d'un plan d'éclairage personnalisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Mise en place par nos équipes expertes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suivi</h3>
              <p className="text-gray-600 text-sm">Maintenance et support après installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-gray-600">Ce que disent nos clients de nos réalisations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Luxalight a transformé notre hôtel avec un éclairage exceptionnel. L'ambiance créée dépasse nos attentes."
              </p>
              <div className="font-bold text-gray-900">Ahmed Benali</div>
              <div className="text-sm text-gray-500">Directeur Hôtel Atlas</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Service professionnel et produits de qualité. Notre restaurant n'a jamais été aussi élégant."
              </p>
              <div className="font-bold text-gray-900">Fatima Alaoui</div>
              <div className="text-sm text-gray-500">Propriétaire Restaurant Le Jardin</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Équipe compétente et à l'écoute. L'éclairage de notre villa est parfait."
              </p>
              <div className="font-bold text-gray-900">Youssef Tazi</div>
              <div className="text-sm text-gray-500">Client Particulier</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Votre Projet d'Éclairage</h2>
            <p className="text-xl mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Demander un devis
              </button>
              <a 
                href="tel:+212660675200"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-500 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}