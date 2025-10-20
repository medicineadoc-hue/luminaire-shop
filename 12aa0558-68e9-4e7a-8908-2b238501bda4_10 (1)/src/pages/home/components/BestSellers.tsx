
import { useState } from 'react';
import { bestSellingProducts } from '../../../mocks/products';
import ProductCard from '../../../components/feature/ProductCard';

export default function BestSellers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerPage = 4;
  const totalSlides = Math.ceil(bestSellingProducts.length / productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProducts = () => {
    const start = currentSlide * productsPerPage;
    return bestSellingProducts.slice(start, start + productsPerPage);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meilleures Ventes</h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            disabled={currentSlide === 0}
          >
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            disabled={currentSlide === totalSlides - 1}
          >
            <i className="ri-arrow-right-line text-xl text-gray-600"></i>
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
            {getCurrentProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
