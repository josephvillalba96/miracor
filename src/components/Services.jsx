import { Building, HardHat, Wrench, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Construcción Industrial',
      description: 'Proyectos de construcción y mantenimiento industrial con los más altos estándares de calidad y seguridad.',
      icon: <Building size={24} />,
      image: '/assets/services/planta_aditivos.webp'
    },
    {
      id: 2,
      title: 'Equipos de Protección',
      description: 'Suministro de EPP certificados para garantizar la seguridad de los trabajadores en todas las obras.',
      icon: <HardHat size={24} />,
      image: '/assets/services/chaleco_reflectivo.jpg'
    },
    {
      id: 3,
      title: 'Proyectos Comerciales',
      description: 'Desarrollo de proyectos comerciales e industriales con tecnología de vanguardia y materiales premium.',
      icon: <Wrench size={24} />,
      image: '/assets/services/centros_comerciales.jpg'
    },
    {
      id: 4,
      title: 'Asesoría en Seguridad',
      description: 'Consultoría especializada en seguridad industrial y diseño de protocolos de protección laboral.',
      icon: <Shield size={24} />,
      image: '/assets/services/supervision_tecnica_2.jpg'
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-content">
          {/* Left Column - Description */}
          <div className="services-description">
            <div className="services-subtitle">
              <div className="services-line"></div>
              <span>Servicios</span>
            </div>
            <h2 className="services-title">
              Artesanía Excepcional, Experiencia: 
              <span className="services-highlight"> Experiencia Inigualable</span>: Nuestra Promesa Para Ti
            </h2>
            <div className="services-text">
              <p>
                Con más de 10 años de experiencia en el sector de la construcción industrial, 
                nos especializamos en entregar proyectos de la más alta calidad que superan 
                las expectativas de nuestros clientes.
              </p>
              <p>
                Nuestro compromiso es brindar soluciones integrales de construcción, 
                equipos de protección personal y asesoría técnica especializada, 
                garantizando la seguridad y eficiencia en cada proyecto.
              </p>
            </div>
            <button className="services-btn">
              Conoce Más
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column - Service Cards */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #ffffff;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="c" cx="50%" cy="50%"><stop offset="0%" stop-color="%233943b7" stop-opacity="0.1"/><stop offset="100%" stop-color="%233943b7" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="300" fill="url(%23c)"/><circle cx="800" cy="300" r="200" fill="url(%23c)"/><circle cx="400" cy="700" r="250" fill="url(%23c)"/></svg>');
          opacity: 0.3;
          z-index: 1;
        }

        .services-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .services-description {
          padding-right: 1.5rem;
        }

        .services-subtitle {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 0.8rem;
        }

        .services-line {
          width: 50px;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .services-subtitle span {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .services-title {
          font-size: 2.09rem;
          font-weight: 700;
          line-height: 1.0;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .services-highlight {
          color: var(--color-primary);
        }

        .services-text {
          margin-bottom: 2rem;
        }

        .services-text p {
          font-size: 1rem;
          line-height: 1.3;
          color: #e0e0e0;
          margin-bottom: 1.2rem;
        }

        .services-btn {
          background: #333333;
          color: #ffffff;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .services-btn:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(57, 67, 183, 0.3);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: #2a2a2a;
          border-radius: 10px;
          border: 1px solid #3a3a3a;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 280px;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          background: #333333;
          border-color: var(--color-primary);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 2;
        }

        .service-content {
          position: relative;
          z-index: 3;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .service-icon {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(57, 67, 183, 0.3);
        }

        .service-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.8rem;
          line-height: 1.0;
        }

        .service-description {
          font-size: 0.9rem;
          line-height: 1.3;
          color: #b0b0b0;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .services-description {
            padding-right: 0;
            text-align: center;
          }

          .services-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 60px 0;
          }

          .services-title {
            font-size: 1.71rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            height: 250px;
          }

          .service-content {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 50px 0;
          }

          .services-title {
            font-size: 1.52rem;
          }

          .services-text p {
            font-size: 0.95rem;
          }

          .service-card {
            height: 220px;
          }

          .service-content {
            padding: 1rem;
          }

          .service-icon {
            width: 45px;
            height: 45px;
          }

          .service-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
