import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { initializeAOS } from '../utils/loadScripts'
import { blogCards } from '../data/constants'
import { img } from '../utils/assets'

const Blog = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAOS()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Blog"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Blog' }
        ]}
        heroImage="img/breadcrumb/blog-banner-image.webp"
      />

      <section className="blog-wrap pt-100 pb-75 bg-albastor">
        <div className="container">
          <div className="section-title style1 text-center mb-40">
            <span>My Programming Journey</span>
            <h2>Solutions For Which I Struggled More</h2>
          </div>
          <div className="row justify-content-center" id="blogCardsContainer">
            {blogCards.map((post, index) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <div className="blog-card style1">
                  <div className="blog-img">
                    <img src={img(post.imageURL)} alt="" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="blog-info">
                    <ul className="blog-metainfo list-style">
                      <li><i className="flaticon-user"></i> <span>{post.authorName}</span></li>
                      <li><i className="flaticon-calendar"></i> {post.date}</li>
                    </ul>
                    <h3>
                      {post.blogURL === '#' ? (
                        <span>{post.header}</span>
                      ) : (
                        <Link to={post.blogURL}>{post.header}</Link>
                      )}
                    </h3>
                    <p>{post.excerpt}</p>
                    {post.blogURL !== '#' && (
                      <Link to={post.blogURL} className="link style1">
                        Read More <i className="flaticon-right-arrow"></i>
                      </Link>
                    )}
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

export default Blog
