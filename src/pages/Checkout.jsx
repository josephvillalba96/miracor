import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, User, Mail, Phone, CreditCard, Shield, CheckCircle, AlertCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'
import { useWompiCheckout } from '../hooks/useWompiCheckout'

const LEGAL_ID_TYPES = [
  { value: 'CC', label: 'Cédula de Ciudadanía' },
  { value: 'CE', label: 'Cédula de Extranjería' },
  { value: 'NIT', label: 'NIT' },
  { value: 'PP', label: 'Pasaporte' },
  { value: 'TI', label: 'Tarjeta de Identidad' },
]

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem 0.85rem 2.75rem',
  border: '1.5px solid #e5e7eb',
  borderRadius: '10px',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  background: '#fafafa',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '0.4rem',
}

const iconWrapStyle = {
  position: 'absolute',
  left: '0.85rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#9ca3af',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
}

const Checkout = () => {
  const navigate = useNavigate()
  const { items, subtotal, iva, total, clearCart } = useCart()
  const { scriptLoaded, isLoading, error, openWompiCheckout } = useWompiCheckout()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    legalId: '',
    legalIdType: 'CC',
  })
  const [formErrors, setFormErrors] = useState({})
  const [paymentError, setPaymentError] = useState(null)

  const shippingCost = subtotal >= 200000 ? 0 : 15000
  const finalTotal = total + shippingCost

  // Redirigir si el carrito está vacío
  if (items.length === 0) {
    return (
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <ShoppingBag size={70} style={{ color: '#d1d5db', marginBottom: '1.5rem' }} />
          <h1 style={{ marginBottom: '0.5rem' }}>Tu carrito está vacío</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Agrega productos antes de continuar al pago.</p>
          <Link
            to="/productos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--color-primary)', color: 'white',
              padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600',
            }}
          >
            Ver Catálogo
          </Link>
        </div>
      </main>
    )
  }

  const validate = () => {
    const errors = {}
    if (!form.fullName.trim()) errors.fullName = 'El nombre es requerido'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = 'Ingresa un correo válido'
    if (!form.phoneNumber.trim() || !/^\d{7,10}$/.test(form.phoneNumber))
      errors.phoneNumber = 'Ingresa un número de teléfono válido (7-10 dígitos)'
    if (!form.legalId.trim()) errors.legalId = 'El documento de identidad es requerido'
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handlePay = async (e) => {
    e.preventDefault()
    setPaymentError(null)

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    openWompiCheckout({
      amountCOP: finalTotal,
      customerData: {
        email: form.email,
        fullName: form.fullName,
        phoneNumber: form.phoneNumber,
        legalId: form.legalId,
        legalIdType: form.legalIdType,
      },
      onSuccess: (transaction) => {
        if (transaction.status === 'APPROVED') {
          clearCart()
        }
        navigate(`/pagos/resultado?id=${transaction.id}`)
      },
      onError: (msg) => {
        setPaymentError(msg)
      },
    })
  }

  const FieldWrapper = ({ children, error }) => (
    <div style={{ marginBottom: error ? '0.25rem' : '1.25rem' }}>
      {children}
      {error && (
        <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.3rem', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  )

  return (
    <main style={{ padding: '2rem 0 4rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/carrito"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              color: 'var(--color-primary)', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: '500', marginBottom: '1rem',
            }}
          >
            <ArrowLeft size={16} />
            Volver al carrito
          </Link>
          <h1 style={{ fontSize: '1.9rem', margin: 0 }}>Datos para el pago</h1>
          <p style={{ color: '#6b7280', marginTop: '0.3rem' }}>
            Completa tus datos y paga de forma segura con Wompi
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', alignItems: 'flex-start' }}>

          {/* Formulario */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={20} style={{ color: 'var(--color-primary)' }} />
              Información personal
            </h2>

            <form id="checkout-form" onSubmit={handlePay} noValidate>
              {/* Nombre completo */}
              <FieldWrapper error={formErrors.fullName}>
                <label style={labelStyle} htmlFor="fullName">Nombre completo *</label>
                <div style={{ position: 'relative' }}>
                  <span style={iconWrapStyle}><User size={16} /></span>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Juan Pérez García"
                    style={{ ...inputStyle, borderColor: formErrors.fullName ? '#ef4444' : '#e5e7eb' }}
                  />
                </div>
              </FieldWrapper>

              {/* Email */}
              <FieldWrapper error={formErrors.email}>
                <label style={labelStyle} htmlFor="email">Correo electrónico *</label>
                <div style={{ position: 'relative' }}>
                  <span style={iconWrapStyle}><Mail size={16} /></span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    style={{ ...inputStyle, borderColor: formErrors.email ? '#ef4444' : '#e5e7eb' }}
                  />
                </div>
              </FieldWrapper>

              {/* Teléfono */}
              <FieldWrapper error={formErrors.phoneNumber}>
                <label style={labelStyle} htmlFor="phoneNumber">Número de teléfono *</label>
                <div style={{ position: 'relative' }}>
                  <span style={iconWrapStyle}><Phone size={16} /></span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="3001234567"
                    style={{ ...inputStyle, paddingLeft: '2.75rem', borderColor: formErrors.phoneNumber ? '#ef4444' : '#e5e7eb' }}
                  />
                </div>
              </FieldWrapper>

              {/* Documento */}
              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', marginBottom: formErrors.legalId ? '0.25rem' : '1.25rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="legalIdType">Tipo doc.</label>
                  <select
                    id="legalIdType"
                    name="legalIdType"
                    value={form.legalIdType}
                    onChange={handleChange}
                    style={{ ...inputStyle, paddingLeft: '0.85rem', cursor: 'pointer' }}
                  >
                    {LEGAL_ID_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="legalId">Número de documento *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={iconWrapStyle}><CreditCard size={16} /></span>
                    <input
                      id="legalId"
                      name="legalId"
                      type="text"
                      value={form.legalId}
                      onChange={handleChange}
                      placeholder="1234567890"
                      style={{ ...inputStyle, borderColor: formErrors.legalId ? '#ef4444' : '#e5e7eb' }}
                    />
                  </div>
                </div>
              </div>
              {formErrors.legalId && (
                <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'block', marginBottom: '1rem' }}>
                  {formErrors.legalId}
                </span>
              )}

              {/* Error de pago */}
              {(paymentError || error) && (
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  background: '#fef2f2', border: '1px solid #fecaca',
                  borderRadius: '10px', padding: '1rem', marginBottom: '1.25rem',
                }}>
                  <AlertCircle size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '1px' }} />
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#b91c1c' }}>
                    {paymentError || error}
                  </p>
                </div>
              )}

              {/* Seguridad */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#f0fdf4', borderRadius: '10px', padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
              }}>
                <Shield size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#15803d' }}>
                  Tu pago es procesado de forma segura por <strong>Wompi</strong>. Miracor nunca almacena tu información financiera.
                </p>
              </div>

              {/* Botón de pago */}
              <button
                type="submit"
                form="checkout-form"
                disabled={isLoading || !scriptLoaded}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                  color: 'white',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  transition: 'all 0.2s',
                  letterSpacing: '0.01em',
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{
                      display: 'inline-block', width: '18px', height: '18px',
                      border: '2px solid rgba(255,255,255,0.4)',
                      borderTopColor: 'white', borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                    Iniciando pago...
                  </>
                ) : (
                  <>
                    <svg width="22" height="22" viewBox="0 0 50 50" fill="none">
                      <rect width="50" height="50" rx="10" fill="white" fillOpacity="0.2"/>
                      <text x="7" y="36" fill="white" fontSize="26" fontWeight="bold" fontFamily="Arial">W</text>
                    </svg>
                    Pagar {formatPrice(finalTotal)} con Wompi
                  </>
                )}
              </button>

              {!scriptLoaded && (
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9ca3af', marginTop: '0.5rem' }}>
                  Cargando módulo de pagos...
                </p>
              )}
            </form>
          </div>

          {/* Resumen del pedido */}
          <div style={{
            background: 'white', borderRadius: '16px', padding: '1.75rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)', position: 'sticky', top: '100px',
          }}>
            <h2 style={{ fontSize: '1.1rem', margin: '0 0 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShoppingBag size={20} style={{ color: 'var(--color-primary)' }} />
              Resumen del pedido
            </h2>

            {/* Productos */}
            <div style={{ marginBottom: '1.25rem', maxHeight: '260px', overflowY: 'auto' }}>
              {items.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '52px', height: '52px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>
                      x{item.quantity}
                    </p>
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary)', flexShrink: 0 }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', marginBottom: '1rem' }}>
              {[
                { label: `Subtotal (${items.reduce((s, i) => s + i.quantity, 0)} ítems)`, value: formatPrice(subtotal), isGreen: false },
                { label: 'IVA (19%)', value: formatPrice(iva), isGreen: false },
                { label: 'Envío', value: shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost), isGreen: shippingCost === 0 },
              ].map(({ label, value, isGreen }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem', color: '#6b7280' }}>
                  <span>{label}</span>
                  <span style={{ color: isGreen ? '#16a34a' : 'inherit', fontWeight: isGreen ? '600' : 'normal' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>


            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #e5e7eb', paddingTop: '1rem' }}>
              <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>Total</span>
              <span style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--color-primary)' }}>
                {formatPrice(finalTotal)}
              </span>
            </div>

            {/* Badges de seguridad */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '1.5rem',
              marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f3f4f6',
            }}>
              {[
                { icon: <Shield size={16} />, label: 'Pago seguro' },
                { icon: <CheckCircle size={16} />, label: 'Wompi certificado' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', color: '#6b7280' }}>
                  <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
                  <span style={{ fontSize: '0.75rem' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1024px) {
          .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, select:focus {
          border-color: var(--color-primary) !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 0, 102, 204), 0.1);
        }
      `}</style>
    </main>
  )
}

export default Checkout
