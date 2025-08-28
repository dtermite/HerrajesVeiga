
import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import type { Product } from '../types';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">PRODUCTOS DESTACADOS</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
