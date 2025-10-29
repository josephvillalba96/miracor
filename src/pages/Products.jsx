import { Link } from 'react-router-dom'

const Products = () => {

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
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="https://wa.me/573212461567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                style={{ 
                    background: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'var(--color-text)'}
                  onMouseOut={(e) => e.target.style.background = 'var(--color-primary)'}
                >
                  Contáctanos
                </a>
                <a 
                  href="/contacto" 
                style={{
                    background: 'transparent',
                    color: 'var(--color-white)',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    fontFamily: 'Montserrat, sans-serif',
                    border: '2px solid var(--color-white)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--color-white)';
                    e.target.style.color = 'var(--color-text)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--color-white)';
                  }}
                >
                  Contáctanos
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
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1581090464607-5d09e9d0b1f4?auto=format&fit=crop&w=1200&q=80" alt="Trabajadores revisando planos" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                </div>
                
              {/* Service Card 2 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1581091870633-1e7abcb35c1b?auto=format&fit=crop&w=1200&q=80" alt="Diseño arquitectónico industrial" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                    </div>

              {/* Service Card 3 - Highlighted */}
              <div className="service-card highlighted">
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
                  <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" alt="Construcción industrial" />
                  <button className="service-btn highlighted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
          </div>

              {/* Service Card 4 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" alt="Consultoría técnica" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
        </div>
          </div>
          
              {/* Service Card 5 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80" alt="Mantenimiento industrial" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Service Card 6 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1581091870633-1e7abcb35c1b?auto=format&fit=crop&w=1200&q=80" alt="Proyectos comerciales" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
          </div>
        </div>

              {/* Service Card 7 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1581090464607-5d09e9d0b1f4?auto=format&fit=crop&w=1200&q=80" alt="Equipos de protección" />
                  <button className="service-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
              </button>
                </div>
            </div>
            
              {/* Service Card 8 */}
              <div className="service-card">
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
                  <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" alt="Innovación tecnológica" />
                  <button className="service-btn">
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
              <Link to="/contacto" className="find-more-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                Contáctanos
              </Link>
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
            ¿Necesitas <span style={{ color: 'var(--color-white)' }}>equipos de seguridad</span>?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.3'
          }}>
            Contáctanos y recibe una cotización personalizada para todos tus equipos de protección personal.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
          <a 
            href="https://wa.me/573212461567" 
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
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
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
              Contáctanos
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
              Contáctanos
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
          border-radius: 50%;
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
