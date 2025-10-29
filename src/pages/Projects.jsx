import { useState } from 'react'
import { Building, HardHat, ArrowRight, Factory, Construction, Zap } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const projects = [
    {
      id: 1,
      title: 'Planta Industrial Petroquímica',
      image: "https://images.unsplash.com/photo-1581091870633-1e7abcb35c1b?auto=format&fit=crop&w=1200&q=80",
      category: 'Industrial',
      description: 'Suministro completo de EPP para planta petroquímica con 500+ trabajadores. Cascos clase A, guantes resistentes a químicos, trajes de protección y calzado antideslizante.',
      year: '2024',
      client: 'Petrobras Colombia',
      location: 'Cartagena, Colombia'
    },
    {
      id: 2,
      title: 'Construcción Centro Comercial',
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      category: 'Construcción',
      description: 'Equipos de protección para construcción de centro comercial de 15,000 m². Cascos de seguridad, arneses, guantes de construcción y calzado de seguridad.',
      year: '2024',
      client: 'Constructora del Caribe',
      location: 'Barranquilla, Colombia'
    },
    {
      id: 3,
      title: 'Minería de Carbón',
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
      category: 'Minería',
      description: 'EPP especializado para minería subterránea. Cascos con lámpara integrada, respiradores, guantes resistentes a cortes y calzado con puntera de acero.',
      year: '2023',
      client: 'Carbones del Cerrejón',
      location: 'La Guajira, Colombia'
    },
    {
      id: 4,
      title: 'Refinería de Azúcar',
      image: "https://images.unsplash.com/photo-1581091870633-1e7abcb35c1b?auto=format&fit=crop&w=1200&q=80",
      category: 'Industrial',
      description: 'Protección personal para refinería con altas temperaturas. Trajes ignífugos, cascos con visera, guantes resistentes al calor y calzado antideslizante.',
      year: '2023',
      client: 'Manuelita S.A.',
      location: 'Cali, Colombia'
    },
    {
      id: 5,
      title: 'Aeropuerto Internacional',
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      category: 'Construcción',
      description: 'EPP para construcción de terminal aéreo. Cascos de alta visibilidad, chalecos reflectivos, guantes de trabajo y calzado de seguridad certificado.',
      year: '2023',
      client: 'Aeropuertos del Caribe',
      location: 'Barranquilla, Colombia'
    },
    {
      id: 6,
      title: 'Planta de Energía Solar',
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
      category: 'Energía',
      description: 'Equipos de protección para instalación de paneles solares. Cascos con protección UV, guantes dieléctricos, gafas de seguridad y calzado aislante.',
      year: '2024',
      client: 'Enel Green Power',
      location: 'Cesar, Colombia'
    },
    {
      id: 7,
      title: 'Puerto Marítimo',
      image: "https://images.unsplash.com/photo-1581091870633-1e7abcb35c1b?auto=format&fit=crop&w=1200&q=80",
      category: 'Construcción',
      description: 'EPP para operaciones portuarias. Cascos de seguridad, chalecos de alta visibilidad, guantes de manipulación y calzado antideslizante para muelles.',
      year: '2024',
      client: 'Sociedad Portuaria de Barranquilla',
      location: 'Barranquilla, Colombia'
    },
    {
      id: 8,
      title: 'Hospital de Alta Complejidad',
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      category: 'Construcción',
      description: 'Equipos de protección para construcción hospitalaria. Cascos sanitarios, guantes estériles, mascarillas N95 y calzado desinfectable.',
      year: '2023',
      client: 'Hospital Universitario',
      location: 'Bogotá, Colombia'
    },
    {
      id: 9,
      title: 'Planta de Cemento',
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
      category: 'Industrial',
      description: 'EPP para industria cementera. Cascos con protección auditiva, respiradores para polvo, guantes resistentes a abrasión y calzado de seguridad.',
      year: '2023',
      client: 'Cementos Argos',
      location: 'Antioquia, Colombia'
    }
  ]

  const categories = ['Todos', 'Industrial', 'Construcción', 'Minería', 'Energía']

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Industrial':
        return <Factory size={20} />
      case 'Construcción':
        return <Construction size={20} />
      case 'Minería':
        return <HardHat size={20} />
      case 'Energía':
        return <Zap size={20} />
      default:
        return <Building size={20} />
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="projects-hero" style={{
        backgroundImage: 'url(/assets/hero_services.jpg)',
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
          background: 'rgba(52, 58, 64, 0.6)',
          zIndex: 1
        }}></div>
        <div className="container">
          <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <h1>Nuestros Proyectos de EPP</h1>
            <p>Descubre cómo hemos protegido a miles de trabajadores en proyectos de gran envergadura en Colombia</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-category">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                    <div className="project-year">{project.year}</div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <div className="project-client">
                      <strong>Cliente:</strong> {project.client}
                    </div>
                    <div className="project-location">
                      <strong>Ubicación:</strong> {project.location}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <button className="project-btn">
                      Ver Detalles
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <HardHat size={48} />
              <h3>No hay proyectos en esta categoría</h3>
              <p>Prueba seleccionando otra categoría para ver más proyectos.</p>
            </div>
          )}
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
            ¿Listo para <span style={{ color: 'var(--color-white)' }}>tu próximo proyecto</span>?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.3'
          }}>
            Contáctanos y hagamos realidad tu proyecto con la calidad y profesionalismo que nos caracteriza.
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
        .projects-hero {
          color: var(--color-white);
          padding: 100px 0;
          text-align: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.325rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .projects-section {
          padding: 100px 0;
          background: var(--color-gray-light);
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border: 2px solid var(--color-primary);
          background: transparent;
          color: var(--color-primary);
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--color-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .project-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(9, 12, 2, 0.85);
          color: var(--color-white);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-category {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-year {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .project-meta {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--color-gray-medium);
        }

        .project-client,
        .project-location {
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--color-gray-medium);
          line-height: 1.4;
          margin-bottom: 1.5rem;
        }

        .project-actions {
          display: flex;
          justify-content: flex-end;
        }

        .project-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 10px 20px;
          background: var(--color-primary);
          color: var(--color-white);
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-btn:hover {
          background: var(--color-text);
          transform: translateY(-2px);
        }

        .no-projects {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--color-gray-medium);
        }

        .no-projects h3 {
          font-size: 1.5rem;
          margin: 1rem 0;
          color: var(--color-text);
        }

        .no-projects p {
          font-size: 1rem;
          margin-bottom: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.4rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .filter-buttons {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .filter-btn {
            padding: 8px 12px;
            font-size: 0.85rem;
          }

          .project-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </main>
  )
}

export default Projects