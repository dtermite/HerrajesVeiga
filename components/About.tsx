
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=20" 
              alt="Sobre Herrajes Veiga" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">QUIENES SOMOS</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Somos una empresa familiar con más de 40 años de trayectoria en el rubro, dedicada a la distribución mayorista de herrajes para muebles y obras.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nuestro compromiso es ofrecer productos de la más alta calidad, acompañados de un servicio de excelencia y asesoramiento personalizado para cada uno de nuestros clientes.
            </p>
            <a href="#" className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors text-lg">
              CONOCENOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
