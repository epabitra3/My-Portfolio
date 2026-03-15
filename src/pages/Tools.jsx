import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { toolsData } from '../data/constants'
import { initializeAOS } from '../utils/loadScripts'
import './Tools.css'

const Tools = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAOS()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="My Tools"
        items={[
          { text: 'Home', link: '/' },
          { text: 'My Tools' }
        ]}
      />

      <section className="blog-wrap pt-100 pb-75 bg-albastor">
        <div className="container">
          <div className="section-title style1 text-center mb-40">
            <span>Useful Tools & Utilities</span>
            <h2>Tools I've Created</h2>
            <p>Explore the tools and utilities I've built to make life easier</p>
          </div>
          <div className="row justify-content-center" id="toolsContainer">
            {toolsData.map((tool, index) => (
              <div key={tool.id} className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <div className="blog-card style1 tool-card">
                  <div className="blog-info">
                    <div className="text-center">
                      <div className={`tool-icon ${tool.icon && tool.icon.includes('linkedin') ? 'tool-icon-linkedin' : ''}`}>
                        <i className={tool.icon}></i>
                      </div>
                      {tool.badge && <span className="tool-badge">{tool.badge}</span>}
                    </div>
                    <h3>
                      <Link to={tool.link}>{tool.title}</Link>
                    </h3>
                    <p>{tool.description}</p>
                    {tool.features && tool.features.length > 0 && (
                      <ul className="list-style" style={{ marginBottom: '20px' }}>
                        {tool.features.map((feature, idx) => (
                          <li key={idx} style={{ marginBottom: '8px' }}>
                            <i className="ri-check-line" style={{ color: '#0077b5' }}></i> {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to={tool.link} className="link style1">
                      Use Tool <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tools
