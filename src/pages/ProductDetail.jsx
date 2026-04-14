import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ChevronLeft, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  MessageCircle
} from 'lucide-react'
import { getProductById, getProductsByCategory, formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const foundProduct = getProductById(id)
    if (foundProduct) {
      setProduct(foundProduct)
      setRelatedProducts(getProductsByCategory(foundProduct.category).filter(p => p.id !== id).slice(0, 4))
      window.scrollTo(0, 0)
    } else {
      navigate('/productos')
    }
  }, [id, navigate])

  if (!product) return null

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el producto: ${product.name} (SKU: ${product.sku}). ¿Podrían darme más información?`
    const url = `https://wa.me/573212461567?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <main style={{ paddingBottom: '4rem' }}>
      {/* Breadcrumbs */}
      <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>/</span>
            <Link to="/productos" style={{ color: 'inherit', textDecoration: 'none' }}>Catálogo</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{product.name}</span>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Image Gallery */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ 
                background: 'white', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #f3f4f6'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span style={{ 
                color: 'var(--color-primary)', 
                fontWeight: '700', 
                fontSize: '0.9rem', 
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {product.categoryName}
              </span>
              <h1 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                fontWeight: '800', 
                margin: '0.5rem 0 1rem',
                color: '#111827',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                {product.name}
              </h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ color: '#6b7280', fontSize: '0.95rem' }}>SKU: <strong>{product.sku}</strong></span>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.9rem',
                  color: product.stock > 0 ? '#10b981' : '#ef4444',
                  fontWeight: '600'
                }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: product.stock > 0 ? '#10b981' : '#ef4444' 
                  }} />
                  {product.stock > 0 ? 'En Stock' : 'Agotado'}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ 
                  fontSize: '2rem', 
                  fontWeight: '800', 
                  color: 'var(--color-primary)' 
                }}>
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span style={{ 
                    fontSize: '1.25rem', 
                    color: '#9ca3af', 
                    textDecoration: 'line-through' 
                  }}>
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>

              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                color: '#4b5563', 
                marginBottom: '2rem' 
              }}>
                {product.description}
              </p>

              {/* Purchase Actions */}
              <div style={{ 
                background: '#f9fafb', 
                padding: '2rem', 
                borderRadius: '16px', 
                marginBottom: '2.5rem' 
              }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    background: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '0.5rem'
                  }}>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#6b7280' }}
                    >
                      <Minus size={18} />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      style={{ 
                        width: '50px', 
                        textAlign: 'center', 
                        border: 'none', 
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        outline: 'none'
                      }}
                    />
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock || 99, quantity + 1))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#6b7280' }}
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    style={{ 
                      flex: 1,
                      minWidth: '200px',
                      background: isAdded ? '#10b981' : 'var(--color-primary)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.2s'
                    }}
                  >
                    {isAdded ? (
                      <><Check size={24} /> Agregado!</>
                    ) : (
                      <><ShoppingCart size={24} /> Agregar al Carrito</>
                    )}
                  </button>
                </div>

                <button 
                  onClick={handleWhatsApp}
                  style={{ 
                    width: '100%',
                    background: 'white',
                    color: '#25D366',
                    border: '2px solid #25D366',
                    borderRadius: '8px',
                    padding: '1rem',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#25D366'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = '#25D366'
                  }}
                >
                  <MessageCircle size={24} /> Consultar por WhatsApp
                </button>
              </div>

              {/* Features List */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>Características principales:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      marginBottom: '0.75rem',
                      color: '#4b5563'
                    }}>
                      <div style={{ color: 'var(--color-primary)' }}>
                        <ShieldCheck size={20} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Short Trust Badges */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Truck size={24} style={{ color: '#6b7280' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Envío Rápido</h4>
                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>A nivel nacional</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <RotateCcw size={24} style={{ color: '#6b7280' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Garantía</h4>
                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>Calidad certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '5rem', borderTop: '1px solid #f3f4f6', paddingTop: '4rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2.5rem', textAlign: 'center' }}>
              Productos Relacionados
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {relatedProducts.map(relProduct => (
                <div key={relProduct.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #f3f4f6'
                }}>
                  <Link to={`/productos/${relProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={relProduct.image} alt={relProduct.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{relProduct.name}</h4>
                      <p style={{ fontWeight: '700', color: 'var(--color-primary)', margin: 0 }}>{formatPrice(relProduct.price)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default ProductDetail
