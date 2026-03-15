import Breadcrumb from '../components/Breadcrumb'
import LinkedInPostEditor from '../components/LinkedInPostEditor'

const LinkedInPostGenerator = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="LinkedIn Post Generator"
        items={[
          { text: 'Home', link: '/' },
          { text: 'My Tools', link: '/tools.html' },
          { text: 'LinkedIn Post Generator' }
        ]}
      />
      <LinkedInPostEditor />
    </div>
  )
}

export default LinkedInPostGenerator
