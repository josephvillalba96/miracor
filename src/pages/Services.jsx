import { Link } from 'react-router-dom'
import { Wrench, GraduationCap, Award, ClipboardCheck, Phone, Mail, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Wrench size={48} />,
      title: 'Asesoría Técnica',
      description: 'Evaluación de riesgos laborales y recomendaciones personalizadas para la selección correcta de equipos de protección personal según su industria y normativa aplicable.',
      features: [
        'Análisis de riesgos por puesto de trabajo',
        'Recomendaciones de EPP según normatividad',
        'Planes de seguridad industrial',
        'Auditorías de cumplimiento'
      ],
      highlight: false
    },
    {
      icon: <GraduationCap size={48} />,
      title: 'Capacitaciones',
      description: 'Programas de formación personalizados para tu empresa en uso correcto de EPP, normativas de seguridad y procedimientos de emergencia.',
      features: [
        'Uso adecuado de equipos de protección',
        'Normativas OSHA y colombianas',
        'Procedimientos de emergencia',
        'Primeros auxilios básicos',
        'Certificación al finalizar'
      ],
      highlight: true
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Mantenimiento y Reparación',
      description: 'Servicio técnico especializado para el mantenimiento preventivo y correctivo de equipos industriales, garantizando su óptimo funcionamiento y vida útil.',
      features: [
        'Inspección y mantenimiento preventivo',
        'Reparación de equipos industriales',
        'Calibración de instrumentos',
        'Reemplazo de componentes'
      ],
      highlight: false
    },
    {
      icon: <Award size={48} />,
      title: 'Certificaciones',
      description: 'Gestión y emisión de certificados de uso adecuado de productos, verificación de cumplimiento normativo y validación de competencias laborales en seguridad.',
      features: [
        'Certificados de uso adecuado',
        'Verificación de cumplimiento',
        'Validación de competencias',
        'Documentación para auditorías'
      ],
      highlight: false
    }
  ]

  return (
    <main>
      <section className="hero" style={{
        backgroundImage: 'url(/assets/hero_services.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(52, 58, 64, 0.5)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ 
          position: 'relative',
          zIndex: 2
        }}>
          <div className="text-center">
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.325rem)', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: 'var(--color-white)',
              lineHeight: '1.1',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Servicios Técnicos <span style={{ color: 'var(--color-primary)' }}>Especializados</span>
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem', 
              color: 'var(--color-white)',
              opacity: 0.95,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Capacitación · Asesoría · Mantenimiento · Certificación
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <a 
                href="https://wa.me/573212461567" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Soluciones Integrales en Seguridad</h2>
            <p style={{ color: 'var(--color-gray-medium)', maxWidth: '600px', margin: '0 auto' }}>
              Ofrecemos un portafolio completo de servicios técnicos para respaldar tu inversión en equipos de protección personal y garantizar la seguridad de tu equipo de trabajo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={{
                  background: 'var(--color-white)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: service.highlight 
                    ? '0 8px 30px rgba(57, 67, 183, 0.2)'
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: service.highlight 
                    ? '2px solid var(--color-primary)'
                    : '1px solid rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  color: 'var(--color-primary)', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  textAlign: 'center', 
                  marginBottom: '1rem',
                  fontSize: '1.4rem'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  color: 'var(--color-gray-medium)'
                }}>
                  {service.description}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  margin: '0 0 1.5rem 0'
                }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ 
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--color-gray-dark)'
                    }}>
                      <CheckCircle size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{ textAlign: 'center' }}>
                  <a 
                    href={`/servicios/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    style={{
                      color: 'var(--color-primary)',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Solicitar Servicio →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-light)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                ¿Por qué elegir nuestros servicios?
              </h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Contamos con un equipo técnico altamente capacitado y con amplia experiencia en el sector industrial, respaldados por años de trayectoria y la confianza de empresas líderes en la región.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Asesores técnicos certificados',
                  'Cobertura en toda la Costa Caribe',
                  'Respuesta rápida a emergencias',
                  'Precios competitivos',
                  'Seguimiento personalizado'
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'var(--color-white)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                Solicita tu cotización
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="https://wa.me/573212461567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    background: '#25D366',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp: 321 246 1567
                </a>
                <a 
                  href="mailto:constructoramiracor@gmail.com"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  <Mail size={20} />
                  constructoramiracor@gmail.com
                </a>
                <a 
                  href="tel:+573212461567"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    background: 'var(--color-gray-light)',
                    color: 'var(--color-text)',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  <Phone size={20} />
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'var(--color-primary)',
        color: 'var(--color-white)',
        textAlign: 'center',
        padding: '80px 0'
      }}>
        <div className="container">
          <h2 style={{ 
            color: 'var(--color-white)', 
            marginBottom: '1rem'
          }}>
            ¿Listo para mejorar la seguridad de tu empresa?
          </h2>
          <p style={{ 
            marginBottom: '2rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Contáctanos hoy y recibe una asesoría personalizada sin compromiso.
          </p>
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .grid.grid-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Services
