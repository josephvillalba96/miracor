# PROPUESTA DE REESTRUCTURACIÓN WEB
## SUMINISTROS MIRACOR S.A.S.

---

## 1. RESUMEN EJECUTIVO

**Proyecto:** Reestructuración integral del sitio web para reflejar el nuevo objeto social
**Empresa:** SUMINISTROS MIRACOR S.A.S. (NIT: 900.778.922-1)
**Sector:** Comercio mayorista y minorista de EPP / Construcción ligera
**CIIU:** 4752 (Comercio al por menor de artículos de ferretería, paints y vidrios) / 4663 (Comercio al por mayor de materiales de construcción)
**Clasificación:** MICROEMPRESA (Decreto 1074 de 2015)
**Constitución:** 16/09/2014 | Reforma: Acta 02-2025

---

## 2. ARQUITECTURA DE INFORMACIÓN

### 2.1 Mapa de Sitio Propuesto

```
SUMINISTROS MIRACOR S.A.S.
│
├── INICIO (/)
│   ├── Hero principal con propuesta de valor EPP
│   ├── Categorías destacadas (E-commerce preview)
│   ├── Servicios técnicos destacados
│   ├── Diferenciales competitivo
│   ├── CTA: WhatsApp / Cotización
│   └── Certificaciones y alianzas
│
├── CATÁLOGO (/catalogo)
│   ├── EPP - Equipos de Protección Personal
│   │   ├── Cascos y protección craneal
│   │   ├── Guantes de seguridad
│   │   ├── Protección visual (lentes, monogafas)
│   │   ├── Protección auditiva
│   │   ├── Protección respiratoria
│   │   ├── Calzado de seguridad
│   │   ├── Arnaces y sistemas anti-caídas
│   │   ├── Chalecos reflectivos
│   │   └── Primeros auxilios
│   │
│   ├── SEGURIDAD INDUSTRIAL (/catalogo/seguridad-industrial)
│   │   ├── Señalización vial e industrial
│   │   ├── Extintores y противопожарное оборудование
│   │   ├── Barreras y conos
│   │   └── Kits de emergencia
│   │
│   ├── VESTIMENTA DE SEGURIDAD (/catalogo/vestimenta)
│   │   ├── Overol industrial
│   │   ├── Ropa impermeable
│   │   ├── Uniformes corporativos
│   │   └── Accesorios (gorras, fajas, etc.)
│   │
│   ├── MAQUINARIA Y HERRAMIENTAS (/catalogo/maquinaria)
│   │   ├── Herramientas manuales industriales
│   │   ├── Equipo de corte y soldadura
│   │   └── Maquinaria ligera
│   │
│   └── UTENSILIOS (/catalogo/utensilios)
│       ├── Contenedores industriales
│       ├── Dispensadores
│       └── Utensilios sanitarios
│
├── CONSTRUCCIÓN (/construccion)
│   ├── Bodegas industriales
│   ├── Escenarios deportivos
│   ├── Aulas escolares
│   ├── Vivienda multifamiliar
│   └── Edificios residenciales
│
├── SERVICIOS (/servicios)
│   ├── ASESORÍA TÉCNICA (/servicios/asesoria)
│   ├── MANTENIMIENTO Y REPARACIÓN (/servicios/mantenimiento)
│   ├── CAPACITACIONES (/servicios/capacitaciones)
│   └── CERTIFICACIONES (/servicios/certificaciones)
│
├── NOSOTROS (/nosotros)
│   ├── Historia y trayectoria
│   ├── Misión y visión
│   ├── Valores corporativos
│   ├── Equipo de trabajo
│   └── Certificaciones
│
├── CARRITO (/carrito) [E-commerce]
├── MI CUENTA (/cuenta) [E-commerce B2B]
│
└── CONTACTO (/contacto)
    ├── Formulario de contacto
    ├── Ubicaciones (2 sedes)
    └── WhatsApp directo
```

---

## 3. DISEÑO UX/UI

### 3.1 Sistema de Diseño

**Paleta de Colores:**
```css
/* Primario - Azul corporativo tecnológico */
--color-primary: #3943B7;        /* #3943B7 - Confianza, profesionalismo */

/* Acento - Naranja energía (CTA, ofertas) */
--color-accent: #FF6600;          /* #FF6600 - Acción, urgencia */

/* Neutros */
--color-text: #090C02;           /* Texto principal */
--color-text-secondary: #6B7280;/* Texto secundario */
--color-background: #FFFFFF;     /* Fondo principal */
--color-gray-light: #F9FAFB;     /* Fondos alternativos */

/* Estados */
--color-success: #10B981;        /* Éxito, stock disponible */
--color-warning: #F59E0B;        /* Advertencia */
--color-error: #EF4444;          /* Error */
```

**Tipografía:**
```css
/* Títulos */
font-family: 'Montserrat', sans-serif; /* 600-800 */

/* Cuerpo */
font-family: 'Inter', sans-serif; /* 400-500 */

/* Monospace (precios, códigos) */
font-family: 'JetBrains Mono', monospace;
```

**Escala de Espaciado:**
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### 3.2 Componentes UI Clave

#### HEADER / NAVEGACIÓN
```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO]  CATÁLOGO  CONSTRUCCIÓN  SERVICIOS  NOSOTROS  CONTACTO  │ [🛒] [👤] [📱]
└─────────────────────────────────────────────────────────────────┘
```
- Navegación sticky con transparencia al scroll
- Mega-menú desplegable para categorías de catálogo
- Carrito de compras con badge de cantidad
- Acceso a cuenta B2B (clientes registrados)

#### TARJETA DE PRODUCTO (E-commerce)
```
┌────────────────────────────┐
│     [IMAGEN PRODUCTO]     │
│                       [♡]  │ ← Favoritos
├────────────────────────────┤
│ CATEGORÍA                  │
│ Nombre del Producto         │
│ ──────────────────────────  │
│ SKU: ABC-12345             │
│                             │
│ $ 125.000 COP               │
│ IVA incluido                │
│                             │
│ [★★★★☆] (24 reseñas)       │
│                             │
│ [  -  1  +  ] [🛒 AGREGAR] │
│                             │
│ ✓ Disponible: 48 unidades  │
└────────────────────────────┘
```

#### BANNER HERO (Inicio)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   PROTECCIÓN INDUSTRIAL                 [IMAGEN HERO]          │
│   DE ALTA CALIDAD                                              │
│                                                                 │
│   Suministramos EPP certificados                               │
│   para todos los sectores industriales                         │
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐                    │
│   │    VER CATÁLOGO  │  │   COTIZAR AHORA  │                    │
│   └──────────────────┘  └──────────────────┘                    │
│                                                                 │
│   [CIIU 4752] [CIIU 4663] [MICROEMPRESA]                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. ESTRUCTURA DE RUTAS (React Router)

```javascript
// src/App.jsx - Estructura de rutas propuesta

const routes = [
  // Página principal
  { path: '/', element: <Home /> },
  
  // E-commerce
  { path: '/catalogo', element: <Catalog /> },
  { path: '/catalogo/:category', element: <Category /> },
  { path: '/catalogo/:category/:product', element: <ProductDetail /> },
  { path: '/buscar', element: <Search /> },
  
  // Carrito y checkout
  { path: '/carrito', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/pedido-confirmado/:orderId', element: <OrderConfirmation /> },
  
  // Cuenta B2B
  { path: '/cuenta', element: <Account /> },
  { path: '/cuenta/pedidos', element: <Orders /> },
  { path: '/cuenta/pedidos/:orderId', element: <OrderDetail /> },
  { path: '/cuenta/direcciones', element: <Addresses /> },
  { path: '/cuenta/facturas', element: <Invoices /> },
  
  // Construcción
  { path: '/construccion', element: <Construction /> },
  { path: '/construccion/:projectType', element: <ProjectDetail /> },
  
  // Servicios técnicos
  { path: '/servicios', element: <Services /> },
  { path: '/servicios/asesoria', element: <Asesoria /> },
  { path: '/servicios/mantenimiento', element: <Mantenimiento /> },
  { path: '/servicios/capacitaciones', element: <Capacitaciones /> },
  { path: '/servicios/certificaciones', element: <Certificaciones /> },
  
  // Institucional
  { path: '/nosotros', element: <About /> },
  { path: '/politicas', element: <Policies /> },
  { path: '/terminos', element: <Terms /> },
  
  // Contacto
  { path: '/contacto', element: <Contact /> },
  
  // 404
  { path: '*', element: <NotFound /> }
]
```

---

## 5. FUNCIONALIDADES E-COMMERCE

### 5.1 Módulo de Carrito

```javascript
// Estado del carrito
const cartState = {
  items: [
    {
      productId: 'prod_001',
      name: 'Casco de seguridad ANSI Z89.1',
      sku: 'CAS-ANSI-001',
      price: 85000,
      quantity: 5,
      image: '/assets/products/casco.jpg',
      category: 'proteccion-craneal',
      maxQuantity: 50
    }
  ],
  subtotal: 425000,
  iva: 80750,
  total: 505750,
  shipping: 15000,
  discount: 0
}
```

### 5.2 Flujo de Compra

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ PRODUCTO│───▶│ CARRITO │───▶│CHECKOUT │───▶│ PAGO    │───▶│CONFIRMA-│
│         │    │         │    │         │    │         │    │CIÓN     │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
     │              │              │              │                │
     ▼              ▼              ▼              ▼                ▼
  Ver más       Revisar        Ingresar       Seleccionar     Número de
  detalles      cantidades     datos           método pago     pedido
                                  │              │                │
                                  ▼              ▼                ▼
                            Forma de       💳PSE              Email
                            envío          💳Tarjeta          confirmación
                                          📱Nequi
                                          📱Daviplata
                                          🏦Transferencia
```

### 5.3 Pasarelas de Pago Integradas

1. **PSE** - Pago directo desde banco
2. **Tarjetas de crédito/débito** - Visa, Mastercard
3. **Nequi/Daviplata** - Billeteras móviles
4. **Transferencia bancaria** - Pago contra factura
5. **Pago en sede** - Para clientes corporativos B2B

---

## 6. PORTAFOLIO DE SERVICIOS TÉCNICOS

### 6.1 Página de Servicios

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         SERVICIOS TÉCNICOS ESPECIALIZADOS                       │
│                                                                 │
│   Capacitación · Asesoría · Mantenimiento · Certificación     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│               │  │               │  │               │  │               │
│  [ICONO]      │  │  [ICONO]      │  │  [ICONO]      │  │  [ICONO]      │
│               │  │               │  │               │  │               │
│  ASESORÍA     │  │  MANTENIMIEN- │  │  CAPACITACIÓN │  │  CERTIFICACIÓN│
│  TÉCNICA      │  │  TO Y REPARA- │  │               │  │               │
│               │  │  CIÓN          │  │               │  │               │
│  Evaluación   │  │               │  │  Programas    │  │  Certificados │
│  de riesgos   │  │  Preventivo y │  │  personalizados│  │  de uso       │
│  laborales    │  │  correctivo   │  │  para tu      │  │  adecuado     │
│               │  │               │  │  empresa      │  │               │
│               │  │               │  │               │  │               │
│  [CONOCER + ] │  │  [CONOCER + ] │  │  [CONOCER + ] │  │  [CONOCER + ] │
└───────────────┘  └───────────────┘  └───────────────┘  └───────────────┘
```

### 6.2 Detalle de Capacitaciones

```
┌─────────────────────────────────────────────────────────────────┐
│  CAPACITACIONES EN SEGURIDAD INDUSTRIAL                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [IMAGEN]                                                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DESCRIPCIÓN                                                    │
│  ----------------------------------------------------------------│
│  Programas de formación personalizados para tu empresa         │
│  covering todos los aspectos de seguridad industrial.          │
│                                                                 │
│  ────────────────────────────────────────────────────────────── │
│                                                                 │
│  TEMARIO                                                        │
│  ----------------------------------------------------------------│
│  □ Uso correcto de EPP                                         │
│  □ Identificación de riesgos laborales                         │
│  □ Procedimientos de emergencia                                │
│  □ Normativas OSHA y colombiano ( Resolución 1409/2012)       │
│  □ Primeros auxilios                                           │
│                                                                 │
│  ────────────────────────────────────────────────────────────── │
│                                                                 │
│  DURACIÓN: 8 horas (presencial) | 4 horas (virtual)           │
│  INCLUYE: Material didáctico, certificado, Coffee break        │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  SOLICITAR COTIZACIÓN                                  │   │
│  │  [Nombre empresa    ] [N° empleados    ]               │   │
│  │  [Email             ] [Teléfono         ]               │   │
│  │  [                                      ]               │   │
│  │  [            SOLICITAR COTIZACIÓN    ]                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. SECCIÓN CONSTRUCCIÓN

### 7.1 Tipos de Proyectos

| Tipo | Descripción | Aplicación |
|------|-------------|------------|
| Bodegas industriales | Estructuras para almacenamiento y logística | Zonas francas, parques industriales |
| Escenarios deportivos | Instalaciones deportivas cubierto/abierto | Coliseos, canchas, pistas |
| Aulas escolares | Espacios educativos modulares | Colegios, universidades, CDI |
| Vivienda multifamiliar | Edificaciones residenciales desde 5 unidades | Desarrollo urbano |
| Edificios residenciales | Torres de apartamento desde 5 pisos | Desarrollo inmobiliario |

### 7.2 Portafolio Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                    NUESTROS PROYECTOS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐       │
│  │                         │  │                         │       │
│  │    [IMAGEN BODEGA]      │  │   [IMAGEN ESCENARIO]    │       │
│  │                         │  │                         │       │
│  ├─────────────────────────┤  ├─────────────────────────┤       │
│  │  BODEGAS INDUSTRIALES   │  │  ESCENARIOS DEPORTIVOS  │       │
│  │  Barranquilla, 2024      │  │  Soledad, 2023          │       │
│  │  2.500 m²                │  │  1.200 m²                │       │
│  └─────────────────────────┘  └─────────────────────────┘       │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐       │
│  │                         │  │                         │       │
│  │    [IMAGEN AULAS]       │  │   [IMAGEN VIVIENDA]     │       │
│  │                         │  │                         │       │
│  ├─────────────────────────┤  ├─────────────────────────┤       │
│  │  AULAS ESCOLARES        │  │  VIVIENDA MULTIFAMILIAR │       │
│  │  Puerto Colombia, 2024   │  │  Barranquilla, 2022      │       │
│  │  8 unidades              │  │  24 unidades            │       │
│  └─────────────────────────┘  └─────────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. DATOS DE CONTACTO INTEGRADOS

### 8.1 Ubicaciones

**SEDE PRINCIPAL:**
```
📍 CR 53 75 138 OF 17 P 2, Barranquilla
   Horario: Lun-Vie 8:00-18:00 | Sáb 8:00-12:00
```

**SUCURSAL CENTRO:**
```
📍 Carrera 46 No. 39-16, Barranquilla
   Horario: Lun-Vie 8:00-17:30 | Sáb 8:00-12:00
```

**Contacto:**
```
📞 Teléfono: 321 246 1567
📧 Email: constructoramiracor@gmail.com
💬 WhatsApp: wa.me/573212461567
```

### 8.2 Widget de Contacto Flotante

```
┌─────────────────────┐
│ 💬                  │  ← Botón flotante (bottom-right)
│    ¿Necesitas       │
│    ayuda?           │
└─────────────────────┘
     │
     ▼
┌─────────────────────┐
│ ¡Hola! 👋           │
│ ¿En qué podemos     │
│ ayudarte?           │
│                     │
│ [   Escribe...   ]  │
│                     │
│ ┌─────────────────┐ │
│ │ 💬 WhatsApp     │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ 📧 Email        │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ 📞 Llamar       │ │
│ └─────────────────┘ │
└─────────────────────┘
```

---

## 9. PÁGINA NOSOTROS (Actualizada)

### 9.1 Hero

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    SUMINISTROS MIRACOR S.A.S.                   │
│                                                                 │
│   Más de 10 años protegiendo vidas y construyendo futuro        │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  MICROEMPRESA    │  NIT: 900.778.922-1  │  CIIU: 4752   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.2 Historia Corregida

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   NUESTRA HISTORIA                                              │
│   ─────────────────                                              │
│                                                                 │
│   Fundada el 16 de septiembre de 2014 en Barranquilla como     │
│   CONSTRUCTORA MIRACOR S.A.S., nuestra empresa ha evolucionado │
│   para convertirse en un líder regional en suministro de        │
│   equipos de protección personal.                              │
│                                                                 │
│   En 2025, mediante Acta 02-2025, completamos nuestra          │
│   transformación estatutaria para reflejar nuestro enfoque     │
│   en el comercio de EPP y artículos de seguridad industrial,  │
│   manteniendo viva nuestra experiencia en construcción.       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Misión y Visión

**MISIÓN:**
> Proteger la vida y salud de los trabajadores mediante la provisión de equipos de protección personal certificados, servicios técnicos especializados y soluciones de construcción, contribuyendo al desarrollo sostenible de la industria colombiana.

**VISIÓN:**
> Ser reconocidos como la empresa líder en suministro de EPP y servicios de seguridad industrial en la Costa Caribe colombiana, destacados por la calidad de nuestros productos, la excelencia en servicio y el compromiso con el bienestar laboral.

---

## 10. REQUISITOS LEGALES E-COMMERCE

### 10.1 Política de Privacidad (Decreto 1074 de 2015)

```
SUMINISTROS MIRACOR S.A.S. (NIT: 900.778.922-1)
MICROEMPRESA según Decreto 1074 de 2015

Responsable del tratamiento de datos personales:
- Dirección: CR 53 75 138 OF 17 P 2, Barranquilla
- Email: constructoramiracor@gmail.com
- Tel: 321 246 1567

Tratamiento de datos según Ley 1581 de 2012
```

### 10.2 Términos y Condiciones E-commerce

1. **Precios:** Todos los precios incluyen IVA (19%)
2. **Formas de pago:** PSE, tarjeta, Nequi, Davipla, transferencia
3. **Envíos:** Cobertura en Barranquilla y región Caribe (3-5 días hábiles)
4. **Devoluciones:** 5 días hábiles según Ley 1480 de 2011
5. **Garantía:** Según normativa colombiana vigente

### 10.3 Derechos del Consumidor (Ley 1480 de 2011)

- Información veraz y suficiente
- Protección contractual
- Garantía mínima de 6 meses
- Derecho de retracto (5 días)
- Indemnización por daños

---

## 11. RESPONSIVE DESIGN

### Breakpoints

```css
/* Mobile first approach */
@media (min-width: 320px)  { /* Móviles pequeños */ }
@media (min-width: 480px)  { /* Móviles grandes */ }
@media (min-width: 768px)  { /* Tablets */ }
@media (min-width: 1024px) { /* Laptops */ }
@media (min-width: 1280px) { /* Desktops */ }
@media (min-width: 1536px) { /* Large screens */ }
```

### Adaptaciones Clave

| Componente | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Menú | Hamburger → Drawer | Mega-menú horizontal | Full mega-menú |
| Grid productos | 1 columna | 2 columnas | 4 columnas |
| Imágenes hero | Full width | 60% | 50% |
| Footer | 1 columna | 2 columnas | 4 columnas |

---

## 12. SEO Y RENDIMIENTO

### Meta Tags

```html
<title>Suministros Miracor SAS | EPP y Seguridad Industrial | Barranquilla</title>
<meta name="description" content="Líderes en equipos de protección personal (EPP), ropa de seguridad industrial y construcción en Barranquilla. CIIU 4752 y 4663. Cotiza ahora.">
<meta name="keywords" content="EPP Barranquilla, equipos protección personal Colombia, seguridad industrial, suministros miracor, ropa seguridad, construcción">
<link rel="canonical" href="https://miracor.com.co/">

<!-- Open Graph -->
<meta property="og:title" content="Suministros Miracor SAS | EPP y Seguridad Industrial">
<meta property="og:description" content="Más de 10 años protegiendo vidas. EPP certificados, servicios técnicos y construcción.">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
```

### Estructura de URLs

```
/catalogo/epp/proteccion-craneal/casco-seguridad-ansi
/catalogo/vestimenta/overol-industrial
/servicios/capacitaciones/seguridad-industrial-basica
/construccion/bodegas-industriales
/nosotros
/contacto
```

---

## 13. INFRAESTRUCTURA TÉCNICA

### Stack Propuesto (Mantener React + Vite)

```
├── Framework: React 19 + Vite 7
├── Routing: React Router DOM 7
├── State: React Context + useReducer (carrito)
├── Forms: React Hook Form + Zod (validación)
├── UI Components: Componentes custom (mantener estilo actual)
├── Icons: Lucide React
├── HTTP Client: Fetch API
├── Testing: Vitest
├── Deploy: Vercel / Netlify
└── CDN: Cloudflare
```

### Estructura de Archivos

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.jsx (actualizar)
│   │   ├── Footer.jsx (actualizar)
│   │   ├── MegaMenu.jsx (nuevo)
│   │   └── MobileNav.jsx
│   ├── ecommerce/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── CartWidget.jsx
│   │   ├── CartDrawer.jsx
│   │   └── ...
│   ├── services/
│   │   ├── ServiceCard.jsx
│   │   └── ...
│   └── sections/
│       ├── Hero.jsx
│       ├── Categories.jsx
│       ├── FeaturedProducts.jsx
│       └── ...
├── pages/
│   ├── Home.jsx
│   ├── Catalog.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Construction.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── context/
│   ├── CartContext.jsx
│   ├── AuthContext.jsx
│   └── WishlistContext.jsx
├── hooks/
│   ├── useCart.js
│   ├── useProducts.js
│   └── ...
├── services/
│   ├── api.js
│   └── payment.js
├── data/
│   ├── products.json
│   ├── categories.json
│   └── ...
├── utils/
│   ├── formatCurrency.js
│   ├── validation.js
│   └── ...
└── styles/
    ├── variables.css
    ├── global.css
    └── components/
```

---

## 14. CRONOGRAMA DE IMPLEMENTACIÓN

### Fase 1: Identidad y Estructura Base (2 semanas)
- [ ] Actualizar nombre legal en todos los componentes
- [ ] Actualizar datos de contacto (direcciones, NIT, email)
- [ ] Rediseñar Header con mega-menú
- [ ] Actualizar Footer con nueva estructura
- [ ] Actualizar meta tags y SEO

### Fase 2: Catálogo E-commerce (3 semanas)
- [ ] Crear estructura de categorías
- [ ] Desarrollar componentes de producto
- [ ] Implementar carrito de compras
- [ ] Crear página de detalle de producto
- [ ] Implementar filtros y búsqueda

### Fase 3: Checkout y Pagos (2 semanas)
- [ ] Formulario de checkout
- [ ] Integrar pasarela de pagos
- [ ] Confirmación de pedido
- [ ] Emails transaccionales

### Fase 4: Páginas Institucionales (1 semana)
- [ ] Actualizar página Nosotros
- [ ] Crear página de Construcción
- [ ] Desarrollar sección de Servicios Técnicos
- [ ] Actualizar página de Contacto

### Fase 5: Optimización y Testing (1 semana)
- [ ] Tests de usabilidad
- [ ] Optimización de rendimiento
- [ ] Pruebas responsive
- [ ] SEO final

**TOTAL ESTIMADO: 9 semanas**

---

## 15. PRESUPUESTO ESTIMADO

| Fase | Descripción | Estimación |
|------|-------------|------------|
| 1 | Identidad y estructura | $2,500 USD |
| 2 | Catálogo E-commerce | $5,000 USD |
| 3 | Checkout y pagos | $3,500 USD |
| 4 | Institucionales | $2,000 USD |
| 5 | Testing y deploy | $1,000 USD |
| **TOTAL** | | **$14,000 USD** |

*Nota: Estimación base, sujeta a confirmación según alcance final.*

---

## 16. CONCLUSIONES

La reestructuración propuesta transforma el sitio web actual de **CONSTRUCTORA MIRACOR S.A.S.** en una **plataforma operativa de comercio electrónico** para **SUMINISTROS MIRACOR S.A.S.**, alineada con:

1. ✅ Nuevo objeto social (CIIU 4752 y 4663)
2. ✅ Clasificación como MICROEMPRESA
3. ✅ Eje principal de E-commerce para EPP
4. ✅ Portafolio de servicios técnicos
5. ✅ División de construcción mantenida
6. ✅ Datos de contacto actualizados
7. ✅ Cumplimiento normativo de comercio electrónico

La implementación fases permite una migración gradual manteniendo la operación actual del sitio.

---

**Documento preparado para:** SUMINISTROS MIRACOR S.A.S.
**Versión:** 1.0
**Fecha:** Marzo 2026
