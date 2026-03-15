import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { siteUrl, defaultOgImage } from '../data/constants'

// Per-route title and description for SEO (Pabitra, epabitra, E Pabitra search)
const routeMeta = {
  '/': {
    title: `E Pabitra (Pabitra / epabitra) - Portfolio | Senior Software Engineer`,
    description: `E Pabitra (epabitra) - Senior Software Engineer at Vidyayug. Portfolio of Pabitra: Java, Spring Boot, React. Ganjam, Odisha. Contact for hiring.`,
  },
  '/about.html': {
    title: `About E Pabitra (Pabitra) | Senior Software Engineer`,
    description: `About E Pabitra (epabitra) - Senior Software Engineer, Java & Web Developer. Skills, experience, and background.`,
  },
  '/projects.html': {
    title: `Projects by E Pabitra (epabitra) | Portfolio`,
    description: `Projects by E Pabitra (Pabitra) - Java, Spring Boot, React, Android. GitHub repos and demos.`,
  },
  '/blog.html': {
    title: `Blog - E Pabitra (Pabitra / epabitra) | Programming & Career`,
    description: `Blog by E Pabitra (epabitra) - Programming solutions, MVC, Maven, Add to Home Screen, career journey.`,
  },
  '/contact.html': {
    title: `Contact E Pabitra (epabitra) | Hire Senior Software Engineer`,
    description: `Contact E Pabitra (Pabitra) - Senior Software Engineer. Ganjam, Odisha. Email, phone, hire for Java & Web Development.`,
  },
  '/tools.html': {
    title: `Tools by E Pabitra | LinkedIn Post Generator & More`,
    description: `Free tools by E Pabitra (epabitra) - LinkedIn Post Generator and more.`,
  },
  '/linkedin-post-generator.html': {
    title: `LinkedIn Post Generator | E Pabitra (epabitra)`,
    description: `Create professional LinkedIn posts with formatting. Free tool by E Pabitra.`,
  },
  '/blog-details-add-to-home-screen.html': {
    title: `Add to Home Screen Guide | E Pabitra Blog`,
    description: `Add to Home Screen with custom icons - complete guide. Blog by E Pabitra (epabitra).`,
  },
  '/blog-details-maven-issue-with-eclipse.html': {
    title: `NoSuchMethodError Spring Starter Eclipse | E Pabitra Blog`,
    description: `Fix NoSuchMethodError with Spring Starter in Eclipse. Blog by E Pabitra (Pabitra).`,
  },
  '/blog-details-mvc-webapp.html': {
    title: `MVC Web Application Development | E Pabitra Blog`,
    description: `Right way to develop web apps with MVC architecture. Blog by E Pabitra (epabitra).`,
  },
  '/blog-details-journey-3lpa-to-8lpa.html': {
    title: `From 3 LPA to 8 LPA - Career Journey | E Pabitra Blog`,
    description: `E Pabitra (Pabitra) career story: from 3 LPA to 8 LPA. Lessons for junior developers.`,
  },
}

const defaultMeta = {
  title: `E Pabitra (Pabitra / epabitra) - Portfolio`,
  description: `E Pabitra - Senior Software Engineer. Portfolio, projects, blog, contact.`,
}

export default function SEO() {
  const location = useLocation()
  const path = location.pathname || '/'
  const meta = routeMeta[path] || defaultMeta
  const fullTitle = meta.title.includes('E Pabitra') ? meta.title : `${meta.title} | E Pabitra`
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`.replace(/\/$/, '') || siteUrl
  const ogImage = defaultOgImage.startsWith('http') ? defaultOgImage : `${siteUrl}${defaultOgImage}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  )
}
