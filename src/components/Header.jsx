import { Link, useLocation } from 'react-router-dom'
import { headerData } from '../data/constants'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [location])

  const topSection = headerData.find(section => section.type === 'top')
  const bottomSection = headerData.find(section => section.type === 'bottom')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header-wrap style1">
      {/* Top Header */}
      {topSection && (
        <div className="header-top">
          <button type="button" className="close-sidebar" onClick={closeMobileMenu}>
            <i className="ri-close-fill"></i>
          </button>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="header-top-left">
                  <ul className="contact-info list-style">
                    {topSection.contactInfo.map((info, index) => (
                      <li key={index}>
                        <i className={info.icon}></i>{' '}
                        <a href={info.link}>{info.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="header-top-right">
                  <ul className="header-top-menu list-style">
                    {topSection.menu.map((menuItem, index) => (
                      <li key={index}>
                        <Link to={menuItem.link}>{menuItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="select-lang">
                    <i className="ri-global-line"></i>
                    <div className="navbar-option-item navbar-language dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name">{topSection.language.name}</span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        {topSection.language.options.map((option, index) => (
                          <a key={index} className="dropdown-item" href={option.link}>
                            <img src={option.flag} alt="flag" /> {option.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Header */}
      {bottomSection && (
        <div className="header-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to={bottomSection.brand.link}>
                <span
                  className="logo-light"
                  style={{
                    color: bottomSection.brand.lightColor,
                    fontFamily: `${bottomSection.brand.font}, cursive`,
                    fontSize: bottomSection.brand.size,
                  }}
                >
                  {bottomSection.brand.lightText}
                </span>
                <span
                  className="logo-dark"
                  style={{
                    color: bottomSection.brand.darkColor,
                    fontFamily: `${bottomSection.brand.font}, cursive`,
                    fontSize: bottomSection.brand.size,
                  }}
                >
                  {bottomSection.brand.darkText}
                </span>
              </Link>

              <div
                className={`collapse navbar-collapse main-menu-wrap ${isMobileMenuOpen ? 'show' : ''}`}
                id="navbarSupportedContent"
              >
                <div className="menu-close xl-none">
                  <a href="javascript:void(0)" onClick={closeMobileMenu}>
                    <i className="ri-close-line"></i>
                  </a>
                </div>

                <ul className="navbar-nav ms-auto">
                  {bottomSection.navItems.map((item, index) => {
                    const isActive = location.pathname === item.link || 
                                    (item.link === '/' && location.pathname === '/') ||
                                    (item.link !== '/' && location.pathname.startsWith(item.link))
                    return (
                      <li
                        key={index}
                        className={`nav-item ${item.parentClass || ''} ${item.hasDropdown ? 'has-dropdown' : ''}`}
                      >
                        <Link
                          to={item.link}
                          className={`nav-link ${isActive ? 'active' : ''} ${item.extraClass || ''}`}
                        >
                          {item.text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <div className="others-options lg-none">
                  <div className="header-btn lg-none m-lg-3">
                    <Link to={bottomSection.hireMe.link} className="btn style1">
                      {bottomSection.hireMe.text}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Bar */}
              <div className="mobile-bar-wrap">
                <div className="mobile-sidebar" onClick={toggleMobileMenu}>
                  <i className="ri-menu-4-line"></i>
                </div>
                <div className="mobile-menu xl-none ms-2">
                  <a href="javascript:void(0)" onClick={toggleMobileMenu}>
                    <i className="ri-menu-line"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
