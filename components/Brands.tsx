
import React from 'react';
import { BRANDS } from '../constants';
import type { Brand } from '../types';

const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">NUESTRAS MARCAS</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {BRANDS.map((brand: Brand) => (
            <div key={brand.id} className="p-4">
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
