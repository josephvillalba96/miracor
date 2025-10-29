import { Award, Building, Wrench } from 'lucide-react'

const WhoWeAre = () => {
  const stats = [
    {
      id: 1,
      number: '10+',
      label: 'Años de Experiencia',
      icon: <Award size={24} />
    },
    {
      id: 2,
      number: '500+',
      label: 'Proyectos Completados',
      icon: <Building size={24} />
    },
    {
      id: 3,
      number: '100%',
      label: 'Equipos Certificados',
      icon: <Wrench size={24} />
    }
  ]

  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="who-we-are-content">
          {/* Left Column - Text and Stats */}
          <div className="who-we-are-text">
            <div className="who-we-are-subtitle">
              <div className="who-we-are-line"></div>
              <span>Quiénes Somos</span>
            </div>
            
            <h2 className="who-we-are-title">
              Experimenta la diferencia de nuestra 
              <span className="who-we-are-highlight"> artesanía</span>
            </h2>
            
            <p className="who-we-are-description">
              En MIRACOR S.A.S., somos líderes en el sector de la construcción industrial y 
              equipos de protección personal en la Costa Caribe colombiana. Nuestra 
              pasión por la excelencia y el compromiso con la seguridad nos han 
              convertido en el socio confiable de empresas que buscan soluciones 
              integrales de construcción.
            </p>

            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="who-we-are-images">
            <div className="image-collage">
              <div className="image-main">
                <img 
                  src="/assets/quienes_somos_1.jpg" 
                  alt="Equipo de MIRACOR trabajando en construcción industrial" 
                  className="main-image"
                />
              </div>
              <div className="image-overlay">
                <img 
                  src="/assets/quienes_somos_2.jpg" 
                  alt="Instalaciones industriales de MIRACOR S.A.S." 
                  className="overlay-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .who-we-are-section {
          background: #ffffff;
          color: var(--color-text);
          padding: 100px 0;
          position: relative;
        }

        .who-we-are-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .who-we-are-text {
          padding-right: 2rem;
        }

        .who-we-are-subtitle {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .who-we-are-line {
          width: 60px;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .who-we-are-subtitle span {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .who-we-are-title {
          font-size: 2.375rem;
          font-weight: 700;
          line-height: 1.0;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .who-we-are-highlight {
          color: var(--color-primary);
        }

        .who-we-are-description {
          font-size: 1.1rem;
          line-height: 1.3;
          color: var(--color-gray-medium);
          margin-bottom: 2.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          background: var(--color-gray-light);
          padding: 1.5rem;
          border-radius: 12px;
          border-bottom: 2px solid var(--color-gray-medium);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: #f0f0f0;
          box-shadow: 0 8px 25px rgba(57, 67, 183, 0.15);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(57, 67, 183, 0.3);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--color-gray-medium);
          font-weight: 500;
        }

        .who-we-are-images {
          position: relative;
        }

        .image-collage {
          position: relative;
          height: 500px;
        }

        .image-main {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 80%;
          z-index: 2;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: -80px;
          width: 75%;
          height: 70%;
          z-index: 1;
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
        }

        .overlay-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .who-we-are-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .who-we-are-text {
            padding-right: 0;
            text-align: center;
          }

          .who-we-are-title {
            font-size: 2.09rem;
          }

          .image-collage {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .who-we-are-section {
            padding: 80px 0;
          }

          .who-we-are-title {
            font-size: 2rem;
          }

          .who-we-are-description {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .image-collage {
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .who-we-are-section {
            padding: 60px 0;
          }

          .who-we-are-title {
            font-size: 1.71rem;
          }

          .who-we-are-description {
            font-size: 0.95rem;
          }

          .stat-card {
            padding: 1.25rem;
          }

          .stat-icon {
            width: 45px;
            height: 45px;
          }

          .stat-number {
            font-size: 1.71rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }

          .image-collage {
            height: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default WhoWeAre
