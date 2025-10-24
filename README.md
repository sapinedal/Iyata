# Iyata

Dashboard Builder UI desarrollado con Vue 3 y Nuxt 4.

## 🎨 Diseño

Este proyecto está basado en el diseño de Figma realizado por Samuel Pineda
[Dashboard Builder UI VUE3](https://www.figma.com/design/OEgiYkBUB6blhRbvVOGb3j/Dashboard-Builder-UI-VUE3?node-id=0-1&t=eBDN4eQcvFPWgG40-1)

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

El proyecto se ejecutará en `http://localhost:3000`

## 📦 Tecnologías

- **Nuxt 4** - Framework de Vue.js
- **Vue 3** - Framework JavaScript progresivo
- **Tailwind CSS 4** - Framework CSS utility-first
- **TypeScript** - Tipado estático
- **Lucide Vue Next** - Iconos modernos para Vue

## 🧩 Componentes del Dashboard

### KpiCard
Componente para mostrar métricas clave de rendimiento (KPIs).

**Props:**
- `title` (String) - Título del KPI
- `value` (String | Number) - Valor principal a mostrar
- `subtitle` (String) - Descripción o contexto adicional
- `icon` (Object | Function) - Icono de Lucide Vue Next

**Ejemplo de uso:**
```vue
<KpiCard 
  title="Ventas Totales" 
  value="4.000" 
  subtitle="Ventas totales del mes" 
  :icon="DollarSign" 
/>
```

### UserComponents
Componente para mostrar una lista de miembros del personal con su estado.

**Props:**
- `title` (String) - Título del componente
- `users` (Array) - Lista de usuarios con la siguiente estructura:
  - `avatar` (String) - URL de la imagen del usuario
  - `name` (String) - Nombre completo
  - `role` (String) - Puesto o rol
  - `status` (String, opcional) - Estado: `'active'`, `'busy'`, o `'offline'`

**Ejemplo de uso:**
```vue
<UserComponents 
  title="Personal Activo" 
  :users="staffMembers" 
/>
```

### CalendarEvents
Componente para mostrar próximos eventos o calendario.

**Props:**
- `title` (String) - Título del componente
- `events` (Array) - Lista de eventos con la siguiente estructura:
  - `title` (String) - Nombre del evento
  - `day` (String | Number) - Día del mes
  - `month` (String) - Mes en formato corto (ej: "OCT", "NOV")
  - `time` (String) - Hora del evento
  - `location` (String, opcional) - Ubicación del evento
  - `category` (String, opcional) - Tipo: `'meeting'`, `'deadline'`, `'event'`, `'personal'`

**Ejemplo de uso:**
```vue
<CalendarEvents 
  title="Próximos Eventos" 
  :events="upcomingEvents" 
/>
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores personalizada definida en `app/assets/css/main.css`:

- **bg-color**: `#E3E3E3` - Color de fondo principal
- **icon-color**: `#FDFDFD` - Color de iconos y componentes
- **text-color-sidebar**: `#727272` - Texto secundario
- **text-color-normal**: `#0D0D0D` - Texto principal
- **black**: `#2A2A2A` - Negro para botones y elementos destacados

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
npm run dev          # Inicia el servidor de desarrollo
```

### Producción
```bash
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción localmente
```

### Otros
```bash
npm run generate     # Genera sitio estático
```

## 📚 Documentación

Para más información sobre Nuxt, consulta la [documentación oficial](https://nuxt.com/docs/getting-started/introduction).
