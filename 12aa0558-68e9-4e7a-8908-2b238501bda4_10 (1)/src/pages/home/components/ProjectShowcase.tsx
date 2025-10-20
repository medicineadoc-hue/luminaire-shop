
import { Link } from 'react-router-dom';

export default function ProjectShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nos Réalisations</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="https://luxalight.ma/img/cms/feature-image.jpg"
              alt="Nos Réalisations"
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">NOS RÉALISATIONS</h3>
                <Link
                  to="/portfolio"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Voir Plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
