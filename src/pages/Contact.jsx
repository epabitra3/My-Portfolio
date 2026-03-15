import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { email_, alt_email_, mobileNo, alt_mobileNo, full_address } from '../data/constants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg_subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('Sending...')

    // Email sending logic (using SMTP.js)
    if (window.Email) {
      try {
        await window.Email.send({
          SecureToken: "c19c0d61bf-0b-4cc3-b907-6043004e97e-0d",
          To: "epabitra9@gmail.com",
          From: "epabitra9@gmail.com",
          Subject: formData.msg_subject,
          Body: `
            <b>Name :: </b>${formData.name}
            <b></br> Email :: </b>${formData.email}
            <b></br> Phone :: </b>${formData.phone}
            <b></br> Message ::</b>${formData.message}
          `
        })
        setSubmitStatus('Message Submitted!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          msg_subject: '',
          message: ''
        })
      } catch (error) {
        setSubmitStatus('Error sending message. Please try again.')
      }
    } else {
      setSubmitStatus('Email service not available. Please contact directly.')
    }
  }

  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="Contact"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Contact' }
        ]}
      />

      <section className="contact-wrap pt-100">
        <div className="container">
          <div className="row justify-content-center pb-75">
            <div className="col-lg-4 col-md-6">
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="flaticon-map"></i>
                </span>
                <div className="contact-info">
                  <h3>My Location</h3>
                  <p className="full_address">{full_address}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="flaticon-email-2"></i>
                </span>
                <div className="contact-info">
                  <h3>Email Me</h3>
                  <span className="email_id">{email_}</span>
                  <br />
                  <span className="alt_email_id">{alt_email_}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="flaticon-phone-call"></i>
                </span>
                <div className="contact-info">
                  <h3>Call Me</h3>
                  <span className="mobile_no">(+91) {mobileNo}</span>
                  <br />
                  <span className="alt_mobile_no">(+91) {alt_mobileNo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-area ptb-100 bg-albastor">
          <img
            src="/assets/img/contact-shape-1.png"
            alt="Image"
            className="contact-shape-one animationFramesTwo"
          />
          <img
            src="/assets/img/contact-shape-2.png"
            alt="Image"
            className="contact-shape-two bounce"
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="content-title style1 text-center mb-40">
                  <span>I will call you ASAP</span>
                  <h2>Do You Want A Callback ?</h2>
                </div>
                <div className="contact-form">
                  <form className="form-wrap" id="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your Email*"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            required
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            placeholder="Subject"
                            id="msg_subject"
                            required
                            value={formData.msg_subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group v1">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Messages.."
                            cols="30"
                            rows="10"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn style1 w-100 d-block">
                          Send Message
                        </button>
                        {submitStatus && (
                          <div id="msgSubmit" className={`h3 text-center ${submitStatus.includes('Error') ? 'text-danger' : 'text-success'}`}>
                            {submitStatus}
                          </div>
                        )}
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
