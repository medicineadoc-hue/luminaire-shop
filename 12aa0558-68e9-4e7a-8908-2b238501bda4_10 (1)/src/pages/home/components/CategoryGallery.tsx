
import { Link } from 'react-router-dom';

export default function CategoryGallery() {
  const categories = [
    {
      title: "INTÉRIEUR",
      subtitle: "Venez découvrir notre collection intérieur",
      image: "https://luxalight.ma/img/cms/block2.jpg",
      link: "/interieur",
      className: "lg:col-span-2 lg:row-span-2"
    },
    {
      title: "EXTÉRIEUR",
      subtitle: "Découvrez notre gamme extérieure",
      image: "https://luxalight.ma/img/cms/block-4.jpg",
      link: "/exterieur",
      className: ""
    },
    {
      title: "SPOTS & AMPOULES",
      subtitle: "Éclairez votre espace avec style",
      image: "https://luxalight.ma/img/cms/block3.jpg",
      link: "/spots-ampoules",
      className: ""
    },
    {
      title: "PROMOS",
      subtitle: "Offres spéciales et réductions",
      image: "https://luxalight.ma/img/cms/block5.jpg",
      link: "/offres-speciales",
      className: ""
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            illuminer votre espace
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${category.className}`}
              style={{ minHeight: index === 0 ? '500px' : '240px' }}
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
