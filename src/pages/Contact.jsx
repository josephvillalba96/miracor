import { useState } from 'react'
import { 
  MapPin, 
  Phone,
  Mail,
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 2000)
  }


  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'url(/assets/hero_contact.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Dark overlay with opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(52, 58, 64, 0.4)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ 
          position: 'relative',
          zIndex: 2
        }}>
          <div className="text-center contact-hero">
            <h1 className="contact-hero" style={{ 
              fontSize: '3.325rem',
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--color-white)',
              lineHeight: '1.2',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.5px'
            }}>
              ¿Necesitas Equipos de Seguridad?
            </h1>
            <p className="contact-hero" style={{ 
              fontSize: '1.2rem',
              marginBottom: '3rem',
              color: 'var(--color-white)',
              opacity: 0.95,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              lineHeight: '1.4',
              maxWidth: '600px',
              margin: '0 auto 3rem'
            }}>
              Estamos aquí para ayudarte. Contáctanos y recibe la mejor asesoría 
              en equipos de protección personal y construcción industrial.
            </p>
            <div className="contact-hero-buttons" style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <a 
                href="https://wa.me/573219714991" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--color-text)';
                  e.target.style.color = 'var(--color-white)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(9, 12, 2, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'var(--color-primary)';
                  e.target.style.color = 'var(--color-white)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 102, 0, 0.3)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Cotizar ahora
              </a>
              <a 
                href="#contact-form" 
                style={{ 
                  background: 'transparent',
                  color: 'var(--color-white)',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  border: '2px solid var(--color-white)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--color-white)';
                  e.target.style.color = 'var(--color-text)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--color-white)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form and Map */}
      <section className="section">
        <div className="container">
          <div className="contact-form-grid grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            {/* Contact Form */}
            <div id="contact-form">
              <h2 style={{ marginBottom: '1rem' }}>Envíanos un Mensaje</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--color-gray-medium)' }}>
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tus necesidades de seguridad industrial..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '12px',
                    background: '#d4edda',
                    color: '#155724',
                    borderRadius: '8px',
                    border: '1px solid #c3e6cb'
                  }}>
                    <CheckCircle size={20} />
                    ¡Mensaje enviado correctamente! Te contactaremos pronto.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ 
                    alignSelf: 'flex-start',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid transparent',
                        borderTop: '2px solid currentColor',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Quick Contact */}
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Ubicación</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-gray-medium)' }}>
                Visítanos en nuestras oficinas en Barranquilla
              </p>
              
              {/* OpenStreetMap */}
              <div className="contact-map" style={{
                width: '100%',
                height: '300px',
                borderRadius: '12px',
                marginBottom: '2rem',
                overflow: 'hidden',
                border: '2px solid #dee2e6'
              }}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.8080%2C11.0041%2C-74.7880%2C11.0241&layer=mapnik&marker=11.0141%2C-74.7980"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Ubicación de MIRACOR S.A.S. en Barranquilla"
                />
              </div>
              
              {/* Map Info */}
              <div style={{
                background: 'var(--color-gray-light)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={20} style={{ color: 'var(--color-primary)' }} />
                  <strong>Dirección:</strong>
                </div>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  CR 53 # 75 - 138 OF 17, Piso 2<br />
                  Barranquilla, Colombia
                </p>
                <a 
                  href="https://www.openstreetmap.org/?mlat=11.0141&mlon=-74.7980&zoom=16&layers=M"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  Ver en mapa completo →
                </a>
              </div>

              {/* Quick Contact Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="https://wa.me/573219714991" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={20} />
                  WhatsApp Business
                </a>
                
                <a 
                  href="tel:+573219714991"
                  className="btn-secondary"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={20} />
                  Llamar Ahora
                </a>
                
                <a 
                  href="mailto:atencionalcliente@miracor.com.co"
                  className="btn-secondary"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={20} />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Contact Hero Responsive */
        @media (max-width: 1024px) {
          .contact-hero h1 {
            font-size: 2.85rem;
            margin-bottom: 1.2rem;
          }
          
          .contact-hero p {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
          }
          
          .contact-hero-buttons {
            gap: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-hero h1 {
            font-size: 2.4rem;
            margin-bottom: 1rem;
            line-height: 1.1;
          }
          
          .contact-hero p {
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.3;
          }
          
          .contact-hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .contact-hero-buttons a {
            width: 100%;
            text-align: center;
            padding: 14px 28px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero h1 {
            font-size: 2rem;
            letter-spacing: -0.3px;
          }
          
          .contact-hero p {
            font-size: 0.95rem;
            max-width: 100%;
          }
        }

        /* Map Responsive */
        @media (max-width: 768px) {
          .contact-map {
            height: 250px;
          }
          
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-map {
            height: 200px;
          }
        }
      `}</style>
    </main>
  )
}

export default Contact
