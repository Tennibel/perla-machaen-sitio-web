# Perla Machaen — Rediseño web (Astro)

Nuevo sitio de **Perla Machaen**: hub de autoridad, educación y conversión en
casas saludables, longevidad y bienestar (Método LISI · Academia CocreaDoers ·
Real Estate de Longevidad).

## Stack

- [Astro](https://astro.build) (estático, sin framework de UI)
- CSS vanilla con variables (paleta "lujo consciente")
- Tipografías: Cormorant Garamond (display) + Jost (body)

## Requisitos

- Node.js 18+ (probado con Node 25)

## Comandos

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:4321
npm run build   # build de producción en ./dist
npm run preview # previsualiza el build
```

## Estructura

```
public/images/            # Imágenes reales del sitio actual de Perla Machaen
src/
  components/             # Header, Footer, PageHero, CtaBand
  data/site.ts            # Datos centrales del sitio
  layouts/Layout.astro    # Layout base (SEO, fonts, header/footer)
  pages/                  # Rutas del sitio
  styles/global.css       # Sistema de diseño global
```

## Páginas

| Ruta                        | Descripción                               |
| --------------------------- | ----------------------------------------- |
| `/`                         | Inicio (hero, evolución, mundos, CTA)     |
| `/metodo-lisi/`             | La nueva profesión + aplicación           |
| `/casas-saludables/`        | Educación + SEO + checklist               |
| `/conferencias/`            | Booking de conferencias                   |
| `/academia-cocreadoers/`    | Comunidad y cursos                        |
| `/real-estate-longevidad/`  | Trayectoria inmobiliaria con nuevo ángulo |
| `/prensa/`                  | Medios y apariciones (con filtros)        |
| `/sobre-perla/`             | Historia y evolución                      |
| `/contacto/`                | Contacto segmentado por intención         |
| `/recursos/`                | Contenido SEO / lead magnets              |

## Notas

- Los formularios usan el atributo estándar de Netlify Forms; reemplázalo por tu
  integración de email/WhatsApp/CRM cuando corresponda.
- Los datos de contacto (email, WhatsApp, redes) están en `src/data/site.ts`.
  Ajústalos con los datos reales de Perla antes de publicar.