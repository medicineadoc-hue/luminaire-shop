
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function MonCompte() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Mon Compte</h1>
              <p className="text-xl text-gray-600">Gérez vos informations personnelles et vos commandes</p>
            </div>
          </div>
        </section>

        {/* Account Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'profile' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-user-line mr-2"></i>
                      Profil
                    </button>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'orders' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-shopping-bag-line mr-2"></i>
                      Mes Commandes
                    </button>
                    <button
                      onClick={() => setActiveTab('addresses')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'addresses' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-map-pin-line mr-2"></i>
                      Adresses
                    </button>
                    <button
                      onClick={() => setActiveTab('favorites')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'favorites' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-heart-line mr-2"></i>
                      Favoris
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {activeTab === 'profile' && (
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations Personnelles</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                          <input
                            type="text"
                            defaultValue="Jean"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                          <input
                            type="text"
                            defaultValue="Dupont"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="jean.dupont@email.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                        <input
                          type="tel"
                          defaultValue="+33 1 23 45 67 89"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
                      >
                        Mettre à jour
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes Commandes</h2>
                    <div className="space-y-4">
                      {[1, 2, 3].map((order) => (
                        <div key={order} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">Commande #CMD{order}234</h3>
                              <p className="text-sm text-gray-600">Passée le 15 janvier 2024</p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              Livrée
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-gray-600">3 articles • 245,90 €</p>
                            <button className="text-amber-600 hover:text-amber-700 font-medium whitespace-nowrap">
                              Voir détails
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Mes Adresses</h2>
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                        Ajouter une adresse
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">Adresse principale</h3>
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">
                            Par défaut
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          123 Rue de la Lumière<br />
                          75001 Paris<br />
                          France
                        </p>
                        <div className="mt-3 flex space-x-2">
                          <button className="text-amber-600 hover:text-amber-700 text-sm whitespace-nowrap">
                            Modifier
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm whitespace-nowrap">
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'favorites' && (
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes Favoris</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={`https://readdy.ai/api/search-image?query=modern%20pendant%20light%20fixture%20elegant%20design%20warm%20lighting%20home%20decor%20minimalist%20style&width=300&height=300&seq=${item}&orientation=squarish`}
                            alt="Produit favori"
                            className="w-full h-48 object-cover object-top"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Suspension Design</h3>
                            <p className="text-amber-600 font-bold mb-3">89,90 €</p>
                            <div className="flex space-x-2">
                              <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm whitespace-nowrap">
                                Ajouter au panier
                              </button>
                              <button className="p-2 text-red-600 hover:text-red-700">
                                <i className="ri-heart-fill"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
