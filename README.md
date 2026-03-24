# Portfolio Personal - Ruben Martin

Portfolio web desarrollado con Nuxt 4 para mostrar perfil profesional, stack tecnico, proyectos y experiencia laboral.

## Demo visual

![Hero del portfolio](./public/fondo.jpg)

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Pinia
- Tailwind CSS
- Nuxt Image
- ESLint + Prettier
- Husky + lint-staged + Commitlint

## Requisitos

- Node.js `>=20.0.0`

## Instalacion

```bash
npm install
```

## Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build de produccion
npm run build

# Preview del build
npm run preview

# Generacion esttica
npm run generate
```

## Estructura del proyecto

```text
portfolio/
	assets/
		css/main.css              # Variables de estilo globales y Tailwind
	components/                 # Componentes reutilizables y secciones
	composables/
		usePortfolioData.ts       # Acceso reactivo a datos del store
	content/
		data.json                 # Fuente de datos editable (perfil, proyectos, experiencia)
	layouts/
		default.vue               # Estructura base (header / main / footer)
	pages/
		index.vue                 # Landing principal
	public/
		fondo.jpg
		pinguino.jpg
		proyects/
	stores/
		portfolio.ts              # Store de Pinia con datos tipados
	types/
		portfolio.ts              # Interfaces TypeScript del dominio
```

## Arquitectura de datos

1. Los datos se definen en `content/data.json`.
2. El store `stores/portfolio.ts` carga y tipa esa informacion.
3. El composable `composables/usePortfolioData.ts` expone `personal`, `projects` y `experiences`.
4. Los componentes consumen estos datos para renderizar el portfolio.

## Personalizacion rapida

### 1) Informacion personal

Edita `content/data.json` en el nodo `personal`:

- `name`
- `role`
- `description`
- `aboutParagraphs`
- `profileImage`

### 2) Proyectos

En el array `projects` puedes modificar:

- `title`
- `description`
- `technologies`
- `githubUrl`
- `demoUrl`
- `imageSrc`

### 3) Experiencia

En el array `experiences` actualiza:

- `year`
- `title`
- `company`
- `description`

### 4) Estilos y tema

- Variables globales: `assets/css/main.css`
- Configuracion Nuxt/Tailwind: `nuxt.config.ts`

## Calidad de codigo y commits

Este proyecto tiene hooks de Git configurados con Husky:

- `pre-commit`: ejecuta `lint-staged` sobre archivos `js/ts/vue`
- `commit-msg`: valida convencion de commits con Commitlint

## SEO

La pagina principal define metadatos SEO en `pages/index.vue` con `useSeoMeta`.

## Despliegue

Puedes desplegar el proyecto en cualquier plataforma compatible con Nuxt 4 (por ejemplo Vercel, Netlify o Node server) usando:

```bash
npm run build
npm run preview
```
