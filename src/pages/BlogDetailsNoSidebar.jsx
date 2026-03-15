import Breadcrumb from '../components/Breadcrumb'

const BlogDetailsNoSidebar = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Blog Details"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog.html' },
          { text: 'Blog Details' }
        ]}
      />
      <section className="blog-wrap pt-100 pb-75 bg-albastor">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-details-content">
                <h2>No Sidebar Blog Layout</h2>
                <p>Blog content goes here...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetailsNoSidebar
