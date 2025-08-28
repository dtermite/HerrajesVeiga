
import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Slide } from '../types';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {HERO_SLIDES.map((slide: Slide, index: number) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 animate-fade-in-down">{slide.title}</h1>
              <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">{slide.subtitle}</p>
              <a href="#" className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg">
                VER PRODUCTOS
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50" aria-label="Previous slide">
        <ChevronLeftIcon />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50" aria-label="Next slide">
        <ChevronRightIcon />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {HERO_SLIDES.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-white'}`} aria-label={`Go to slide ${index + 1}`}></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
