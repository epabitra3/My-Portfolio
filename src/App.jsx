import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import LinkedInPostGenerator from './pages/LinkedInPostGenerator'
import BlogDetailsNoSidebar from './pages/BlogDetailsNoSidebar'
import BlogDetailsMVCWebapp from './pages/BlogDetailsMVCWebapp'
import BlogDetailsMavenIssue from './pages/BlogDetailsMavenIssue'
import BlogDetailsAddToHomeScreen from './pages/BlogDetailsAddToHomeScreen'
import BlogDetailsJourney3LpaTo8Lpa from './pages/BlogDetailsJourney3LpaTo8Lpa'
import Callback from './pages/Callback'
import Maintenance from './pages/Maintenance'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/projects.html" element={<Projects />} />
            <Route path="/blog.html" element={<Blog />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="/tools.html" element={<Tools />} />
            <Route path="/linkedin-post-generator.html" element={<LinkedInPostGenerator />} />
            <Route path="/blog-details-no-sidebar.html" element={<BlogDetailsNoSidebar />} />
            <Route path="/blog-details-mvc-webapp.html" element={<BlogDetailsMVCWebapp />} />
            <Route path="/blog-details-maven-issue-with-eclipse.html" element={<BlogDetailsMavenIssue />} />
            <Route path="/blog-details-add-to-home-screen.html" element={<BlogDetailsAddToHomeScreen />} />
            <Route path="/blog-details-journey-3lpa-to-8lpa.html" element={<BlogDetailsJourney3LpaTo8Lpa />} />
            <Route path="/callback.html" element={<Callback />} />
            <Route path="/Maintanance.html" element={<Maintenance />} />
          </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
