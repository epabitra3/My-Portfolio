import Breadcrumb from '../components/Breadcrumb'

const About = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="About Me"
        items={[
          { text: 'Home', link: '/' },
          { text: 'About Me' }
        ]}
      />
    </div>
  )
}

export default About
