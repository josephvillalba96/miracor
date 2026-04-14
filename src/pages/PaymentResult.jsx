import { useEffect, useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, Clock, XCircle, ShoppingBag, ArrowLeft, RefreshCw, Home } from 'lucide-react'
import { getTransactionStatus } from '../utils/wompi'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const STATUS_CONFIG = {
  APPROVED: {
    icon: <CheckCircle2 size={72} />,
    color: '#16a34a',
    bgColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    title: '¡Pago aprobado!',
    subtitle: 'Tu pedido ha sido confirmado exitosamente.',
    badgeText: 'Aprobado',
    badgeBg: '#dcfce7',
    badgeColor: '#15803d',
  },
  PENDING: {
    icon: <Clock size={72} />,
    color: '#d97706',
    bgColor: '#fffbeb',
    borderColor: '#fde68a',
    title: 'Pago en proceso',
    subtitle: 'Tu pago está siendo verificado. Te notificaremos cuando se confirme.',
    badgeText: 'Pendiente',
    badgeBg: '#fef3c7',
    badgeColor: '#92400e',
  },
  DECLINED: {
    icon: <XCircle size={72} />,
    color: '#dc2626',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    title: 'Pago no aprobado',
    subtitle: 'Tu pago fue rechazado. Puedes intentar de nuevo con otro método de pago.',
    badgeText: 'Rechazado',
    badgeBg: '#fee2e2',
    badgeColor: '#b91c1c',
  },
  ERROR: {
    icon: <XCircle size={72} />,
    color: '#dc2626',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    title: 'Error en el pago',
    subtitle: 'Ocurrió un error al procesar tu pago. Por favor intenta de nuevo.',
    badgeText: 'Error',
    badgeBg: '#fee2e2',
    badgeColor: '#b91c1c',
  },
  VOIDED: {
    icon: <XCircle size={72} />,
    color: '#6b7280',
    bgColor: '#f9fafb',
    borderColor: '#e5e7eb',
    title: 'Pago anulado',
    subtitle: 'La transacción fue anulada.',
    badgeText: 'Anulado',
    badgeBg: '#f3f4f6',
    badgeColor: '#374151',
  },
}

const PaymentResult = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { clearCart } = useCart()

  const transactionId = searchParams.get('id')

  const [state, setState] = useState({
    status: null,       // APPROVED | PENDING | DECLINED | ERROR | VOIDED
    transaction: null,
    loading: true,
    error: null,
    retries: 0,
  })

  const fetchTransaction = async () => {
    if (!transactionId) {
      setState((s) => ({ ...s, loading: false, error: 'No se encontró el ID de la transacción.' }))
      return
    }

    try {
      setState((s) => ({ ...s, loading: true, error: null }))
      const tx = await getTransactionStatus(transactionId)
      setState((s) => ({
        ...s,
        loading: false,
        transaction: tx,
        status: tx.status,
      }))

      // Limpiar carrito si el pago fue aprobado
      if (tx.status === 'APPROVED') {
        clearCart()
      }
    } catch (err) {
      setState((s) => ({
        ...s,
        loading: false,
        error: 'No pudimos consultar el estado de tu pago. Intenta recargar la página.',
      }))
    }
  }

  useEffect(() => {
    fetchTransaction()
  }, [transactionId])

  // Pantalla de carga
  if (state.loading) {
    return (
      <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px', height: '60px',
            border: '4px solid #e5e7eb',
            borderTopColor: 'var(--color-primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1.5rem',
          }} />
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Verificando tu pago...</h2>
          <p style={{ color: '#6b7280' }}>Por favor espera un momento.</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </main>
    )
  }

  // Error al consultar
  if (state.error) {
    return (
      <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{
          textAlign: 'center', background: 'white', padding: '3rem 2.5rem',
          borderRadius: '20px', maxWidth: '480px', width: '90%',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <XCircle size={64} style={{ color: '#dc2626', marginBottom: '1rem' }} />
          <h2 style={{ marginBottom: '0.5rem' }}>No pudimos consultar tu pago</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{state.error}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              id="btn-retry-check"
              onClick={fetchTransaction}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--color-primary)', color: 'white',
                padding: '0.85rem 1.5rem', borderRadius: '10px',
                border: 'none', cursor: 'pointer', fontWeight: '600',
              }}
            >
              <RefreshCw size={16} /> Reintentar
            </button>
            <Link
              to="/"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: '#f3f4f6', color: '#374151',
                padding: '0.85rem 1.5rem', borderRadius: '10px',
                textDecoration: 'none', fontWeight: '600',
              }}
            >
              <Home size={16} /> Ir al inicio
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const config = STATUS_CONFIG[state.status] || STATUS_CONFIG.ERROR
  const tx = state.transaction

  return (
    <main style={{ padding: '3rem 0 5rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>

        {/* Tarjeta de estado */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}>
          {/* Banner de estado */}
          <div style={{
            background: config.bgColor,
            borderBottom: `1px solid ${config.borderColor}`,
            padding: '2.5rem 2rem',
            textAlign: 'center',
          }}>
            <div style={{ color: config.color, marginBottom: '1rem' }}>
              {config.icon}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: config.badgeBg, color: config.badgeColor,
              padding: '0.3rem 1rem', borderRadius: '999px',
              fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.75rem',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              {config.badgeText}
            </div>
            <h1 style={{ fontSize: '1.6rem', margin: '0 0 0.5rem', color: '#111827' }}>
              {config.title}
            </h1>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>
              {config.subtitle}
            </p>
          </div>

          {/* Detalles de la transacción */}
          {tx && (
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem', color: '#374151' }}>
                Detalles de la transacción
              </h3>
              <div style={{ display: 'grid', gap: '0.85rem' }}>
                {[
                  { label: 'ID de transacción', value: tx.id },
                  { label: 'Referencia de pago', value: tx.reference },
                  {
                    label: 'Monto total',
                    value: tx.amount_in_cents
                      ? formatPrice(tx.amount_in_cents / 100)
                      : '—',
                    highlight: true,
                  },
                  { label: 'Moneda', value: tx.currency },
                  { label: 'Método de pago', value: tx.payment_method_type || '—' },
                  {
                    label: 'Fecha',
                    value: tx.created_at
                      ? new Date(tx.created_at).toLocaleString('es-CO', {
                          dateStyle: 'medium', timeStyle: 'short',
                        })
                      : '—',
                  },
                ].map(({ label, value, highlight }) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem 1rem', background: '#f9fafb', borderRadius: '10px',
                  }}>
                    <span style={{ fontSize: '0.88rem', color: '#6b7280' }}>{label}</span>
                    <span style={{
                      fontSize: highlight ? '1.05rem' : '0.9rem',
                      fontWeight: highlight ? '700' : '600',
                      color: highlight ? config.color : '#111827',
                      wordBreak: 'break-all', textAlign: 'right', maxWidth: '60%',
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Acciones */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {state.status === 'APPROVED' ? (
            <>
              <Link
                id="btn-go-home-approved"
                to="/"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--color-primary)', color: 'white',
                  padding: '1rem 2rem', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
                }}
              >
                <Home size={18} /> Ir al inicio
              </Link>
              <Link
                id="btn-continue-shopping"
                to="/productos"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'white', color: 'var(--color-primary)',
                  border: '2px solid var(--color-primary)',
                  padding: '1rem 2rem', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
                }}
              >
                <ShoppingBag size={18} /> Seguir comprando
              </Link>
            </>
          ) : (
            <>
              <button
                id="btn-go-back-cart"
                onClick={() => navigate('/carrito')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--color-primary)', color: 'white',
                  padding: '1rem 2rem', borderRadius: '12px',
                  border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '1rem',
                }}
              >
                <ArrowLeft size={18} /> Volver al carrito
              </button>
              <Link
                id="btn-go-home-declined"
                to="/"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: 'white', color: '#374151',
                  border: '2px solid #e5e7eb',
                  padding: '1rem 2rem', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
                }}
              >
                <Home size={18} /> Ir al inicio
              </Link>
            </>
          )}
        </div>

        {/* ID de referencia para soporte */}
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9ca3af', marginTop: '2rem' }}>
          Si necesitas ayuda, contacta a soporte con el ID: <strong style={{ color: '#6b7280' }}>{transactionId}</strong>
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  )
}

export default PaymentResult
