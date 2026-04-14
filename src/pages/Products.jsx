import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, Grid, List, ChevronDown, Search, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, formatPrice } from '../data/products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const getCategoryName = (id) => {
    const cat = categories.find(c => c.id === id)
    return cat ? cat.name : id
  }

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #5a65d4 100%)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Catálogo de Productos
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Equipos de Protección Personal, vestimenta de seguridad y señalización industrial. 
            Todo lo que necesitas para proteger a tu equipo de trabajo.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section style={{ background: 'var(--color-gray-light)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Search */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'white',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              flex: '1',
              maxWidth: '400px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <Search size={20} style={{ color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Buscar producto o SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  flex: 1,
                  padding: '0.5rem',
                  fontSize: '0.95rem'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    color: '#9ca3af'
                  }}
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Results count */}
            <div style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              {filteredProducts.length} productos
            </div>

            {/* Sort */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.5rem 2rem 0.5rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  background: 'white',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center'
                }}
              >
                <option value="name">Nombre A-Z</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
              </select>
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                background: 'white',
                cursor: 'pointer'
              }}
              className="mobile-filter-btn"
            >
              <Filter size={18} />
              Filtros
            </button>
          </div>

          {/* Category filters */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '25px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                background: selectedCategory === 'all' ? 'var(--color-primary)' : 'white',
                color: selectedCategory === 'all' ? 'white' : 'var(--color-text)'
              }}
            >
              Todos los productos
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '25px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  background: selectedCategory === cat.id ? 'var(--color-primary)' : 'white',
                  color: selectedCategory === cat.id ? 'white' : 'var(--color-text)'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '3rem 0', background: 'var(--color-white)' }}>
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <Search size={64} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', color: '#374151' }}>
                No se encontraron productos
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Intenta con otro término de búsqueda o cambia los filtros.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'var(--color-primary)',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'var(--color-primary)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            ¿No encuentras lo que necesitas?
          </h2>
          <p style={{ 
            marginBottom: '1.5rem', 
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 1.5rem'
          }}>
            Contáctanos y te ayudamos a encontrar el producto ideal para tu empresa.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/573212461567" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: 'white', 
                color: 'var(--color-primary)',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <Link 
              to="/contacto"
              style={{ 
                background: 'transparent', 
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                border: '2px solid white',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .mobile-filter-btn {
            display: flex !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Products
