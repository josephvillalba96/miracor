export const categories = [
  {
    id: 'epp',
    name: 'EPP - Protección Personal',
    slug: 'epp',
    description: 'Equipos de Protección Personal certificados',
    icon: 'shield'
  },
  {
    id: 'vestimenta',
    name: 'Vestimenta de Seguridad',
    slug: 'vestimenta',
    description: 'Overol, ropa impermeable y uniformes',
    icon: 'shirt'
  },
  {
    id: 'calzado',
    name: 'Calzado Industrial',
    slug: 'calzado',
    description: 'Zapatos y botas de seguridad',
    icon: 'footprints'
  },
  {
    id: 'senales',
    name: 'Señalización',
    slug: 'senales',
    description: 'Señales de seguridad y vial',
    icon: 'triangle-alert'
  }
]

export const products = [
  // EPP - Protección Personal
  {
    id: 'epp-001',
    name: 'Casco de Seguridad ANSI Z89.1',
    sku: 'CAS-ANSI-001',
    category: 'epp',
    categoryName: 'EPP',
    price: 45000,
    oldPrice: 55000,
    stock: 150,
    description: 'Casco de seguridad certificado ANSI Z89.1 para protección craneal en entornos industriales. Con Suspension de 4 puntos y Arnés regulable.',
    features: [
      'Certificación ANSI Z89.1 Tipo I',
      'Suspensión de 4 puntos',
      'Ajuste tipo ruleta',
      'Resistente a impactos',
      'Protección UV'
    ],
    image: '/images/products/epp-001.png',
    featured: true,
    bestseller: true
  },
  {
    id: 'epp-002',
    name: 'Lentes de Seguridad Antiempañante',
    sku: 'LEN-ANTI-002',
    category: 'epp',
    categoryName: 'EPP',
    price: 28000,
    oldPrice: null,
    stock: 200,
    description: 'Lentes de seguridad con tratamiento antiempañante y antiarañazos. Ideales para ambientes húmedos o con cambios de temperatura.',
    features: [
      'Tratamiento antiempañante',
      'Protección lateral',
      'Lente de policarbonato',
      'Filtro UV 99.9%',
      'Antiarañazos'
    ],
    image: '/images/products/epp-002.png',
    featured: true,
    bestseller: false
  },
  {
    id: 'epp-003',
    name: 'Guantes de Nitrilo Industriales',
    sku: 'GUA-NIT-003',
    category: 'epp',
    categoryName: 'EPP',
    price: 15000,
    oldPrice: 18000,
    stock: 500,
    description: 'Guantes de nitrilo azul para protección química y mecánica. Resistentes a aceites, grasas y solvents.',
    features: [
      'Resistente a aceites y grasas',
      'Buen agarre en húmedo',
      'Sin polvo',
      'Disposable (desechable)',
      'Caja de 100 unidades'
    ],
    image: '/images/products/epp-003.png',
    featured: false,
    bestseller: true
  },
  {
    id: 'epp-004',
    name: 'Protectores Auditivos tipo Copa',
    sku: 'AUD-COP-004',
    category: 'epp',
    categoryName: 'EPP',
    price: 65000,
    oldPrice: null,
    stock: 80,
    description: 'Protectores auditivos tipo copa con atenuación de 25dB. Arnés acolchado para mayor confort en uso prolongado.',
    features: [
      'NRR 25dB',
      'Copa de ABS resistente',
      'Arnés ajustable',
      'Diadema acolchada',
      'Plegable para transporte'
    ],
    image: '/images/products/epp-004.png',
    featured: true,
    bestseller: false
  },
  {
    id: 'epp-005',
    name: 'Respirador N95 con Válvula',
    sku: 'RES-N95-005',
    category: 'epp',
    categoryName: 'EPP',
    price: 8500,
    oldPrice: 12000,
    stock: 1000,
    description: 'Mascarilla respirador N95 con válvula de exhalación. Eficiencia de filtrado >= 95%.',
    features: [
      'Eficiencia >= 95%',
      'Válvula de exhalación',
      'Ajuste nasal integrado',
      '2 tirantes ajustables',
      'Paquete de 10 unidades'
    ],
    image: '/images/products/epp-005.png',
    featured: false,
    bestseller: true
  },
  {
    id: 'epp-006',
    name: 'Arnrés de Seguridad 3 Puntos',
    sku: 'ARN-3P-006',
    category: 'epp',
    categoryName: 'EPP',
    price: 185000,
    oldPrice: 220000,
    stock: 25,
    description: 'Arnés de seguridad completo con连接 dorsal, esternal y pélvico. Para trabajo en alturas.',
    features: [
      '4 puntos de conexión',
      'Espaldar acolchado',
      'Reflectivos de alta visibilidad',
      'Estándar OSHA',
      'Talla única adjustable'
    ],
    image: '/images/products/epp-006.png',
    featured: true,
    bestseller: false
  },
  {
    id: 'epp-007',
    name: 'Chaleco Reflectivo Clase 2',
    sku: 'CHA-CL2-007',
    category: 'epp',
    categoryName: 'EPP',
    price: 38000,
    oldPrice: null,
    stock: 120,
    description: 'Chaleco reflectivo certificado Clase 2 con cinta reflectora de 2". Visibilidad diurna y nocturna.',
    features: [
      'Certificación Clase 2',
      'Cinta reflectora 2"',
      'Tela mesh respirable',
      'Cierre frontal',
      '8 colores disponibles'
    ],
    image: '/images/products/epp-007.png',
    featured: true,
    bestseller: true
  },

  // Vestimenta de Seguridad
  {
    id: 'ves-001',
    name: 'Overol Industrial Descartable',
    sku: 'OVE-DES-001',
    category: 'vestimenta',
    categoryName: 'Vestimenta',
    price: 25000,
    oldPrice: 30000,
    stock: 300,
    description: 'Overol descartable SMS de 40g/m². Protege contra polvos, fibras y salpicaduras ligeras.',
    features: [
      'Material SMS 40g/m²',
      'Resistente a polvos',
      'Elasticidad en puños y tobillos',
      'Cierre frontal largo',
      'Paquete de 5 unidades'
    ],
    image: '/images/products/ves-001.png',
    featured: true,
    bestseller: true
  },
  {
    id: 'ves-002',
    name: 'Impermeable de PVC con Capucha',
    sku: 'IMP-PVC-002',
    category: 'vestimenta',
    categoryName: 'Vestimenta',
    price: 48000,
    oldPrice: null,
    stock: 60,
    description: 'Traje impermeable completo en PVC con capucha. Resistente a químicos y lluvia intensa.',
    features: [
      'PVC 100% impermeable',
      'Capucha integrada',
      'Taped seams (costuras selladas)',
      'Resistente a químicos',
      'Tallas S a 3XL'
    ],
    image: '/images/products/ves-002.png',
    featured: false,
    bestseller: false
  },
  {
    id: 'ves-003',
    name: 'Delantal de Cuero para Soldadura',
    sku: 'DEL-CUE-003',
    category: 'vestimenta',
    categoryName: 'Vestimenta',
    price: 75000,
    oldPrice: 90000,
    stock: 35,
    description: 'Delantal de cuero reforzado para trabajos de soldadura y altas temperaturas.',
    features: [
      'Cuero vacuno 1.2mm',
      'Resistente a chispas',
      'Tiras ajustables al cuello',
      '100cm x 60cm',
      'Reforzado en rodillas'
    ],
    image: '/images/products/ves-003.jpg',
    featured: true,
    bestseller: false
  },
  {
    id: 'ves-004',
    name: 'Uniforme Industrial de Algodón',
    sku: 'UNI-ALG-004',
    category: 'vestimenta',
    categoryName: 'Vestimenta',
    price: 85000,
    oldPrice: 95000,
    stock: 100,
    description: 'Uniforme industrial en drill de algodón con cinta reflectiva. Camisa y pantalón.',
    features: [
      'Drill algodón/poliéster',
      'Cinta reflectiva 3M',
      'Cuello mao',
      'Bolsillos con fuelle',
      'Tallas S a XXL'
    ],
    image: '/images/products/ves-004.png',
    featured: false,
    bestseller: true
  },

  // Calzado Industrial
  {
    id: 'cal-001',
    name: 'Bota de Seguridad Dieléctrica',
    sku: 'BOT-DIE-001',
    category: 'calzado',
    categoryName: 'Calzado',
    price: 135000,
    oldPrice: 160000,
    stock: 75,
    description: 'Bota de seguridad con punta de acero y suela dieléctrica. Ideal para electricistas.',
    features: [
      'Puntera de acero',
      'Suela dieléctrica 18kV',
      'Caña alta',
      'Plantilla antiperforante',
      'Tallas 35 a 45'
    ],
    image: '/images/products/cal-001.png',
    featured: true,
    bestseller: true
  },
  {
    id: 'cal-002',
    name: 'Zapato de Seguridad Sport',
    sku: 'ZAP-SPT-002',
    category: 'calzado',
    categoryName: 'Calzado',
    price: 98000,
    oldPrice: null,
    stock: 90,
    description: 'Zapato de seguridad con diseño sport. Ligero y cómodo para jornadas largas.',
    features: [
      'Puntera composite (más ligero)',
      'Suela antideslizante',
      'Forro mesh transpirable',
      'Plantilla ergonómica',
      'Tallas 36 a 44'
    ],
    image: '/images/products/cal-002.png',
    featured: false,
    bestseller: true
  },
  {
    id: 'cal-003',
    name: 'Bota de Goma para Construcción',
    sku: 'BOT-GOM-003',
    category: 'calzado',
    categoryName: 'Calzado',
    price: 72000,
    oldPrice: 85000,
    stock: 120,
    description: 'Bota de goma antideslizante para construcción. Resistente al agua y aceites.',
    features: [
      'Goma vulcanizada',
      'Suela antideslizante',
      'Puntera de acero',
      'Resistente a aceites',
      'Tallas 38 a 46'
    ],
    image: '/images/products/cal-003.png',
    featured: true,
    bestseller: false
  },

  // Señalización
  {
    id: 'sen-001',
    name: 'Kit de Señales de Seguridad (20 und)',
    sku: 'KIT-SEN-001',
    category: 'senales',
    categoryName: 'Señalización',
    price: 145000,
    oldPrice: 180000,
    stock: 45,
    description: 'Kit completo de señales de seguridad fotoluminiscentes. 20 señales de diferentes tipos.',
    features: [
      '20 señales variadas',
      'Material fotoluminiscente',
      'Adhesivo industrial',
      'Norma ISO 7010',
      'Tamaño 20x20cm'
    ],
    image: '/images/products/sen-001.png',
    featured: true,
    bestseller: false
  },
  {
    id: 'sen-002',
    name: 'Cono Vial Naranja 75cm',
    sku: 'CON-VIA-002',
    category: 'senales',
    categoryName: 'Señalización',
    price: 35000,
    oldPrice: null,
    stock: 200,
    description: 'Cono vial de alta visibilidad 75cm. Con cinta reflectiva y base estable.',
    features: [
      'Altura: 75cm',
      'PVC inyectado',
      'Cinta reflectiva 3M',
      'Base cuadrada estable',
      'Naranja brillante'
    ],
    image: '/images/products/sen-002.png',
    featured: false,
    bestseller: true
  },
  {
    id: 'sen-003',
    name: 'Extintor Portátil CO2 5kg',
    sku: 'EXT-CO2-003',
    category: 'senales',
    categoryName: 'Señalización',
    price: 195000,
    oldPrice: 230000,
    stock: 30,
    description: 'Extintor de CO2 de 5kg para fuego clase B y equipos eléctricos. Certificado.',
    features: [
      'Capacidad: 5kg',
      'Clase B y C',
      'Manómetro integrado',
      'Manguera incluida',
      'Certificación UL'
    ],
    image: '/images/products/sen-003.png',
    featured: true,
    bestseller: false
  },
  {
    id: 'sen-004',
    name: 'Cinta de Precaución Amarilla/Negra',
    sku: 'CIN-PRE-004',
    category: 'senales',
    categoryName: 'Señalización',
    price: 28000,
    oldPrice: 35000,
    stock: 150,
    description: 'Cinta de precaución amarilla/negra de 3" x 200m. Para demarcar áreas de riesgo.',
    features: [
      'Ancho: 3 pulgadas',
      'Largo: 200 metros',
      'Vinilo adhesivo',
      'Patrón diagonal',
      'Resistente al agua'
    ],
    image: '/images/products/sen-004.png',
    featured: false,
    bestseller: true
  }
]

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}

export const getProductById = (id) => products.find(p => p.id === id)
export const getProductsByCategory = (categoryId) => products.filter(p => p.category === categoryId)
export const getFeaturedProducts = () => products.filter(p => p.featured)
export const getBestsellerProducts = () => products.filter(p => p.bestseller)
