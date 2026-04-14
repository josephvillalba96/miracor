import { Link } from 'react-router-dom'
import { Building2, Warehouse, Users, Home as HomeIcon, Building, CheckCircle } from 'lucide-react'

const Construction = () => {
  const projectTypes = [
    {
      icon: <Warehouse size={48} />,
      title: 'Bodegas Industriales',
      description: 'Construcción de estructuras para almacenamiento y logística industrial. Soluciones personalizadas para zonas francas, parques industriales y centros de distribución.',
      features: [
        'Estructuras metálicas y prefabricadas',
        'Diseño según necesidades operativas',
        'Cumplimiento de normas sismorresistentes',
        'Acabados industriales de alta durabilidad'
      ],
      image: '/assets/services/planta_aditivos.webp'
    },
    {
      icon: <Users size={48} />,
      title: 'Escenarios Deportivos',
      description: 'Construcción de instalaciones deportivas cubiertas y abiertas. Coliseos, canchas múltiples, pistas atléticas y espacios para actividad física.',
      features: [
        'Canchas techadas y abiertas',
        'Instalaciones para múltiples deportes',
        'Iluminación y graderías',
        'Materiales de alto tráfico'
      ],
      image: '/assets/services/edificio_nacional.jpg'
    },
    {
      icon: <Building2 size={48} />,
      title: 'Aulas Escolares',
      description: 'Construcción de espacios educativos modulares y tradicionales. Aulas, laboratorios, auditorios y zonas comunes para instituciones educativas.',
      features: [
        'Diseño pedagógico funcional',
        'Ventilación e iluminación natural',
        'Materiales seguros y duraderos',
        'Cumplimiento de normas educativas'
      ],
      image: '/assets/services/supervision_tecnica_2.jpg'
    },
    {
      icon: <HomeIcon size={48} />,
      title: 'Vivienda Multifamiliar',
      description: 'Desarrollo de proyectos residenciales desde 5 unidades de vivienda. Conjuntos residenciales con áreas comunes y diseño contemporáneo.',
      features: [
        'Diseño arquitectónico moderno',
        'Espacios comunes optimizados',
        'Eficiencia energética',
        'Acabados de primera calidad'
      ],
      image: '/assets/services/centros_comerciales.jpg'
    },
    {
      icon: <Building size={48} />,
      title: 'Edificios Residenciales',
      description: 'Construcción de torres de apartamento desde 5 pisos. Desarrollo vertical con estándares de construcción superiores y amenidades.',
      features: [
        'Estructura sismorresistente',
        'Diseño de fachadas contemporáneas',
        'Áreas sociales completas',
        'Parqueaderos subterráneos'
      ],
      image: '/assets/services/edificio_nacional.jpg'
    }
  ]

  const stats = [
    { number: '10+', label: 'Años de experiencia' },
    { number: '50+', label: 'Proyectos completados' },
    { number: '15.000m²', label: 'Construidos' },
    { number: '100%', label: 'Clientes satisfechos' }
  ]

  return (
    <main>
      <section className="hero" style={{
        backgroundImage: 'url(/assets/Hero.jpg)',
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
              División de <span style={{ color: 'var(--color-primary)' }}>Construcción</span>
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
              Construimos sueños y espacios que transforman comunidades. 
              Bodegas, escenarios deportivos, aulas escolares, vivienda multifamiliar y edificios residenciales.
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

      <section className="section" style={{ background: 'var(--color-gray-light)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: 'var(--color-white)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--color-gray-medium)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Tipos de Proyectos</h2>
            <p style={{ color: 'var(--color-gray-medium)', maxWidth: '600px', margin: '0 auto' }}>
              Ofrecemos soluciones de construcción versátiles adaptadas a las necesidades de cada cliente y sector.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projectTypes.map((project, index) => (
              <div 
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '2rem',
                  background: 'var(--color-white)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  direction: index % 2 === 0 ? 'ltr' : 'rtl'
                }}
              >
                <div style={{
                  background: `url(${project.image}) center/cover no-repeat`,
                  minHeight: '300px',
                  direction: 'ltr'
                }}></div>
                <div style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  direction: 'ltr'
                }}>
                  <div style={{ 
                    color: 'var(--color-primary)', 
                    marginBottom: '1rem'
                  }}>
                    {project.icon}
                  </div>
                  <h3 style={{ 
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    marginBottom: '1.5rem',
                    color: 'var(--color-gray-medium)'
                  }}>
                    {project.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.95rem'
                      }}>
                        <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/573212461567?text=Hola, me interesa el servicio de ${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      background: 'var(--color-primary)',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      alignSelf: 'flex-start'
                    }}
                  >
                    Solicitar Cotización →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ 
              color: 'var(--color-white)', 
              marginBottom: '1rem'
            }}>
              ¿Tienes un proyecto en mente?
            </h2>
            <p style={{ 
              marginBottom: '2rem', 
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Contáctanos y recibe una asesoría personalizada para tu proyecto de construcción.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Cotizar por WhatsApp
              </a>
              <Link 
                to="/contacto"
                style={{ 
                  background: 'transparent', 
                  color: 'var(--color-white)',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: '2px solid var(--color-white)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section.section div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          section.section div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Construction
