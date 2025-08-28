
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Brands from './components/Brands';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Brands />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
