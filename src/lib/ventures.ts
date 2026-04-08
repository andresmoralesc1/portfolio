export interface Venture {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  fullDescription: string;
  category: 'social' | 'tech' | 'food' | 'culture';
  image: string;
  investment: string;
  status: 'concept' | 'development' | 'seeking-funding';
}

export const ventures: Venture[] = [
  {
    id: 'clean-bathrooms',
    title: 'Clean Bathrooms',
    titleEn: 'Clean Bathrooms',
    description: 'Baños públicos ecológicos y modulares para Cali. Solución al problema de solo 4 baños públicos para 2.5 millones de personas.',
    fullDescription: `Clean Bathrooms S.A.S. implementa baños públicos modulares, ecológicos y diseñados artísticamente en contenedores. Antes de la implementación, se realizan estudios de factibilidad detallados para garantizar estimación precisa de costos, cumplimiento y preparación operativa.

## El Problema
Cali, una ciudad de 2.5 millones de personas, tiene solo cuatro baños públicos, lo que genera problemas de higiene, inconvenientes públicos y posibles sanciones legales para quienes recurren a soluciones alternativas.

## La Solución
- Baños modulares en contenedores
- Diseño artístico y ecológico
- Sostenible y escalable
- Estudios de factibilidad previos`,
    category: 'social',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/batj-1024x576.jpg',
    investment: '$50,000 USD',
    status: 'seeking-funding',
  },
  {
    id: 'gps-street-sellers',
    title: 'GPS Street Sellers',
    titleEn: 'GPS Street Sellers',
    description: 'Plataforma GPS que conecta vendedores informales con consumidores locales. Aumenta la visibilidad de 12 millones de vendedores en Colombia.',
    fullDescription: `GPS Street Sellers es una plataforma que usa tecnología GPS para ayudar a vendedores callejeros informales a aumentar su visibilidad y conectar con consumidores cercanos.

## Misión
Mejorar los medios de vida de los vendedores informales proporcionándoles una forma accesible y asequible de llegar a más clientes.

## Características
- Seguimiento GPS de vendedores en tiempo real
- Publicidad hiper-local para empresas
- Conexión directa entre vendedores y consumidores
- Sistemas de reseñas y calificaciones

## Proyección Anual
- Ingresos: $19,200 USD
- Gastos: $20,100 USD
- Utilidad neta: ~$900 USD`,
    category: 'tech',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/vendor-768x432.jpg',
    investment: '$25,000 USD',
    status: 'development',
  },
  {
    id: 'vertical-farming',
    title: 'Vertical Farming Rural',
    titleEn: 'Vertical Farming for Rural Areas',
    description: 'Agricultura vertical para zonas rurales. Tecnología accesible para agricultores con sistemas hidropónicos y capacitación.',
    fullDescription: `Sistema de agricultura vertical diseñado específicamente para áreas rurales, combinando tecnología hidropónica accesible con capacitación práctica para agricultores locales.

## Objetivos
- Hacer la agricultura vertical accesible
- Capacitar a agricultores locales
- Reducir el uso de agua y tierra
- Generar empleo rural

## Flujos de Ingresos
- Publicidad hiper-local: $9,000 USD/año
- Listados patrocinados: $7,200 USD/año
- Alianzas afiliadas: $3,000 USD/año`,
    category: 'social',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/vendor-768x432.jpg',
    investment: '$30,000 USD',
    status: 'concept',
  },
  {
    id: 'festival-afro',
    title: 'Festival Afro Sóngoro Cosongo',
    titleEn: 'Afro Festival Sóngoro Cosongo',
    description: 'Festival multidisciplinario que celebra el patrimonio afrodescendiente a través de danza, teatro, poesía y música.',
    fullDescription: `Sóngoro Cosongo es un festival multidisciplinario que celebra el patrimonio afrodescendiente a través de danza, teatro, poesía y música. Inspirado en las ricas tradiciones culturales de la Costa Pacífica de Colombia.

## Misión
Destacar y preservar las tradiciones afrocolombianas creando experiencias artísticas transformadoras.

## Características
- Siete actos distintos basados en poesía y narrativas afrocolombianas
- Música en vivo con instrumentos tradicionales
- Talleres educativos para escuelas y comunidades
- Proyecciones visuales interactivas

## Buscamos
Inversión inicial de **$20,000 USD** para lanzar el festival mejorado.`,
    category: 'culture',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/songoro-1024x576.jpg',
    investment: '$20,000 USD',
    status: 'seeking-funding',
  },
  {
    id: 'reforestation',
    title: 'Reforestation as a Service',
    titleEn: 'Reforestation as a Service (RaaS)',
    description: 'Modelo de negocio sostenible que ofrece compensación de carbono, restauración de ecosistemas y reforestación escalable.',
    fullDescription: `Reforestation as a Service (RaaS) es un modelo de negocio sostenible que ofrece a empresas, individuos y gobiernos la oportunidad de compensar emisiones de carbono y restaurar ecosistemas.

## Misión
Transformar tierras degradadas en bosques prósperos, empoderando comunidades y empresas para combatir activamente el cambio climático.

## Objetivos
- Establecer vivero piloto de 2,000-5,000 m²
- Plantar 10,000-20,000 plántulas anuales
- Ofrecer servicios de compensación de carbono
- Expandir a escala regional en 3 años

## Flujos de Ingresos
- Suscripciones de compensación de carbono: $10-$50/mes
- Patrocinios corporativos
- Créditos de carbono verificables

## Buscamos
Inversión de **$50,000-$100,000 USD**`,
    category: 'social',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/raas-img1-1024x576.png',
    investment: '$50,000 - $100,000 USD',
    status: 'seeking-funding',
  },
  {
    id: 'pataconada',
    title: 'La Pataconada',
    titleEn: 'La Pataconada',
    description: 'Restaurante especializado en patacones con delivery móvil en bicicleta. Tradición colombiana con innovación.',
    fullDescription: `La Pataconada es un restaurante especializado en patacones con diversos toppings y salsas. Combina un restaurante físico con un servicio único de delivery móvil usando una bicicleta equipada con freidora.

## Concepto
- Restaurante físico de patacones
- Sistema de delivery en bicicleta
- Target: parques, eventos y zonas de oficinas

## Menú
- Patacones con proteínas: pollo, carne, cerdo
- Opciones vegetarianas y veganas
- Salsas: ajo mayonesa, chipotle, chimichurri, cilantro-limón
- Bebidas: jugos frescos, kombucha y kefir

## Buscamos
Inversión inicial de **$10,000 USD**`,
    category: 'food',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/IMG-20151203-WA0004.jpg',
    investment: '$10,000 USD',
    status: 'development',
  },
  {
    id: 'visa-advisor',
    title: 'AI Visa Advisor',
    titleEn: 'AI Visa Advisor',
    description: 'Chatbot de IA que simplifica el proceso de solicitud de visa. Guía personalizada 24/7 para más de 50 países.',
    fullDescription: `El chatbot Visa Advisor es un asistente virtual diseñado para simplificar el proceso de solicitud de visa para viajeros. Proporciona orientación instantánea, precisa y personalizada.

## Características
- Consulta de requisitos de visa personalizada
- Guía paso a paso para solicitudes
- Actualizaciones en tiempo real de regulaciones
- Soporte premium con agentes humanos
- Enlaces de afiliados para servicios relacionados

## Modelo de Negocio
- Plan gratuito con características básicas
- Planes premium competitivos
- Alianzas de afiliados
- Publicidad dirigida

## Buscamos
Inversión de **$10,000 USD** para desarrollo y lanzamiento.`,
    category: 'tech',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/IMG-20151203-WA0004.jpg',
    investment: '$10,000 USD',
    status: 'development',
  },
  {
    id: 'tax-advisor',
    title: 'AI Tax Advisor',
    titleEn: 'AI Tax Advisor',
    description: 'Chatbot de IA que simplifica el cumplimiento fiscal para individuos y pequeñas empresas. Asesoramiento personalizado y paso a paso.',
    fullDescription: `El chatbot Tax Advisor es un asistente virtual que simplifica el cumplimiento fiscal para individuos y pequeñas empresas. Proporciona respuestas instantáneas y precisas.

## Características
- Guía de declaración de impuestos paso a paso
- Buscador de deducciones y beneficios fiscales
- Actualizaciones en tiempo real de leyes fiscales
- Asesoramiento personalizado según ingresos y tipo de negocio
- Soporte premium con expertos fiscales

## Objetivos
- Desarrollar chatbot para freelancers y emprendedores
- Monetizar mediante suscripciones premium
- Alcanzar 1,000+ usuarios activos en el primer año

## Modelo de Negocio
- Suscripciones premium
- Alianzas de afiliados
- Ingresos publicitarios`,
    category: 'tech',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/12/taxp-1024x576.jpg',
    investment: '$15,000 USD',
    status: 'concept',
  },
];
