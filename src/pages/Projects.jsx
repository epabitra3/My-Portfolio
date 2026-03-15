import { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { allProjects } from '../data/constants'
import { initializeAOS } from '../utils/loadScripts'
import { img } from '../utils/assets'

const TABS = [
  { id: 'personal', label: 'Personal Projects' },
  { id: 'office', label: 'Office Projects' },
  { id: 'learning', label: 'Learning or Freelance' }
]

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal')

  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAOS()
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  const filteredProjects = allProjects.filter((p) => p.category === activeTab)

  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Projects"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Projects' }
        ]}
      />

      <section className="blog-wrap pt-100 pb-75 bg-albastor">
        <div className="container">
          <div className="section-title style1 text-center mb-40">
            <span>Showcasing My Creations</span>
            <h2>A Journey Through Innovation and Development</h2>
          </div>

          <ul className="nav nav-tabs justify-content-center mb-4 border-0 gap-2 flex-wrap" role="tablist">
            {TABS.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link rounded ${activeTab === tab.id ? 'active' : ''}`}
                  style={{
                    padding: '10px 20px',
                    border: '1px solid #00A9A4',
                    background: activeTab === tab.id ? '#00A9A4' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : '#00A9A4',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-5">
              <p className="mb-0" style={{ fontSize: '1.1rem', color: 'var(--body-color, #666)' }}>
                No projects in this category yet. Check back later or browse the other tabs.
              </p>
            </div>
          ) : (
            <div className="row justify-content-center" id="blogCardsContainer">
              {filteredProjects.map((project, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                  <div className="blog-card style1">
                    {project.imageURL && (
                      <div className="blog-img">
                        <img src={img(project.imageURL)} alt={project.projName} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                      </div>
                    )}
                    <div className="blog-info">
                      <h3>
                        {project.gitHubLink && project.gitHubLink !== '#' ? (
                          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                            {project.projName}
                          </a>
                        ) : (
                          <span>{project.projName}</span>
                        )}
                      </h3>
                      <p>
                        <b>{project.projType}</b>
                      </p>
                      <p>{project.description}</p>
                      {project.gitHubLink && project.gitHubLink !== '#' && (
                        <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="link style1">
                          View Project <i className="flaticon-right-arrow"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
