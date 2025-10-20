
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Magasins() {
  const [selectedStore, setSelectedStore] = useState(null);

  const stores = [
    {
      id: 1,
      name: 'LuxaLight Paris Centre',
      address: '123 Rue de Rivoli, 75001 Paris',
      phone: '+33 1 42 60 30 30',
      hours: 'Lun-Sam: 10h-19h, Dim: 14h-18h',
      image: 'modern lighting showroom elegant display warm ambiance professional interior design luxury fixtures',
      services: ['Conseil personnalisé', 'Installation', 'SAV']
    },
    {
      id: 2,
      name: 'LuxaLight Lyon',
      address: '45 Rue de la République, 69002 Lyon',
      phone: '+33 4 78 42 15 60',
      hours: 'Lun-Sam: 9h30-19h30',
      image: 'contemporary lighting store interior bright showroom modern fixtures display professional lighting',
      services: ['Conseil personnalisé', 'Installation', 'Livraison']
    },
    {
      id: 3,
      name: 'LuxaLight Marseille',
      address: '78 La Canebière, 13001 Marseille',
      phone: '+33 4 91 54 32 10',
      hours: 'Lun-Sam: 10h-19h',
      image: 'lighting boutique mediterranean style warm atmosphere elegant fixtures display modern showroom',
      services: ['Conseil personnalisé', 'SAV', 'Livraison']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Magasins</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez nos showrooms et bénéficiez des conseils de nos experts en éclairage
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3414!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1635789012345!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Stores List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos Points de Vente</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {stores.map((store) => (
                <div key={store.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Bstore.image%7D&width=400&height=250&seq=${store.id}&orientation=landscape`}
                    alt={store.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{store.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <i className="ri-map-pin-line text-amber-600 mt-1 mr-3"></i>
                        <p className="text-gray-600">{store.address}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-phone-line text-amber-600 mr-3"></i>
                        <p className="text-gray-600">{store.phone}</p>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="ri-time-line text-amber-600 mt-1 mr-3"></i>
                        <p className="text-gray-600">{store.hours}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Services disponibles :</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.services.map((service, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                        Itinéraire
                      </button>
                      <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap">
                        Appeler
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
                <p className="text-xl text-gray-600">
                  Nos experts sont là pour vous conseiller dans votre projet d'éclairage
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-phone-line text-white text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Appelez-nous</h3>
                  <p className="text-gray-600">+33 1 42 60 30 30</p>
                  <p className="text-sm text-gray-500">Lun-Ven: 9h-18h</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mail-line text-white text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Écrivez-nous</h3>
                  <p className="text-gray-600">contact@luxalight.fr</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-calendar-line text-white text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rendez-vous</h3>
                  <p className="text-gray-600">Conseil personnalisé</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium mt-1 whitespace-nowrap">
                    Prendre RDV
                  </button>
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
