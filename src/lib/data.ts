import { Project, Service } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dlavo',
    description: 'Plataforma de comercio electrónico con experiencia de usuario optimizada y automatización de procesos de venta.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2023/04/2.png',
    url: 'https://dlavo.com',
    category: 'web',
    tags: ['E-commerce', 'UX/UI', 'Automatización']
  },
  {
    id: '2',
    title: 'Cleida',
    description: 'Desarrollo de plataforma digital con enfoque en conversión y optimización de procesos de negocio.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/01/hgtrfhgdfhg.jpg',
    url: 'https://cleida.com.co',
    category: 'web',
    tags: ['Web Development', 'Strategy', 'Automation']
  },
  {
    id: '3',
    title: 'Focco2',
    description: 'Organización sin ánimo de lucro con presencia digital optimizada para gestión de donaciones y voluntariado.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2023/05/Untitled-1-Recovered.jpg',
    url: 'https://focco2.org',
    category: 'web',
    tags: ['Non-profit', 'Web Design', 'UX']
  },
  {
    id: '4',
    title: 'Llantaya',
    description: 'E-commerce especializado en venta de llantas con integración de inventario y automatización de pedidos.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2024/08/llantaya.png',
    url: 'https://llantaya.co',
    category: 'automation',
    tags: ['E-commerce', 'Inventory', 'Automation']
  },
  {
    id: '5',
    title: 'Dgaraje',
    description: 'Plataforma de servicios automotrices con sistema de reservas y gestión de citas automatizado.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2023/04/5.png',
    url: 'https://dgaraje.com',
    category: 'automation',
    tags: ['Scheduling', 'Automation', 'Web App']
  },
  {
    id: '6',
    title: 'Ecoparque La Vega',
    description: 'Sitio web para parque temático ecológico con sistema de reservas y experiencia digital integrada.',
    image: 'https://andresmorales.com.co/wp-content/uploads/2023/04/3.png',
    url: 'https://ecoparquelavega.co',
    category: 'ui',
    tags: ['Tourism', 'Reservations', 'UI/UX']
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'UX/UI Design',
    description: 'Diseño de interfaces minimalistas enfocado en usabilidad y accesibilidad.',
    icon: 'layout'
  },
  {
    id: '2',
    title: 'Automatización',
    description: 'Soluciones inteligentes con n8n, Make y APIs personalizadas.',
    icon: 'zap'
  },
  {
    id: '3',
    title: 'Consultoría Técnica',
    description: 'Asesoría en arquitectura de software y optimización de procesos.',
    icon: 'terminal'
  }
];
