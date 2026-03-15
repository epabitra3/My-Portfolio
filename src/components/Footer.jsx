import { Link } from 'react-router-dom'
import { footerData, mobileNo, email_ } from '../data/constants'

const Footer = () => {
  return (
    <footer className="footer-wrap bg-rock">
      <div className="container">
        <div className="row pt-100 pb-75">
          {footerData.map((section, index) => (
            <div
              key={index}
              className={
                section.type === 'logo'
                  ? 'col-xl-4 col-lg-4 col-md-6 col-sm-6'
                  : section.type === 'skills'
                  ? 'col-xl-3 col-lg-3 col-md-6 col-sm-6'
                  : section.type === 'links'
                  ? 'col-xl-2 col-lg-2 col-md-6 col-sm-6'
                  : 'col-xl-3 col-lg-3 col-md-6 col-sm-6'
              }
            >
              <div className="footer-widget">
                {section.type === 'logo' && (
                  <>
                    <Link to="/" className="footer-logo">
                      <span
                        className="logo-dark"
                        style={{
                          color: 'white',
                          fontFamily: "'Calistoga', cursive",
                          fontSize: '9vh',
                        }}
                      >
                        {section.logoName}
                      </span>
                    </Link>
                    <p className="comp-desc">{section.description}</p>
                    <div className="social-link">
                      <ul className="social-profile list-style style1">
                        {section.socialLinks.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.link} target="_blank" rel="noopener noreferrer">
                              <i className={link.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {section.type === 'skills' && (
                  <>
                    <h3 className="footer-widget-title">{section.title}</h3>
                    <ul className="footer-menu list-style">
                      {section.skills.map((skill, idx) => (
                        <li key={idx}>
                          <p className="my--menu">
                            <i className="flaticon-next my--icon"></i>
                            {skill}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {section.type === 'links' && (
                  <>
                    <h3 className="footer-widget-title">{section.title}</h3>
                    <ul className="footer-menu list-style">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <Link to={link.href}>
                            <i className="flaticon-next"></i>
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {section.type === 'address' && (
                  <>
                    <h3 className="footer-widget-title">{section.title}</h3>
                    <p className="newsletter-text">{section.address}</p>
                    <ul className="contact-info list-style">
                      <li>
                        <i className="flaticon-call"></i>
                        <span className="mobile_no">(+91) {section.contact.phone}</span>
                      </li>
                      <li>
                        <i className="flaticon-email-1"></i>
                        <span className="email_id">{section.contact.email}</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
