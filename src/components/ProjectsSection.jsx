import { ArrowRight } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Planta Industrial Petroquímica',
      image: '/assets/planta_industrial_project_2.jpg',
      category: 'Industrial'
    },
    {
      id: 2,
      title: 'Construcción Centro Comercial',
      image: '/assets/centro_comercial_project_3.jpg',
      category: 'Construcción'
    },
    {
      id: 3,
      title: 'Minería de Carbón',
      image: '/assets/mineria_de_carbon_project_1.jpg',
      category: 'Minería'
    },
    {
      id: 4,
      title: 'Refinería de Sal',
      image: '/assets/refineria_sal_project_4.jpg',
      category: 'Industrial'
    }
  ]

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-content">
          {/* Left Column - Text Content */}
          <div className="projects-text">
            <div className="projects-subtitle">
              <div className="projects-line"></div>
              <span>Proyectos</span>
            </div>
            
            <h2 className="projects-title">
              Nuestra 
              <span className="projects-highlight"> artesanía impecable</span> en cada proyecto
            </h2>
            
            <p className="projects-description">
              Con más de 10 años de experiencia en el sector de la construcción industrial, 
              hemos completado cientos de proyectos exitosos que demuestran nuestro compromiso 
              con la excelencia y la innovación. Cada proyecto es una oportunidad para superar 
              las expectativas y crear espacios que inspiran.
            </p>
          </div>

          {/* Right Column - Project Grid */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="projects-cta">
          <button className="view-all-btn">
            Ver Todos
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #ffffff;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="d" cx="50%" cy="50%"><stop offset="0%" stop-color="%233943b7" stop-opacity="0.1"/><stop offset="100%" stop-color="%233943b7" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="300" fill="url(%23d)"/><circle cx="800" cy="300" r="200" fill="url(%23d)"/><circle cx="400" cy="700" r="250" fill="url(%23d)"/></svg>');
          opacity: 0.3;
          z-index: 1;
        }

        .projects-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
          position: relative;
          z-index: 2;
          margin-bottom: 3rem;
        }

        .projects-text {
          padding-right: 2rem;
        }

        .projects-subtitle {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .projects-line {
          width: 60px;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .projects-subtitle span {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .projects-title {
          font-size: 2.09rem;
          font-weight: 700;
          line-height: 1.0;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .projects-highlight {
          color: var(--color-primary);
        }

        .projects-description {
          font-size: 1rem;
          line-height: 1.3;
          color: #e0e0e0;
          margin: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1rem;
          justify-items: center;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .project-card {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 100%;
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
          background: linear-gradient(135deg, rgba(57, 67, 183, 0.8) 0%, rgba(45, 51, 153, 0.9) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-info {
          color: #ffffff;
        }

        .project-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          line-height: 1.0;
        }

        .project-category {
          font-size: 0.8rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .projects-cta {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .view-all-btn {
          background: #ffffff;
          color: var(--color-text);
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .view-all-btn:hover {
          background: var(--color-primary);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(57, 67, 183, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .projects-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .projects-text {
            padding-right: 0;
            text-align: center;
          }

          .projects-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 0;
          }

          .projects-title {
            font-size: 1.71rem;
          }

          .projects-description {
            font-size: 0.95rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 60px 0;
          }

          .projects-title {
            font-size: 1.52rem;
          }

          .projects-description {
            font-size: 0.9rem;
          }

          .projects-grid {
            gap: 0.6rem;
          }

          .project-overlay {
            padding: 0.8rem;
          }

          .project-title {
            font-size: 0.8rem;
          }

          .project-category {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection
