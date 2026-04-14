import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    itemCount,
    subtotal,
    iva,
    total,
    clearCart
  } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1001,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onClick={closeCart}
      />
      
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '420px',
          background: 'white',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
          zIndex: 1002,
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease'
        }}
      >
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShoppingBag size={24} style={{ color: 'var(--color-primary)' }} />
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>
              Carrito de Compras
            </h2>
            <span style={{
              background: 'var(--color-primary)',
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={closeCart}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <ShoppingBag size={64} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem', color: '#374151' }}>
              Tu carrito está vacío
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Explora nuestro catálogo y añade productos a tu carrito.
            </p>
            <Link
              to="/productos"
              onClick={closeCart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--color-primary)',
                color: 'white',
                padding: '0.875rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Ver Catálogo
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.25rem'
                    }}>
                      <h4 style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '0.25rem',
                          color: '#9ca3af',
                          display: 'flex'
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      marginBottom: '0.75rem'
                    }}>
                      {item.sku}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'white',
                        borderRadius: '6px',
                        padding: '0.25rem'
                      }}>
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: item.quantity <= 1 ? 0.5 : 1
                          }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{
                          fontWeight: '600',
                          minWidth: '24px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontWeight: '700',
                          color: 'var(--color-primary)',
                          fontSize: '1rem'
                        }}>
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
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

            <div style={{
              padding: '1.5rem',
              borderTop: '1px solid #e5e7eb',
              background: 'white'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                color: '#6b7280'
              }}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                color: '#6b7280'
              }}>
                <span>IVA (19%)</span>
                <span>{formatPrice(iva)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px dashed #e5e7eb',
                fontWeight: '700',
                fontSize: '1.25rem',
                color: '#1f2937'
              }}>
                <span>Total</span>
                <span style={{ color: 'var(--color-primary)' }}>
                  {formatPrice(total)}
                </span>
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                * Precios incluyen IVA. Gastos de envío se calculan en checkout.
              </p>
              <Link
                to="/carrito"
                onClick={closeCart}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-primary)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  marginBottom: '0.75rem'
                }}
              >
                <ShoppingBag size={18} />
                Ir al Carrito
              </Link>
              <a
                href="https://wa.me/573212461567?text=Hola, quiero hacer un pedido"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer
