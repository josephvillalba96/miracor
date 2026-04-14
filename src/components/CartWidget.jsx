import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const CartWidget = () => {
  const { itemCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      style={{
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text)',
        transition: 'all 0.2s ease'
      }}
      aria-label="Abrir carrito de compras"
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-2px',
          right: '-2px',
          background: 'var(--color-primary)',
          color: 'white',
          fontSize: '0.7rem',
          fontWeight: '700',
          minWidth: '20px',
          height: '20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 6px'
        }}>
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  )
}

export default CartWidget
