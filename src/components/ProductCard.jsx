import { useState } from 'react'
import { ShoppingCart, Plus, Check, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [wishlist, setWishlist] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const toggleWishlist = (e) => {
    e.preventDefault()
    setWishlist(!wishlist)
  }

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null

  return (
    <a
      href={`/productos/${product.id}`}
      style={{
        display: 'block',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        border: isHovered ? '2px solid var(--color-primary)' : '2px solid transparent',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        
        {discount && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: '#EF4444',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '700'
          }}>
            -{discount}%
          </div>
        )}
        
        {product.bestseller && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'var(--color-primary)',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            Más Vendido
          </div>
        )}
        
        <button
          onClick={toggleWishlist}
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            color: wishlist ? '#EF4444' : '#9CA3AF',
            transition: 'all 0.2s ease'
          }}
        >
          <Heart size={18} fill={wishlist ? '#EF4444' : 'none'} />
        </button>
      </div>
      
      <div style={{ padding: '1rem' }}>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--color-primary)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {product.categoryName}
        </span>
        
        <h3 style={{
          margin: '0.5rem 0',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#1f2937',
          lineHeight: '1.3',
          minHeight: '2.6em'
        }}>
          {product.name}
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <span style={{
            fontSize: '0.8rem',
            color: '#6b7280'
          }}>
            SKU: {product.sku}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--color-primary)'
          }}>
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span style={{
              fontSize: '0.9rem',
              color: '#9CA3AF',
              textDecoration: 'line-through'
            }}>
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.8rem',
            color: product.stock > 10 ? '#10B981' : product.stock > 0 ? '#F59E0B' : '#EF4444'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: product.stock > 10 ? '#10B981' : product.stock > 0 ? '#F59E0B' : '#EF4444'
            }} />
            {product.stock > 10 ? 'Disponible' : product.stock > 0 ? `Solo ${product.stock} left` : 'Agotado'}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: isAdded ? '#10B981' : product.stock === 0 ? '#9CA3AF' : 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.625rem 1rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              transform: isHovered && product.stock > 0 ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {isAdded ? (
              <>
                <Check size={16} />
                Agregado
              </>
            ) : (
              <>
                <Plus size={16} />
                <ShoppingCart size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </a>
  )
}

export default ProductCard
