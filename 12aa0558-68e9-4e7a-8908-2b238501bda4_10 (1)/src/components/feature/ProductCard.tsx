
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string | null;
  discount?: string | null;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group">
      <div className="relative">
        <Link to={`/produit/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </Link>
        
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            {product.discount}
          </div>
        )}
        
        <button className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200">
          <i className="ri-eye-line text-gray-600"></i>
        </button>
      </div>
      
      <div className="p-4">
        {product.brand && (
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        )}
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-500 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
            <span className="font-bold text-lg text-gray-900">
              {product.price}
            </span>
          </div>
        </div>
        
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
