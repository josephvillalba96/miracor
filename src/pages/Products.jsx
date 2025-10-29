import { Link } from 'react-router-dom'
import { useState } from 'react'

const Products = () => {
  const [highlightedService, setHighlightedService] = useState(3) // Service 3 is highlighted by default

  const handleServiceClick = (serviceId) => {
    setHighlightedService(serviceId)
  }

  return (
    <>
    <main>
      {/* Hero Section */}
        <section className="hero" style={{
          backgroundImage: 'url(/assets/hero_services.jpg)',
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
          <div className="text-center">
              <h1 style={{ 
                fontSize: '3.325rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: 'var(--color-white)',
                lineHeight: '1.1',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Productos y Servicios de 
                <span style={{ color: 'var(--color-primary)' }}> Seguridad Industrial</span>
              </h1>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2.5rem', 
                color: 'var(--color-white)',
                opacity: 0.9,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '400',
                maxWidth: '600px',
                margin: '0 auto 2.5rem'
              }}>
              Equipos de protección personal, ropa de seguridad y servicios especializados 
              para la industria colombiana
            </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap'
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
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(9, 12, 2, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 102, 0, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Cotizar ahora
            </a>
          </div>
          </div>
        </div>
      </section>

        {/* What We Do Section */}
        <section className="what-we-do-section">
        <div className="container">
            <div className="what-we-do-content">
              <div className="what-we-do-subtitle">
                <div className="what-we-do-icon">
                  <div className="icon-part orange"></div>
                  <div className="icon-part black"></div>
                </div>
                <span>QUÉ HACEMOS</span>
              </div>
              <h2 className="what-we-do-title">
                Servicios de Alta Calidad para
                <br />
                Múltiples Industrias
              </h2>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {/* Service Card 1 */}
              <div 
                className={`service-card ${highlightedService === 1 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(1)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18l-2 13H5L3 6zM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M10 10v6M14 10v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-card-title">Gestión de Construcción</h3>
                <p className="service-card-description">
                  Servicios especializados en planificación, supervisión y control de proyectos de construcción industrial.
                </p>
                <div className="service-image">
                  <img src="/assets/services/supervision_tecnica_2.jpg" alt="Trabajadores revisando planos" />
                  <button className={`service-btn ${highlightedService === 1 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                </div>
                
              {/* Service Card 2 */}
              <div 
                className={`service-card ${highlightedService === 2 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(2)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  </div>
                <h3 className="service-card-title">Diseño Arquitectónico</h3>
                <p className="service-card-description">
                  Diseño y planificación arquitectónica especializada para proyectos industriales y comerciales.
                </p>
                <div className="service-image">
                  <img src="/assets/services/edificio_nacional.jpg" alt="Diseño arquitectónico industrial" />
                  <button className={`service-btn ${highlightedService === 2 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                    </div>

              {/* Service Card 3 - Highlighted */}
              <div 
                className={`service-card ${highlightedService === 3 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(3)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="service-card-title">Construcción Industrial</h3>
                <p className="service-card-description">
                  Proyectos de construcción especializada para la industria con los más altos estándares de calidad.
                </p>
                <div className="service-image">
                  <img src="/assets/services/planta_aditivos.webp" alt="Construcción industrial" />
                  <button className={`service-btn ${highlightedService === 3 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
          </div>

              {/* Service Card 4 */}
              <div 
                className={`service-card ${highlightedService === 4 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(4)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
                  </svg>
            </div>
                <h3 className="service-card-title">Consultoría Técnica</h3>
                <p className="service-card-description">
                  Asesoría especializada en seguridad industrial y optimización de procesos constructivos.
                </p>
                <div className="service-image">
                  <img src="/assets/services/obras_civiles.png" alt="Consultoría técnica" />
                  <button className={`service-btn ${highlightedService === 4 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
        </div>
          </div>
          
              {/* Service Card 5 */}
              <div 
                className={`service-card ${highlightedService === 5 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(5)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18l-2 13H5L3 6zM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M10 10v6M14 10v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-card-title">Mantenimiento Industrial</h3>
                <p className="service-card-description">
                  Servicios de mantenimiento preventivo y correctivo para instalaciones industriales.
                </p>
                <div className="service-image">
                  <img src="/assets/services/reparacion_plantas.jpg" alt="Mantenimiento industrial" />
                  <button className={`service-btn ${highlightedService === 5 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Service Card 6 */}
              <div 
                className={`service-card ${highlightedService === 6 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(6)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-card-title">Proyectos Comerciales</h3>
                <p className="service-card-description">
                  Desarrollo de proyectos comerciales con enfoque en eficiencia y sostenibilidad.
                </p>
                <div className="service-image">
                  <img src="/assets/services/centros_comerciales.jpg" alt="Proyectos comerciales" />
                  <button className={`service-btn ${highlightedService === 6 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
          </div>
        </div>

              {/* Service Card 7 */}
              <div 
                className={`service-card ${highlightedService === 7 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(7)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
          </div>
                <h3 className="service-card-title">Equipos de Protección</h3>
                <p className="service-card-description">
                  Suministro y asesoría en equipos de protección personal certificados.
                </p>
                <div className="service-image">
                  <img src="/assets/services/chaleco_reflectivo.jpg" alt="Equipos de protección" />
                  <button className={`service-btn ${highlightedService === 7 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
              </button>
                </div>
            </div>
            
              {/* Service Card 8 */}
              <div 
                className={`service-card ${highlightedService === 8 ? 'highlighted' : ''}`}
                onClick={() => handleServiceClick(8)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-card-title">Innovación Tecnológica</h3>
                <p className="service-card-description">
                  Implementación de tecnologías avanzadas en procesos de construcción industrial.
                </p>
                <div className="service-image">
                  <img src="/assets/services/servicios_industriales.webp" alt="Innovación tecnológica" />
                  <button className={`service-btn ${highlightedService === 8 ? 'highlighted' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
              </button>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="services-bottom">
              <p className="services-description">
                <span className="highlight">Servicios</span> de Construcción Especializados para tu Negocio
              </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'var(--color-primary)',
        color: 'var(--color-white)',
        textAlign: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <h2 style={{ 
            color: 'var(--color-white)', 
            marginBottom: '1.5rem',
            fontSize: '2.66rem',
            fontWeight: '700',
            lineHeight: '1.0'
          }}>
            ¿Listo para <span style={{ color: 'var(--color-white)' }}>solicitar nuestros servicios</span>?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.3'
          }}>
            Obtén una cotización personalizada para construcción industrial, equipos de protección personal, 
            supervisión técnica y todos nuestros servicios especializados.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
          <a 
            href="https://wa.me/573219714991" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: 'var(--color-white)', 
              color: 'var(--color-primary)',
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'var(--color-text)';
                e.target.style.color = 'var(--color-white)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'var(--color-white)';
                e.target.style.color = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Cotizar ahora
            </a>
            <a 
              href="/contacto" 
              style={{ 
                background: 'transparent',
                color: 'var(--color-white)',
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
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
      </section>
    </main>

      <style jsx>{`
        .what-we-do-section {
          background: #ffffff;
          padding: 100px 0;
          text-align: center;
        }

        .what-we-do-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .what-we-do-subtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .what-we-do-icon {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .icon-part {
          width: 8px;
          height: 20px;
          position: relative;
        }

        .icon-part.orange {
          background: var(--color-primary);
          transform: skew(-15deg);
          margin-right: 2px;
        }

        .icon-part.black {
          background: var(--color-text);
          transform: skew(-15deg);
        }

        .what-we-do-subtitle span {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Montserrat', sans-serif;
        }

        .what-we-do-title {
          font-size: 2.85rem;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .what-we-do-section {
            padding: 80px 0;
          }

          .what-we-do-title {
            font-size: 2.5rem;
          }

          .what-we-do-subtitle {
            margin-bottom: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .what-we-do-section {
            padding: 60px 0;
          }

          .what-we-do-title {
            font-size: 2rem;
          }

          .what-we-do-subtitle span {
            font-size: 0.8rem;
          }

          .icon-part {
            width: 6px;
            height: 16px;
          }
        }

        /* Services Grid Section */
        .services-grid-section {
          background: #ffffff;
          padding: 100px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .service-card.highlighted {
          border-color: var(--color-primary);
          box-shadow: 0 8px 30px rgba(57, 67, 183, 0.2);
        }

        .service-icon {
          width: 50px;
          height: 50px;
          background: var(--color-text);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .service-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .service-card-description {
          font-size: 0.9rem;
          color: var(--color-gray-medium);
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }

        .service-image {
          position: relative;
          width: 100%;
          height: 150px;
          border-radius: 8px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .service-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          background: var(--color-primary);
          border: none;
          border-radius: 8px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
        }

        .service-btn:hover {
          background: var(--color-text);
          transform: scale(1.1);
        }

        .service-btn.highlighted {
          background: var(--color-text);
        }

        .service-btn.highlighted:hover {
          background: #1a1a1a;
        }

        .services-bottom {
          text-align: center;
        }

        .services-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2rem;
        }

        .services-description .highlight {
          color: var(--color-primary);
        }

        .find-more-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .find-more-btn:hover {
          background: var(--color-text);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(9, 12, 2, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid-section {
            padding: 80px 0;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.25rem;
          }

          .service-image {
            height: 120px;
          }

          .services-description {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .services-grid-section {
            padding: 60px 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .service-card {
            padding: 1rem;
          }

          .service-icon {
            width: 40px;
            height: 40px;
          }

          .service-card-title {
            font-size: 1rem;
          }

          .service-card-description {
            font-size: 0.85rem;
          }

          .service-image {
            height: 100px;
          }

          .services-description {
            font-size: 1.1rem;
          }

          .find-more-btn {
            padding: 14px 28px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}

export default Products
