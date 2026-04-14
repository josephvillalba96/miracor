import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Truck, Shield, CreditCard } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const Cart = () => {
  const navigate = useNavigate()
  const {
    items,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    subtotal,
    iva,
    total,
    clearCart
  } = useCart()

  const shippingCost = subtotal >= 200000 ? 0 : 15000
  const finalTotal = total + shippingCost

  if (items.length === 0) {
    return (
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <ShoppingBag size={80} style={{ color: '#d1d5db', marginBottom: '1.5rem' }} />
          <h1 style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>
            Tu carrito está vacío
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Explora nuestro catálogo y añade productos a tu carrito.
          </p>
          <Link
            to="/productos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--color-primary)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Ver Catálogo de Productos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            Carrito de Compras
          </h1>
          <p style={{ color: '#6b7280' }}>
            {items.length} {items.length === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '2rem',
          alignItems: 'flex-start'
        }}>
          {/* Lista de productos */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
            }}>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    borderBottom: index < items.length - 1 ? '1px solid #e5e7eb' : 'none'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--color-primary)',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}>
                          {item.categoryName}
                        </span>
                        <h3 style={{ margin: '0.25rem 0 0', fontSize: '1.1rem' }}>
                          {item.name}
                        </h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
                          SKU: {item.sku}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '0.5rem',
                          color: '#9ca3af',
                          borderRadius: '8px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#f9fafb',
                        borderRadius: '8px',
                        padding: '0.25rem'
                      }}>
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          style={{
                            background: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            opacity: item.quantity <= 1 ? 0.5 : 1
                          }}
                        >
                          <Minus size={16} />
                        </button>
                        <span style={{
                          fontWeight: '600',
                          minWidth: '40px',
                          textAlign: 'center',
                          fontSize: '1rem'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          style={{
                            background: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontWeight: '700',
                          color: 'var(--color-primary)',
                          fontSize: '1.25rem'
                        }}>
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#9ca3af'
                        }}>
                          {formatPrice(item.price)} c/u
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Link
                to="/productos"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                <ArrowLeft size={18} />
                Continuar comprando
              </Link>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
            position: 'sticky',
            top: '100px'
          }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.25rem' }}>
              Resumen del Pedido
            </h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                color: '#6b7280'
              }}>
                <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                color: '#6b7280'
              }}>
                <span>IVA (19%)</span>
                <span>{formatPrice(iva)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#6b7280'
              }}>
                <span>Envío</span>
                <span style={{ color: shippingCost === 0 ? '#10B981' : 'inherit' }}>
                  {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost)}
                </span>
              </div>
              {shippingCost > 0 && (
                <p style={{
                  fontSize: '0.8rem',
                  color: '#10B981',
                  marginTop: '0.5rem'
                }}>
                  ¡Agrega {formatPrice(200000 - subtotal)} más para envío gratis!
                </p>
              )}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '1rem',
              borderTop: '2px solid #e5e7eb',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Total</span>
              <span style={{
                fontWeight: '700',
                fontSize: '1.5rem',
                color: 'var(--color-primary)'
              }}>
                {formatPrice(finalTotal)}
              </span>
            </div>

            {/* Botón principal: Pagar con Wompi */}
            <button
              id="btn-pagar-wompi"
              onClick={() => navigate('/checkout')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                color: 'white',
                padding: '1rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1rem',
                width: '100%',
                marginBottom: '0.75rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.92'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <svg width="22" height="22" viewBox="0 0 50 50" fill="none">
                <rect width="50" height="50" rx="10" fill="white" fillOpacity="0.2"/>
                <text x="7" y="36" fill="white" fontSize="26" fontWeight="bold" fontFamily="Arial">W</text>
              </svg>
              Pagar con Wompi — {formatPrice(finalTotal)}
            </button>

            {/* Opción secundaria: WhatsApp */}
            <a
              href={`https://wa.me/573212461567?text=Hola, quiero hacer el siguiente pedido:%0A%0A${items.map(i => `• ${i.name} x${i.quantity} - ${formatPrice(i.price * i.quantity)}`).join('%0A')}%0A%0ATotal: ${formatPrice(finalTotal)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'white',
                color: '#25D366',
                border: '2px solid #25D366',
                padding: '0.85rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                marginBottom: '1rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Solicitar por WhatsApp
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#6b7280',
              fontSize: '0.85rem'
            }}>
              <CreditCard size={16} />
              También puedes pagar en nuestras sedes
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6b7280' }}>
                  <Truck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontSize: '0.9rem' }}>Envíos en Barranquilla y región Caribe</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#6b7280' }}>
                  <Shield size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontSize: '0.9rem' }}>Garantía según normativa colombiana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 400px"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 640px) {
          div[style*="display: flex"][style*="gap: 1.5rem"] img {
            width: 80px !important;
            height: 80px !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Cart
