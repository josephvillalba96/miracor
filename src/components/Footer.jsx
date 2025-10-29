import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-gray-dark)',
      color: 'var(--color-white)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
          {/* Información de la empresa */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              MIRACOR S.A.S.
            </h4>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
              Líderes en equipos de protección personal y construcción industrial 
              en Barranquilla, Colombia.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Enlaces Rápidos
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/" style={{ color: 'var(--color-white)', opacity: 0.9 }}>
                  Inicio
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/nosotros" style={{ color: 'var(--color-white)', opacity: 0.9 }}>
                  Nosotros
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/productos" style={{ color: 'var(--color-white)', opacity: 0.9 }}>
                  Productos
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/contacto" style={{ color: 'var(--color-white)', opacity: 0.9 }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                Equipos de Protección Personal
              </li>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                Ropa de Seguridad Industrial
              </li>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                Construcción Industrial
              </li>
              <li style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                Asesoría Técnica
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span style={{ opacity: 0.9, fontSize: '0.9rem' }}>
                  CR 53 # 75 - 138 OF 17, Piso 2<br />
                  Barranquilla, Colombia
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <a 
                  href="tel:+573219714991" 
                  style={{ color: 'var(--color-white)', opacity: 0.9, fontSize: '0.9rem' }}
                >
                  321 971 4991
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <a 
                  href="mailto:atencionalcliente@miracor.com.co" 
                  style={{ color: 'var(--color-white)', opacity: 0.9, fontSize: '0.9rem' }}
                >
                  atencionalcliente@miracor.com.co
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '1rem',
          textAlign: 'center',
          opacity: 0.7
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} MIRACOR S.A.S. Todos los derechos reservados.
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
            <a href="/privacidad" style={{ color: 'var(--color-white)', opacity: 0.7 }}>
              Aviso de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
