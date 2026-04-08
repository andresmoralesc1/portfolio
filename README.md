# Portfolio - Andrés Morales

Portfolio profesional construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion. Diseño minimalista enfocado en Core Web Vitals y rendimiento.

## 🚀 Características

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Componentes UI** reutilizables
- **Dark mode** por defecto
- **SEO optimizado** con metadata
- **Responsive design**
- **Accesibilidad** (WCAG AA)

## 📂 Estructura del Proyecto

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Layout root
│   ├── page.tsx            # Home page
│   ├── portfolio/          # Portfolio page
│   ├── servicios/          # Servicios page
│   ├── sobre-mi/           # About page
│   └── ventures/           # Ventures pages
│       ├── page.tsx        # Ventures list
│       └── [id]/           # Dynamic venture pages
├── components/
│   ├── ui/                 # UI components
│   ├── layout/             # Layout components
│   └── sections/           # Page sections
├── lib/                   # Utilities y data
└── types/                 # TypeScript types
```

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/andresmoralesc1/portfolio.git
cd portfolio
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Crea build de producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## 🎨 Componentes Principales

- **Hero**: Sección principal con animación Entropy
- **Skills**: Barras de progreso animadas
- **Experience**: Timeline de experiencia laboral
- **ProjectCard**: Tarjetas de proyectos con hover effects
- **ServiceCard**: Tarjetas de servicios interactivas
- **Ventures**: Proyectos emprendedores con inversión

## 🧩 Tecnologías

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Fuentes**: Inter (Google Fonts)

## 📄 Licencia

MIT

## 👤 Autor

**Andrés Morales** - [LinkedIn](https://www.linkedin.com/in/andresmoralesc1/)

---

_Creado con ❤️ usando Next.js y Tailwind CSS_
