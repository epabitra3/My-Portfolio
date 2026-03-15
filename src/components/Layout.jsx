import { useEffect } from 'react'
import Preloader from './Preloader'
import ThemeSwitcher from './ThemeSwitcher'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import SEO from './SEO'

const Layout = ({ children }) => {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextMenu)
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  return (
    <>
      <SEO />
      <Preloader />
      <ThemeSwitcher />
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
      <BackToTop />
    </>
  )
}

export default Layout
