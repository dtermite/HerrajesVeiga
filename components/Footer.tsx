
import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black text-white tracking-wider mb-4">VEIGA</h3>
            <p className="text-sm">
              Distribuidor mayorista de herrajes para muebles y obras. Más de 40 años brindando calidad y servicio.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">NAVEGACIÓN</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Productos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Quienes Somos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">CONTACTO</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="mt-1 mr-3 flex-shrink-0" />
                <span>Av. Sáenz 1143, C1437 CABA, Argentina</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-3 flex-shrink-0" />
                <a href="tel:+541149186704" className="hover:text-yellow-400">(011) 4918-6704</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-3 flex-shrink-0" />
                <a href="mailto:info@herrajesveiga.com.ar" className="hover:text-yellow-400">info@herrajesveiga.com.ar</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">SEGUINOS</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-yellow-400"><FacebookIcon size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-yellow-400"><InstagramIcon size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Herrajes Veiga. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
