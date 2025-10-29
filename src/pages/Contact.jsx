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
              Contacto
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
                href="https://wa.me/573212461567" 
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
                  boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)'
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
                Contáctanos
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
                  transition: 'all 0.3s ease'
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
                Ver Formulario &gt;&gt;
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
                  href="https://wa.me/573212461567" 
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
                  href="tel:+573212461567"
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
                  href="mailto:gerencia@construmiracor.com"
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
