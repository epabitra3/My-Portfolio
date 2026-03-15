import Breadcrumb from '../components/Breadcrumb'
import { name_, comp_desc } from '../data/constants'
import { img } from '../utils/assets'

const BlogDetailsMVCWebapp = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Right Way Of Developing Web Application With MVC Architecture"
        titleTag="h4"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog.html' },
          { text: 'Description' }
        ]}
        heroImage="img/blog/MVC Blog.png"
      />

      <div className="blog-details-wrap ptb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <article>
                <div className="post-img">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/G3ZSsoIRgvM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <ul className="post-metainfo list-style">
                  <li><i className="flaticon-user"></i><a>{name_}</a></li>
                  <li><i className="flaticon-calendar"></i><a>18 May, 2023</a></li>
                  <li><i className="flaticon-bubble-chat"></i>No Comment</li>
                </ul>
                <h2>The Power of Abstraction, Encapsulation, and MVC Architecture in Web Application Development</h2>
                <div className="post-para">
                  <p>
                    In this blog, we will explore the significance of abstraction, encapsulation, and MVC architecture, and how
                    they contribute to the success of web application development. Let&apos;s dive in and uncover the secrets behind
                    creating efficient and elegant web applications!
                  </p>
                  <p>
                    In the dynamic world of web application development, creating robust and scalable software solutions is of
                    utmost importance. To achieve this, it is crucial to embrace the fundamental principles of abstraction,
                    encapsulation, and the Model-View-Controller (MVC) architecture. These concepts provide developers with a
                    structured approach to design and build applications that are modular, maintainable, and easily extensible.
                  </p>
                  <blockquote className="wp-block-quote">
                    <span className="wp-quote-icon"><i className="flaticon-quotation-mark"></i></span>
                    <div className="wp-quote-text">
                      <p>
                        &quot;Hiding internal implementaion and just highlight the set of services is called Abstraction. We can achieve
                        abstraction by using Abstract classes and Interfaces.&quot;
                      </p>
                      <h6>Abstraction</h6>
                    </div>
                  </blockquote>
                  <blockquote className="wp-block-quote">
                    <span className="wp-quote-icon"><i className="flaticon-quotation-mark"></i></span>
                    <div className="wp-quote-text">
                      <p>
                        &quot;Gathering related data and it&apos;s corresponding methods into a single unit is called Encapsulation. It helps
                        develop modular, secure, and maintainable Application.&quot;
                      </p>
                      <h6>Encapsulation</h6>
                    </div>
                  </blockquote>
                  <blockquote className="wp-block-quote">
                    <span className="wp-quote-icon"><i className="flaticon-quotation-mark"></i></span>
                    <div className="wp-quote-text">
                      <p>
                        &quot;The MVC (Model-View-Controller) architecture is a software design pattern that separates the concerns of
                        data management, user interface, and application logic in web applications. It consists of three components:
                        the Model, which represents the data and business logic; The View, which is responsible for displaying
                        the data to the user; and the Controller, which handles user input, processes it, and updates the
                        model and view accordingly.&quot;
                      </p>
                      <h6>MVC Architecture</h6>
                    </div>
                  </blockquote>
                  <blockquote className="wp-block-quote">
                    <span className="wp-quote-icon"><i className="flaticon-quotation-mark"></i></span>
                    <div className="wp-quote-text">
                      <p>
                        &quot;In the MVC architecture, when a request is received by the controller, it searches for the corresponding
                        method in the service class. The service class then calls the corresponding method in the DAO class, which
                        communicates with the database. The result is then returned to the service class, which in turn returns
                        it to the controller. The controller creates a corresponding view object using the collected
                        information. This view object is then sent to the browser, which renders the data into an HTML file for
                        display to the end user.&quot;
                      </p>
                      <div style={{ textAlign: 'center' }} id="mvcImage">
                        <img src={img('img/blog/MVC Blog.png')} alt="MVC Architecture workflow" style={{ maxWidth: '70%', height: 'auto' }} />
                      </div>
                      <h6>Work-Flow on MVC Architecture</h6>
                    </div>
                  </blockquote>
                  <p>
                    The MVC architecture promotes modular development, making the application easier to understand, maintain, and
                    modify. It encourages separation of concerns, allowing for independent development and changes to the model, view,
                    and controller. This separation also enhances code reusability and testability.
                  </p>
                  <h3>Folder Structure You Have To Follow</h3>
                  <ol>
                    <li>
                      You have to follow this Folder Structure: put controller classes inside <strong>controller Package</strong>, DataBase related
                      classes inside <strong>dao Package</strong>, Services related classes inside <strong>service Package</strong>.
                    </li>
                    <li>
                      Take All Dao and Service classes as <strong>Interfaces</strong> and take the corresponding implementation classes inside
                      <strong>dao.impl and service.impl package</strong>.
                    </li>
                    <li>
                      To follow Abstraction, create an <strong>Application</strong> class that contains static methods to return objects of the dao and service
                      implementation classes to the controller or service class. (e.g. DriverManager.getConnection(String url) method)
                    </li>
                  </ol>
                </div>
              </article>
              <div className="post-author">
                <div className="post-author-img">
                  <img src={img('img/blog/my pic.jpg')} alt="Author" />
                </div>
                <div className="post-author-info">
                  <h4>{name_}</h4>
                  <p>{comp_desc}</p>
                  <ul className="social-profile style2 list-style">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/epabitra3">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/e_pabitra">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/epabitra/">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsMVCWebapp
