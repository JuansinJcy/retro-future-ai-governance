
# Página: Gobernanza en IA y Uso Ético

Una landing page de una sola ruta (`/`) con estilo **moderno + retro vintage**, mezclando azules eléctricos futuristas con beige/mostaza vintage, tipografía Roboto + Courier New, iconografía estilo NASA años 70-80 y micro-interacciones tipo Windows 95 reinterpretadas con CSS moderno.

## Estructura de la página

1. **Hero** — Título grande "Gobernanza en IA: Tecnología con Responsabilidad", subtítulo en Courier New, dos CTAs ("Explorar principios" / "Uso ético"). Fondo con grid sutil tipo blueprint y un sello/insignia circular estilo NASA.
2. **¿Qué es la Gobernanza en IA?** — Bloque de texto con cita destacada en Courier New y una ilustración tipo manual antiguo.
3. **¿Por qué es importante?** — 3 tarjetas: *Transparente*, *Justa*, *Segura*, cada una con un icono lineal estilo retro-técnico.
4. **Uso Ético de la IA** — 3 columnas: *Privacidad*, *Responsabilidad*, *Beneficio social*, con badges estilo misión espacial.
5. **¿Qué puedes hacer tú?** — Lista de acciones prácticas con viñetas tipo checklist vintage.
6. **CTA final + Footer** — Bloque con cita y footer minimalista con texto monoespaciado.

## Sistema de diseño (`src/styles.css`)

Tokens nuevos en oklch:
- `--background`: beige cálido claro (`oklch(0.96 0.02 85)`)
- `--foreground`: azul muy oscuro casi negro
- `--primary`: azul eléctrico (`oklch(0.55 0.22 255)`)
- `--accent`: mostaza (`oklch(0.78 0.14 85)`)
- `--secondary`: beige medio
- `--muted`: beige tenue
- `--card`: beige claro con borde marcado
- `--retro-grid`: color para líneas blueprint
- Radios pequeños (estética técnica), sombras duras tipo "hard shadow" desplazada (Win95 moderno).

Modo oscuro: invierte a fondo azul profundo con acentos mostaza.

## Tipografía

- `Roboto` (400/500/700) para UI y cuerpo.
- `Courier Prime` (alternativa web a Courier New) para títulos secundarios, citas, etiquetas y números.
- Cargadas vía Google Fonts en `__root.tsx` head links.
- Clase utilitaria `.font-mono-retro` aplicada a citas/badges.

## Iconografía

SVG inline estilo línea fina (1.5px), geométricos, tipo manual técnico NASA: globo con meridianos, balanza, escudo, ojo, engranaje, cohete simplificado. Sin librerías de iconos genéricos para mantener carácter.

## Animaciones (CSS puro, sutiles)

- Botones: borde con offset estilo Win95 (sombra dura `4px 4px 0 0 var(--foreground)`); en hover la sombra se reduce a `0 0` y el botón se desplaza `translate(4px, 4px)` — efecto de "click" mecánico moderno.
- Tarjetas: hover sube `-2px`, sombra dura cambia de color.
- Enlaces: subrayado animado con `background-size` transition.
- Hero: aparición con fade + slide muy suave (200-300ms).
- Sin librerías de animación; todo en `styles.css` con transitions.

## Archivos a modificar/crear

### Modificados
- `src/routes/__root.tsx` — meta tags SEO en español (title, description, og:*), preconnect + link a Google Fonts (Roboto + Courier Prime).
- `src/routes/index.tsx` — reemplazar PlaceholderIndex por la landing real.
- `src/styles.css` — nuevos tokens (azul eléctrico, mostaza, beige), familia de fuentes, utilidades `.font-mono-retro`, `.btn-retro`, `.card-retro`, fondo blueprint.

### Nuevos componentes (`src/components/landing/`)
- `Hero.tsx`
- `WhatIsSection.tsx`
- `WhyImportantSection.tsx` (3 tarjetas)
- `EthicalUseSection.tsx` (3 columnas)
- `WhatCanYouDoSection.tsx`
- `CtaFooter.tsx`
- `RetroIcons.tsx` — set de SVGs inline reutilizables (Globe, Scale, Shield, Eye, Rocket, Gear, Check).

## Detalles técnicos

- Una sola ruta `/` (la página completa cabe como landing). Sin necesidad de rutas adicionales.
- Todo el contenido en español.
- Semántica HTML correcta: un solo `<h1>`, `<section>` con `aria-labelledby`, `<article>` para tarjetas, alt text en SVGs decorativos = `aria-hidden`.
- Responsivo: mobile-first, grids colapsan a 1 columna < md.
- Sin dependencias nuevas de npm — solo Google Fonts vía `<link>`.
