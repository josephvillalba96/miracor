import { Shield, Target, Lightbulb, Heart, Award, Users, Calendar, MapPin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Shield size={48} />,
      title: 'Seguridad',
      description: 'La seguridad de los trabajadores es nuestra máxima prioridad. Todos nuestros productos cumplen con los más altos estándares de calidad y certificaciones internacionales.'
    },
    {
      icon: <Target size={48} />,
      title: 'Confianza',
      description: 'Construimos relaciones sólidas basadas en la transparencia, honestidad y cumplimiento de nuestros compromisos con cada cliente.'
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovación',
      description: 'Continuamente buscamos nuevas tecnologías y soluciones para mejorar la protección y eficiencia en el trabajo industrial.'
    },
    {
      icon: <Heart size={48} />,
      title: 'Compromiso',
      description: 'Estamos comprometidos con el bienestar de nuestros clientes, trabajadores y la comunidad, promoviendo una cultura de seguridad.'
    }
  ]

  const milestones = [
    {
      year: '2014',
      title: 'Fundación de la empresa',
      description: 'Iniciamos operaciones en Barranquilla con la visión de ser líderes en seguridad industrial.'
    },
    {
      year: '2016',
      title: 'Expansión de catálogo',
      description: 'Ampliamos nuestro portafolio incluyendo equipos de protección personal especializados.'
    },
    {
      year: '2018',
      title: 'Servicios de construcción',
      description: 'Incorporamos servicios de construcción industrial y civil a nuestro portafolio.'
    },
    {
      year: '2020',
      title: 'Certificaciones de calidad',
      description: 'Obtuvimos certificaciones ISO para garantizar la calidad de nuestros productos y servicios.'
    },
    {
      year: '2022',
      title: 'Expansión regional',
      description: 'Extendimos nuestros servicios a toda la región Caribe colombiana.'
    },
    {
      year: '2024',
      title: 'Líderes del sector',
      description: 'Consolidamos nuestra posición como empresa líder en seguridad industrial en la Costa Caribe.'
    }
  ]

  const team = [
    {
      name: 'Carlos Mira',
      position: 'Gerente General',
      description: 'Ingeniero Industrial con más de 15 años de experiencia en seguridad industrial.'
    },
    {
      name: 'Ana Rodríguez',
      position: 'Directora Comercial',
      description: 'Especialista en ventas B2B con amplio conocimiento del sector construcción.'
    },
    {
      name: 'Luis Herrera',
      position: 'Jefe de Operaciones',
      description: 'Ingeniero Civil con experiencia en proyectos de construcción industrial.'
    },
    {
      name: 'María Santos',
      position: 'Asesora Técnica',
      description: 'Especialista en equipos de protección personal y normativas de seguridad.'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'url(/assets/hero_about.jpg)',
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
          <div className="text-center about-hero">
            <h1 className="about-hero" style={{ 
              fontSize: '3.325rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              color: 'var(--color-white)',
              lineHeight: '1.2',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.5px'
            }}>
              Nosotros
            </h1>
            <p className="about-hero" style={{ 
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
              Más de 10 años protegiendo vidas y construyendo el futuro de la industria en Colombia
            </p>
            <div className="about-hero-buttons" style={{ 
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
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h2>Nuestra Historia</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                MIRACOR S.A.S. nació en 2014 en Barranquilla con una visión clara: 
                ser la empresa líder en equipos de protección personal y servicios de construcción 
                industrial en la Costa Caribe colombiana.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Desde nuestros inicios, nos hemos caracterizado por ofrecer productos de la más 
                alta calidad, asesoría técnica especializada y un compromiso inquebrantable con 
                la seguridad de los trabajadores.
              </p>
              <p>
                Hoy, con más de una década de experiencia, hemos consolidado nuestra posición 
                como referente en el sector, atendiendo a empresas de todos los tamaños y 
                contribuyendo al desarrollo industrial de la región.
              </p>
            </div>
            <div style={{ 
              background: 'var(--color-gray-light)', 
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '2.375rem', 
                    fontWeight: '700', 
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    10+
                  </div>
                  <div>Años de experiencia</div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '2.375rem', 
                    fontWeight: '700', 
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    500+
                  </div>
                  <div>Clientes satisfechos</div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '2.375rem', 
                    fontWeight: '700', 
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    1000+
                  </div>
                  <div>Proyectos completados</div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '2.375rem', 
                    fontWeight: '700', 
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    24/7
                  </div>
                  <div>Soporte técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-gray-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Nuestros Valores</h2>
            <p>Los principios que guían cada una de nuestras acciones</p>
          </div>
          
          <div className="grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div style={{ 
                  color: 'var(--color-primary)', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {value.icon}
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  {value.title}
                </h3>
                <p style={{ textAlign: 'center' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Nuestra Trayectoria</h2>
            <p>Los hitos más importantes en nuestro crecimiento</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                marginBottom: '2rem',
                alignItems: 'flex-start',
                gap: '2rem'
              }}>
                <div style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600',
                  minWidth: '80px',
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  {milestone.year}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {milestone.title}
                  </h4>
                  <p style={{ margin: 0 }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team <section className="section" style={{ background: 'var(--color-gray-light)' }}>
        <div className="container">
       
          <div className="grid grid-4">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--color-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-white)',
                  fontSize: '2rem',
                  fontWeight: '600'
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>
                  {member.name}
                </h4>
                <p style={{ 
                  color: 'var(--color-primary)', 
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.position}
                </p>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
     

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            <div className="card text-center">
              <div style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <Target size={48} />
              </div>
              <h3>Misión</h3>
              <p>
                Proteger la vida y salud de los trabajadores mediante la provisión de equipos 
                de protección personal de alta calidad, servicios de construcción industrial 
                especializados y asesoría técnica profesional, contribuyendo al desarrollo 
                sostenible de la industria colombiana.
              </p>
            </div>
            
            <div className="card text-center">
              <div style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <Award size={48} />
              </div>
              <h3>Visión</h3>
              <p>
                Ser reconocidos como la empresa líder en equipos de protección personal y 
                servicios de construcción industrial en la Costa Caribe colombiana, 
                reconocidos por nuestra excelencia, innovación y compromiso con la seguridad 
                de los trabajadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            ¿Quieres conocer más <span style={{ color: 'var(--color-white)' }}>sobre nosotros</span>?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.3'
          }}>
            Contáctanos y descubre cómo podemos ayudarte a proteger a tu equipo de trabajo.
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

      <style jsx>{`
        /* About Hero Responsive */
        @media (max-width: 1024px) {
          .about-hero h1 {
            font-size: 2.8rem;
            margin-bottom: 1.2rem;
          }
          
          .about-hero p {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            max-width: 500px;
          }
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
            line-height: 1.1;
          }
          
          .about-hero p {
            font-size: 1rem;
            margin-bottom: 2rem;
            max-width: 100%;
          }
          
          .about-hero-buttons {
            justify-content: center;
            gap: 1rem;
          }
          
          .about-hero-buttons a {
            padding: 14px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </main>
  )
}

export default About
