
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Intérieur', 
      href: '/interieur',
      submenu: [
        { name: 'Suspension', href: '/suspension' },
        { name: 'Suspension double hauteur', href: '/suspension-double' },
        { name: 'Plafonnier', href: '/plafonnier' },
        { name: 'Lustre', href: '/lustre' },
        { name: 'Applique', href: '/applique' },
        { name: 'Lampadaire', href: '/lampadaire' },
        { name: 'Lampe de table', href: '/lampe-table' }
      ]
    },
    { 
      name: 'Professionnel', 
      href: '/professionnel',
      submenu: [
        { name: 'Accessoire rail', href: '/accessoire-rail' },
        { name: 'Spot', href: '/spot' },
        { name: 'Ampoules', href: '/ampoules' },
        { name: 'Rail', href: '/rail' }
      ]
    },
    { 
      name: 'Extérieur', 
      href: '/exterieur',
      submenu: [
        { name: 'Suspension extérieure', href: '/suspension-exterieure' },
        { name: 'Plafonnier extérieur', href: '/plafonnier-exterieur' },
        { name: 'Applique extérieure', href: '/applique-exterieure' },
        { name: 'Déco extérieure', href: '/deco-exterieure' },
        { name: 'Borne et Poteau', href: '/borne-poteau' },
        { name: 'Piquet de terre', href: '/piquet-terre' },
        { name: 'Encastrable sol', href: '/encastrable-sol' },
        { name: 'Balisage', href: '/balisage' },
        { name: 'Projecteur', href: '/projecteur' },
        { name: 'Hublot', href: '/hublot' }
      ]
    },
    { 
      name: 'Offres Spéciales', 
      href: '/offres-speciales',
      submenu: [
        { name: 'Éclairage Intérieur', href: '/offres-interieur' },
        { name: 'Éclairage Extérieur', href: '/offres-exterieur' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' }
  ];

  return (
    <>
      {/* Top Bar - Desktop only */}
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Link to="/magasins" className="text-gray-600 hover:text-orange-500 mr-4">
                <i className="ri-map-pin-line mr-1"></i>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/212660675200" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="https://web.facebook.com/luxalight.ma" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="https://www.instagram.com/luxalight/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCHQmucJSlMd7_Niwz7-9QOw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="https://www.linkedin.com/company/luxalight/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="https://www.tiktok.com/@luxalight.officiel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <i className="ri-tiktok-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://luxalight.ma/img/logo-1731667317.jpg" 
                alt="Luxalight" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link 
                    to={item.href}
                    className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.submenu && <i className="ri-arrow-down-s-line ml-1"></i>}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Recherche..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                />
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Mobile Search Button */}
              <button className="md:hidden text-gray-600 hover:text-gray-900">
                <i className="ri-search-line text-xl"></i>
              </button>

              {/* Account */}
              <Link to="/mon-compte" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200">
                <i className="ri-user-line text-xl mr-1"></i>
                <span className="hidden sm:block text-sm">Connexion</span>
              </Link>

              {/* Cart */}
              <Link to="/panier" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200">
                <i className="ri-shopping-bag-line text-xl mr-1"></i>
                <div className="hidden sm:flex flex-col items-start">
                  <span className="text-sm font-medium">0,00 MAD</span>
                  <span className="text-xs text-gray-500">0 articles</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Link 
                    to={item.href}
                    className="block text-gray-700 hover:text-orange-500 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-orange-500 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
