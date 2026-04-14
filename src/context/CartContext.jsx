import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const CART_STORAGE_KEY = 'miracor_cart'

const initialState = {
  items: [],
  isOpen: false
}

// Inicializar el estado sincrónicamente desde localStorage
// para evitar la race condition con useEffect
const getInitialState = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      const parsedItems = JSON.parse(savedCart)
      if (Array.isArray(parsedItems) && parsedItems.length > 0) {
        return { ...initialState, items: parsedItems }
      }
    }
  } catch (e) {
    console.warn('Error cargando carrito desde localStorage:', e)
  }
  return initialState
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )
      
      if (existingIndex >= 0) {
        const newItems = [...state.items]
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: Math.min(
            newItems[existingIndex].quantity + action.payload.quantity,
            newItems[existingIndex].maxQuantity || 99
          )
        }
        return { ...state, items: newItems, isOpen: true }
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
        isOpen: true
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
      return { ...state, items: newItems }
    }
    
    case 'INCREMENT_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.min(item.quantity + 1, item.maxQuantity || 99) }
          : item
      )
      return { ...state, items: newItems }
    }
    
    case 'DECREMENT_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
      return { ...state, items: newItems }
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] }
    
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  // Lazy initialization: lee localStorage sincrónicamente al montar
  const [state, dispatch] = useReducer(cartReducer, null, getInitialState)
  
  // Guardar en localStorage cada vez que cambian los items
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])
  
  const addItem = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity,
        maxQuantity: product.stock
      }
    })
  }
  
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  
  const incrementQuantity = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id })
  }
  
  const decrementQuantity = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }
  
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }
  
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  const subtotal = state.items.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  )
  
  const iva = subtotal * 0.19
  const total = subtotal + iva
  
  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    iva,
    total,
    addItem,
    removeItem,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default CartContext
