import { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { latestProjects } from '../data/constants'
import { initializeAOS } from '../utils/loadScripts'
import { img } from '../utils/assets'

const Projects = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAOS()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

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
          <div className="row justify-content-center" id="blogCardsContainer">
            {latestProjects.map((project, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <div className="blog-card style1">
                  {project.imageURL && (
                    <div className="blog-img">
                      <img src={img(project.imageURL)} alt={project.projName} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    </div>
                  )}
                  <div className="blog-info">
                    <h3>
                      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                        {project.projName}
                      </a>
                    </h3>
                    <p>
                      <b>{project.projType}</b>
                    </p>
                    <p>{project.description}</p>
                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="link style1">
                      View Project <i className="flaticon-right-arrow"></i>
                    </a>
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

export default Projects
