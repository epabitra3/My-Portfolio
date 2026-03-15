import Breadcrumb from '../components/Breadcrumb'

const Callback = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Callback"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Callback' }
        ]}
      />
      <section className="blog-wrap pt-100 pb-75 bg-albastor">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2>Callback Request</h2>
                <p>Thank you for your interest. We will contact you soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Callback
