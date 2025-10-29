import { Link } from 'react-router-dom'
import { Shield, HardHat, Wrench, Building, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import Services from '../components/Services'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import WhoWeAre from '../components/WhoWeAre'

const Home = () => {


  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'url(/assets/Hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
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
          display: 'flex', 
          alignItems: 'center', 
          minHeight: '100vh',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="hero-content" style={{
            maxWidth: '700px',
            textAlign: 'left',
            zIndex: 2,
            position: 'relative',
            padding: '2rem 0'
          }}>
            <h1 style={{ 
              fontSize: '3.325rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--color-white)',
              lineHeight: '1.2',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.5px'
            }}>
              Equipos de Protección Personal y Seguridad Industrial en Barranquilla
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '3rem', 
              color: 'var(--color-white)',
              opacity: 0.95,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              lineHeight: '1.4',
              maxWidth: '500px'
            }}>
              Con nuestros servicios expertos de construcción, entregamos proyectos de alta calidad que superan las expectativas de nuestros clientes.
            </p>
            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1.5rem', 
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
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(9, 12, 2, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'var(--color-primary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 102, 0, 0.3)';
                }}
              >
                Contáctanos
              </a>
              <Link 
                to="/contacto" 
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
                Contacto &gt;&gt;
              </Link>
            </div>
          </div>
          
          {/*   <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            background: '#ffffff',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            maxWidth: '300px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: 4
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '8px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Ve lo que nuestros clientes tienen que decir
            </h3>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'var(--color-primary)',
              marginBottom: '16px'
            }}></div>
            <div style={{
              fontSize: '2rem',
              color: 'var(--color-text)',
              marginBottom: '8px'
            }}>"</div>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--color-gray-medium)',
              fontStyle: 'italic',
              lineHeight: '1.4',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              entregando proyectos de alta calidad que superan las expectativas de nuestra familia.
            </p>
          </div>Testimonial Box */}
        
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-block">
              <div className="feature-image">
                <img src="/assets/about_1.png" alt="Equipos de protección personal de alta calidad" />
              </div>
              <div className="feature-accent"></div>
              <h3 className="feature-title">Alta Calidad</h3>
              <p className="feature-description">
                Productos certificados y materiales de primera calidad que garantizan 
                la durabilidad y seguridad en todos nuestros equipos de protección personal.
              </p>
            </div>
            
            <div className="feature-block">
              <div className="feature-image">
                <img src="/assets/about_2.jpg" alt="Soluciones de seguridad industrial económicas" />
              </div>
              <div className="feature-accent"></div>
              <h3 className="feature-title">Dentro del Presupuesto</h3>
              <p className="feature-description">
                Optimizamos costos sin comprometer la calidad, ofreciendo soluciones 
                económicas que se ajustan perfectamente a tu presupuesto disponible.
              </p>
            </div>
            
            <div className="feature-block">
              <div className="feature-image">
                <img src="/assets/about_3.jpg" alt="Entrega puntual de equipos de seguridad" />
              </div>
              <div className="feature-accent"></div>
              <h3 className="feature-title">A Tiempo</h3>
              <p className="feature-description">
                Cumplimos con los plazos establecidos mediante una planificación 
                detallada y un equipo de trabajo comprometido con la puntualidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <Services />

     

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Who We Are Section */}
      <WhoWeAre />



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
            ¿Listo para <span style={{ color: 'var(--color-white)' }}>proteger a tu equipo</span>?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.3'
          }}>
            Contacta con nosotros y recibe una cotización personalizada para tus necesidades de seguridad.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            <Link 
              to="/contacto" 
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
            </Link>
            <Link 
              to="/contacto" 
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
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .features-section {
          padding: 80px 0;
          background: var(--color-white);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-block {
          position: relative;
          padding-left: 2rem;
          text-align: center;
        }

        .feature-image {
          margin-bottom: 2rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-image:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .feature-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .feature-accent {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 60px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .feature-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.0;
        }

        .feature-description {
          font-size: 1rem;
          color: var(--color-gray-dark);
          line-height: 1.3;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 60px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .feature-block {
            padding-left: 1.5rem;
          }

          .feature-image {
            margin-bottom: 1.5rem;
          }

          .feature-image img {
            height: 180px;
          }

          .feature-accent {
            height: 50px;
          }

          .feature-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .feature-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .features-grid {
            gap: 2.5rem;
          }

          .feature-block {
            padding-left: 1.25rem;
          }

          .feature-image {
            margin-bottom: 1.25rem;
          }

          .feature-image img {
            height: 160px;
          }

          .feature-accent {
            width: 3px;
            height: 40px;
          }

          .feature-title {
            font-size: 1.3rem;
          }
        }

        /* Hero Section Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            max-width: 600px;
            padding: 1.5rem 0;
          }
          
          .hero-content h1 {
            font-size: 2.8rem;
            margin-bottom: 1.2rem;
          }
          
          .hero-content p {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            max-width: 450px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            max-width: 100%;
            padding: 1rem 0;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
            line-height: 1.1;
          }
          
          .hero-content p {
            font-size: 1rem;
            margin-bottom: 2rem;
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
            gap: 1rem;
          }
          
          .hero-buttons a,
          .hero-buttons Link {
            padding: 14px 24px;
            font-size: 0.9rem;
          }
        }

      `}</style>
    </main>
  )
}

export default Home
