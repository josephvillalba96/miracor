import { CheckCircle, Users, Shield, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  const features = [
    {
      id: 1,
      title: 'Experiencia Comprobada',
      icon: <Award size={20} />
    },
    {
      id: 2,
      title: 'Equipo Profesional',
      icon: <Users size={20} />
    },
    {
      id: 3,
      title: 'Calidad Garantizada',
      icon: <Shield size={20} />
    }
  ]

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Left Column - Images */}
          <div className="about-images">
            <div className="image-stack">
              <div className="image-main">
                <img 
                  src="/assets/porque_nosotros_1.jpg" 
                  alt="Trabajador con equipos de protección personal completo en obra industrial" 
                  className="main-image"
                />
              </div>
              <div className="image-overlay">
                <img 
                  src="/assets/about_1.png" 
                  alt="Equipos de protección personal: cascos, guantes, gafas de seguridad" 
                  className="overlay-image"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-text">
            <div className="about-subtitle">
              <div className="about-line"></div>
              <span>¿Por qué elegirnos?</span>
            </div>
            
            <h2 className="about-title">
              Hacemos realidad tus <span className="about-highlight">proyectos de construcción</span>
            </h2>
            
            <p className="about-description">
              Con más de 10 años de experiencia en el sector de la construcción industrial, 
              nos especializamos en entregar proyectos de la más alta calidad que superan 
              las expectativas de nuestros clientes. Nuestro compromiso es brindar soluciones 
              integrales de construcción, equipos de protección personal y asesoría técnica 
              especializada.
            </p>

            <ul className="about-features">
              {features.map((feature) => (
                <li key={feature.id} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <span className="feature-text">{feature.title}</span>
                </li>
              ))}
            </ul>

            <Link to="/nosotros" className="about-btn">
              Conoce Más
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-images {
          position: relative;
        }

        .image-stack {
          position: relative;
          height: 500px;
        }

        .image-main {
          position: absolute;
          top: 0;
          right: -20px;
          width: 70%;
          height: 80%;
          z-index: 2;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60%;
          height: 60%;
          z-index: 1;
        }

        .overlay-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .about-text {
          padding-left: 2rem;
        }

        .about-subtitle {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .about-line {
          width: 60px;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .about-subtitle span {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-title {
          font-size: 2.375rem;
          font-weight: 700;
          line-height: 1.0;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .about-highlight {
          color: var(--color-primary);
        }

        .about-description {
          font-size: 1.1rem;
          line-height: 1.3;
          color: var(--color-gray-medium);
          margin-bottom: 2rem;
        }

        .about-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: var(--color-gray-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .about-btn {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          padding: 12px 30px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          text-decoration: none;
          display: inline-block;
        }

        .about-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(57, 67, 183, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-text {
            padding-left: 0;
            text-align: center;
          }

          .about-title {
            font-size: 2.09rem;
          }

          .image-stack {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .image-stack {
            height: 350px;
          }

          .image-main {
            width: 75%;
            height: 75%;
          }

          .image-overlay {
            width: 65%;
            height: 65%;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 50px 0;
          }

          .about-title {
            font-size: 1.71rem;
          }

          .about-description {
            font-size: 0.95rem;
          }

          .image-stack {
            height: 300px;
          }

          .feature-item {
            gap: 0.8rem;
          }

          .feature-icon {
            width: 35px;
            height: 35px;
          }

          .feature-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection
