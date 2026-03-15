import { useEffect } from 'react'
import { latestProjects, main_header_title, main_header_text, main_header_content } from '../data/constants'
import { initializeAOS, initializeOwlCarousel } from '../utils/loadScripts'

const Home = () => {
  useEffect(() => {
    // Wait for scripts to load
    const timer = setTimeout(() => {
      initializeAOS()
      initializeOwlCarousel('.hero-slider-one')
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-wrap style3 bg-squeeze">
        <img
          src="/assets/img/hero/hero-shape-10.png"
          alt="Image"
          className="hero-shape-one"
        />
        <img
          src="/assets/img/hero/hero-shape-15.png"
          alt="Image"
          className="hero-shape-two"
        />
        <img
          src="/assets/img/hero/hero-shape-14.png"
          alt="Image"
          className="hero-shape-three"
        />
        <img
          src="/assets/img/hero/hero-shape-11.png"
          alt="Image"
          className="hero-shape-four animationFramesTwo"
        />
        <div className="hero-slider-one owl-carousel">
          <div className="hero-slide-item">
            <div className="container">
              <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                  <div
                    className="hero-content"
                    data-speed="0.10"
                    data-revert="true"
                  >
                    <span className="main-header-title">{main_header_title}</span>
                    <h1 className="main-header-text">{main_header_text}</h1>
                    <p className="main-header-content">{main_header_content}</p>
                    <div className="hero-btn">
                      <a
                        href="/assets/files/E Pabitra.pdf"
                        className="btn style1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                      <a
                        className="play-video"
                        data-fancybox
                        href="https://youtu.be/sHcH2gl3NgA"
                      >
                        <span className="play-btn">
                          <i className="flaticon-play-button-arrowhead"></i>
                        </span>
                        <span className="sm-none">Watch Video</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero-img-wrap">
                    <img
                      src="/assets/img/hero/hero-slide-1.png"
                      alt="Image"
                      className="hero-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Charge calculator */}
      <div className="service-charge-wrap bg-stratos ptb-50">
        <div className="container">
          <div className="row justify-content-center">
            <h1 style={{ color: '#fff', textAlign: 'center' }}>
              Looking for a passionate and skilled developer to bring your ideas to life? Let's work together to create something exceptional!
            </h1>
            <div className="text-center mt-20">
              <a href="/contact.html" className="btn style1">Hire Me</a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="feature-wrap pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="feature-card style3">
                <div className="feature-info">
                  <div className="feature-title">
                    <span>
                      <img
                        src="/assets/img/feature/feature-icon-1.png"
                        alt="Image"
                      />
                    </span>
                    <h3>Backend Skills</h3>
                  </div>
                  <p>
                    I build scalable backend systems using <b>Java</b>, <b>Spring Boot</b>, <b>Spring Security</b>, <b>REST APIs</b>, <b>Microservices</b>, <b>Hibernate</b>, <b>JPA</b>, <b>gRPC</b>, and <b>SQL</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="feature-card style3">
                <div className="feature-info">
                  <div className="feature-title">
                    <span>
                      <img
                        src="/assets/img/feature/feature-icon-2.png"
                        alt="Image"
                      />
                    </span>
                    <h3>Frontend Skills</h3>
                  </div>
                  <p>
                    For UI development I work with <b>React.js</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="feature-card style3">
                <div className="feature-info">
                  <div className="feature-title">
                    <span>
                      <img
                        src="/assets/img/feature/feature-icon-3.png"
                        alt="Image"
                      />
                    </span>
                    <h3>Deployment Skills</h3>
                  </div>
                  <p>
                    I use <b>AWS</b> (S3, EC2, IAM), <b>Docker</b>, and <b>CI/CD pipelines</b> for deployment and infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-wrap style1 pb-100 bg-bunting">
        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="wh-img-wrap">
                <img src="/assets/img/why-choose-us/pabitra.png" alt="Image" />
                <img
                  className="wh-shape-one bounce"
                  src="/assets/img/why-choose-us/wh-shape-1.png"
                  alt="Image"
                />
                <img
                  className="wh-shape-two animationFramesTwo"
                  src="/assets/img/why-choose-us/wh-shape-2.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wh-content">
                <div className="content-title style1">
                  <span>Why Should You Hire Me</span>
                  <h2>Scalable Backend Systems &amp; High-Availability Solutions</h2>
                  <p>
                    I am a highly organized and self-driven Backend Engineer with 2+ years of experience building production-grade systems using Java, Spring Boot, and microservices. I focus on high-throughput APIs, performance optimization, and maintaining system reliability.
                  </p>
                </div>
                <div className="feature-item-wrap">
                  <div className="feature-item">
                    <span className="feature-icon">
                      <i className="flaticon-graph"></i>
                    </span>
                    <div className="feature-text">
                      <h3>Work Experience</h3>
                      <p>
                        Software Engineer at Vidyayug Software Pvt Ltd since May 2023. I ship production APIs, migrate legacy systems to microservices, and maintain 99.5%+ availability for platforms serving 10,000+ daily users.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">
                      <i className="flaticon-loan-1"></i>
                    </span>
                    <div className="feature-text">
                      <h3>Projects</h3>
                      <p>
                        Delivered 15+ production APIs, migrated 5 legacy monoliths to microservices, and architected custom async messaging (DLQ + retry). Built systems for LMS, healthcare, and pharmaceutical workflow automation.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">
                      <i className="flaticon-computer"></i>
                    </span>
                    <div className="feature-text">
                      <h3>Dedicated Delivery</h3>
                      <p>
                        I respond quickly and work with a dedicated approach to solve problems, debug production issues, and deliver reliable solutions on time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service-wrap style3 ptb-100 bg-rock">
        <div className="container">
          <img
            src="/assets/img/service-shape-1.png"
            alt="Image"
            className="service-shape-one"
          />
          <img
            src="/assets/img/service-shape-2.png"
            alt="Image"
            className="service-shape-two"
          />
          <div className="section-title style1 text-center mb-40">
            <span>Projects</span>
            <h2 className="text-white">Let's focus on some latest Projects</h2>
          </div>
          <div className="row gx-5 align-items-center" id="latest-project-container">
            {latestProjects.map((project, index) => (
              <div key={index} className="col-md-6">
                <div className="service-card style3">
                  <span className="service-icon">
                    <i className="flaticon-payment-method"></i>
                  </span>
                  <div className="service-info">
                    <h3>
                      {project.gitHubLink && project.gitHubLink !== '#' ? (
                        <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                          {project.projName}
                        </a>
                      ) : (
                        <span className="text-white">{project.projName}</span>
                      )}
                    </h3>
                    <p>
                      <b>{project.projType}</b>
                      <br />
                    </p>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="shopping-wrap ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <div className="shopping-content">
                <img
                  src="/assets/img/shopping/shopping-shape-1.png"
                  alt="Image"
                  className="shopping-shape-one moveHorizontal"
                />
                <img
                  src="/assets/img/shopping/shopping-shape-2.png"
                  alt="Image"
                  className="shopping-shape-two bounce"
                />
                <div className="content-title style1">
                  <span>Education Details</span>
                  <h2>Java Developer || MCA</h2>
                  <p>
                    I recently completed my Master's degree in Computer Science
                    from BPUT University. During my studies, I gained solid
                    understanding on different technologies of Java, as well as
                    experience in software development through various projects.
                    I believe this education has prepared me well for a career
                    in software engineering, and I'm excited to use my skills
                    for a reputated company.
                  </p>
                </div>
                <ul className="content-feature-list list-style">
                  <li>
                    <i className="ri-check-double-line"></i>Java Development&nbsp;
                    || &nbsp;NareshIt, Hyderabad
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Master Of Computer
                    Application (MCA)&nbsp; || &nbsp;BPUT, Berhampur
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>Bachelor Of Computer
                    Application (BCA)&nbsp; || &nbsp;BPUT, Berhampur
                  </li>
                </ul>
                <a href="/contact.html" className="btn style1">Hire Me</a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1">
              <div className="shopping-img-wrap">
                <img src="/assets/img/shopping/pabitra_square.webp" alt="Image" />
                <img
                  src="/assets/img/shopping/shopping-shape-3.png"
                  alt="Image"
                  className="shopping-shape-three"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
