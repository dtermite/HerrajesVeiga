
import type { Product, Brand, Slide } from './types';

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/1920/800?random=1',
    title: 'Calidad y Diseño',
    subtitle: 'Soluciones innovadoras para tus proyectos.',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/1920/800?random=2',
    title: 'Las Mejores Marcas',
    subtitle: 'Trabajamos con los líderes del mercado.',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/1920/800?random=3',
    title: 'Asesoramiento Profesional',
    subtitle: 'Te ayudamos a encontrar el herraje perfecto.',
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  { id: 1, name: 'Tirador de Acero Inoxidable', imageUrl: 'https://picsum.photos/400/400?random=11' },
  { id: 2, name: 'Bisagra Cierre Suave', imageUrl: 'https://picsum.photos/400/400?random=12' },
  { id: 3, name: 'Corredera Telescópica', imageUrl: 'https://picsum.photos/400/400?random=13' },
  { id: 4, name: 'Pistón a Gas para Puerta', imageUrl: 'https://picsum.photos/400/400?random=14' },
  { id: 5, name: 'Cerradura de Embutir', imageUrl: 'https://picsum.photos/400/400?random=15' },
  { id: 6, name: 'Manija Doble Balancín', imageUrl: 'https://picsum.photos/400/400?random=16' },
  { id: 7, name: 'Rueda para Mueble', imageUrl: 'https://picsum.photos/400/400?random=17' },
  { id: 8, name: 'Sistema Corredizo', imageUrl: 'https://picsum.photos/400/400?random=18' },
];

export const BRANDS: Brand[] = [
  { id: 1, name: 'Marca A', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+A' },
  { id: 2, name: 'Marca B', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+B' },
  { id: 3, name: 'Marca C', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+C' },
  { id: 4, name: 'Marca D', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+D' },
  { id: 5, name: 'Marca E', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+E' },
  { id: 6, name: 'Marca F', logoUrl: 'https://via.placeholder.com/150x80/cccccc/808080?text=Marca+F' },
];
