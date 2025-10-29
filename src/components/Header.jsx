import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/productos', label: 'Servicios' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo Section */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24V8L16 2L28 8V24L16 30L4 24Z" stroke="var(--color-text)" strokeWidth="2" fill="none"/>
                <path d="M4 24L16 18L28 24" stroke="var(--color-text)" strokeWidth="2" fill="none"/>
                <path d="M16 2V18" stroke="var(--color-text)" strokeWidth="2"/>
                <path d="M8 12L16 8L24 12" stroke="var(--color-text)" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-main">MIRACOR</span>
              <span className="logo-accent">S.A.S.</span>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </Link>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .header {
          background: var(--color-white);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(57, 67, 183, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-text));
          border-radius: 8px;
          color: var(--color-white);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-main {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.5px;
        }

        .logo-accent {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          letter-spacing: 1px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 0;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-primary);
          border-radius: 1px;
        }


        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--color-gray-light);
          color: var(--color-primary);
        }

        .nav-open {
          display: flex !important;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--color-white);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          gap: 1.5rem;
          border-radius: 0 0 12px 12px;
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }

          .logo-text {
            display: none;
          }

          .logo-icon {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
