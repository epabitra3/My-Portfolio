import Breadcrumb from '../components/Breadcrumb'
import { name_, comp_desc } from '../data/constants'
import { img } from '../utils/assets'

const BlogDetailsMavenIssue = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="NoSuchMethodError while Creating Spring Starter Projects"
        titleTag="h4"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog.html' },
          { text: 'Description' }
        ]}
        heroImage="img/Uploads/mavenErrorWithEclipseVersionWithDescription.webp"
      />

      {/* Blog Details Section - matches original layout */}
      <div className="blog-details-wrap ptb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <article>
                <ul className="post-metainfo list-style">
                  <li>
                    <i className="flaticon-user"></i><a>{name_}</a>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i><a>18 May, 2023</a>
                  </li>
                  <li><i className="flaticon-bubble-chat"></i>No Comment</li>
                </ul>
                <h2 style={{ wordWrap: 'break-word' }}>
                  NoSuchMethodError: &apos;void
                  org.eclipse.m2e.core.project.ResolverConfiguration.setActiveProfiles(java.lang.String)&apos;
                  java.lang.reflect.InvocationTargetException
                </h2>
                <div className="post-para" style={{ textAlign: 'justify' }}>
                  <p>
                    When attempting to create a Spring Starter Project in Eclipse versions after September 2022, users
                    may encounter a &apos;NoSuchMethodError&apos; related to the
                    &apos;org.eclipse.m2e.core.project.ResolverConfiguration.setActiveProfiles(java.lang.String)&apos; method.
                    This error is caused by compatibility issues between the Eclipse version and the Spring Starter
                    Project configuration.
                  </p>
                  <p>
                    In this documentation, we will explore the steps to resolve the &apos;NoSuchMethodError&apos; and provide a
                    workaround by using earlier versions of Eclipse that are compatible with Spring Starter Projects.
                  </p>
                  <h4 style={{ color: 'black' }}><b>
                    Step-by-Step Guide to Resolving the &apos;NoSuchMethodError&apos; Issue:
                  </b></h4>
                  <h6>1. Backup Your Workspace:</h6>
                  <p>
                    Before proceeding with any changes, it&apos;s essential to back up your Eclipse workspace. This
                    precaution ensures that your projects and configurations are safe in case anything goes wrong during
                    the process.
                  </p>
                  <h6>2. Remove the Current Eclipse Version:</h6>
                  <p>
                    If you are using a version of Eclipse after September 2022-09 and are experiencing the
                    &apos;NoSuchMethodError,&apos; consider uninstalling that version.
                  </p>
                  <h6>3. Download an Earlier Version of Eclipse:</h6>
                  <p>
                    Go to the Eclipse official website or another reliable source and download an Eclipse IDE version
                    that earlier than 2022-09 version.
                  </p>
                  <h6>4. Install the Earlier Version:</h6>
                  <p>
                    Install the downloaded Eclipse version on your system, following the usual installation procedure.
                  </p>
                  <h6>5. Import Workspace Projects:</h6>
                  <p>
                    After installing the earlier Eclipse version, import your workspace projects into this new
                    installation. The projects should remain intact, and you should be able to continue your development
                    work seamlessly.
                  </p>
                  <h6>6. Now try to create new Spring Starter Project</h6>
                  <p>
                    Now if you try to create new Spring Starter Project then you won&apos;t get any problem with the Earlier
                    version&apos;s of 2022-09 version.
                  </p>
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

export default BlogDetailsMavenIssue
