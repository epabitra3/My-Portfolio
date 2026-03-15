// SEO & site identity
export const siteUrl = "https://epabitra.com"
export const siteName = "E Pabitra - Portfolio"
export const defaultOgImage = "/assets/img/small_p.png"

export const name_ = "E Pabitra"
export const email_ = "epabitra9@gmail.com"
export const alt_email_ = "epabitra8@gmail.com"
export const mobileNo = "7377618313"
export const alt_mobileNo = "9078674358"
export const address = "Ganjam, Odisha, India"
export const full_address = "VVN Men's Hostel, Shivbagh Colony, Hyderabad, India"
export const logo_name = "BASU"
export const comp_desc = "My goal is to grow as a Java Developer. I hope you will consider my candidacy for a role at your prestigious company. Thank you."

export const main_header_title = "Sinior Software Engineer At Vidyayug"
export const main_header_text = "I'm E Pabitra, a Web Developer Working at Vidyayug Pvt.Ltd"
export const main_header_content = "I Design and Develop Experiences that make people's Lives simple. I break one big impossible task into several small possible tasks."

export const latestProjects = [
  {
    gitHubLink: "https://github.com/epabitra/PortfolioWebsite.git",
    projName: "Portfolio Website",
    projType: "Web Development",
    description: "A personal portfolio showcasing my projects, skills, and experiences. Explore my journey and connect with me through this site.",
    imageURL: "img/Uploads/portfolio_ss.png"
  },
  {
    gitHubLink: "https://github.com/epabitra/OnlineShoppingApp.git",
    projName: "Online Shopping Application",
    projType: "Java Application",
    description: "It is a web application used to demonstrate some functionality of Online Shopping Application Development. You can find the description on GitHub.",
    imageURL: "img/blog/MVC Blog.png"
  },
  {
    gitHubLink: "https://github.com/epabitra/Axis-Bank.git",
    projName: "Axis Banking Application",
    projType: "Java Application",
    description: "It is a web application used to demonstrate some functionality of Banking Application Development. You can find the description on GitHub.",
    imageURL: "img/Uploads/axis_banner.png"
  },
  {
    gitHubLink: "https://www.digitektechnologies.com",
    projName: "Digitek Technologies",
    projType: "Wordpress Application",
    description: "It is a e-Learning platform. I developed this application using Wordpress. Using this platform, you will be able to learn how to code.",
    imageURL: "img/Uploads/digitek_ss.png"
  },
  {
    gitHubLink: "https://github.com/epabitra/Employee_Management_Mysql.git",
    projName: "Employee Management System",
    projType: "Java Application",
    description: "It is a web application used to demonstrate the Employee Management System. You can find the description on GitHub.",
    imageURL: "img/blog/MVC Blog.png"
  },
  {
    gitHubLink: "https://github.com/epabitra/HK-Payments-Bank.git",
    projName: "HK Payments Bank",
    projType: "Android Application",
    description: "It is a Android application used to demonstrate the Banking Application. You can find the description on GitHub.",
    imageURL: "img/Uploads/hk_bank_ss.png"
  }
]

export const blogCards = [
  {
    id: 5,
    imageURL: "img/blog/journey-3lpa-8lpa.png",
    authorName: name_,
    date: "Career & Motivation",
    header: "From 3 LPA to 8 LPA: When the Worst Phase Became My Best Training Ground",
    blogURL: "/blog-details-journey-3lpa-to-8lpa.html",
    excerpt: "A personal story for juniors: how being moved to testing, blamed for others' mistakes, and sleeping 4 hours a night led to a 100% hike and three lessons that changed my career."
  },
  {
    id: 1,
    imageURL: "img/small_p.png",
    authorName: name_,
    date: "18 October, 2025",
    header: "Add to Home Screen with Custom Icons - Complete Implementation Guide",
    blogURL: "/blog-details-add-to-home-screen.html",
    excerpt: "Implementing PWA add to home screen functionality..."
  },
  {
    id: 2,
    imageURL: "img/Uploads/mavenErrorWithEclipseVersionWithDescription.webp",
    authorName: name_,
    date: "26 July, 2023",
    header: "NoSuchMethodError while Creating Spring Starter Projects",
    blogURL: "/blog-details-maven-issue-with-eclipse.html",
    excerpt: "Common Maven issues and solutions in Eclipse IDE..."
  },
  {
    id: 3,
    imageURL: "img/blog/MVC Blog.png",
    authorName: name_,
    date: "18 May, 2023",
    header: "Right Way Of Developing Web Application With MVC Architecture",
    blogURL: "/blog-details-mvc-webapp.html",
    excerpt: "Learn about MVC architecture in web development..."
  },
  {
    id: 4,
    imageURL: "img/blog/lapi2.webp",
    authorName: name_,
    date: "4 May, 2023",
    header: "Started a new position as Sinior Software Engineer at Vidyayug Pvt.Ltd",
    blogURL: "#",
    excerpt: "Creating a clean blog layout without sidebar..."
  }
]

export const toolsData = [
  {
    id: 1,
    title: "LinkedIn Post Generator",
    description: "Create professional LinkedIn posts with advanced formatting options including bold, italic, emojis, icons, hashtags, mentions, and more. Perfect for creating engaging content that stands out.",
    icon: "ri-linkedin-box-fill",
    link: "/linkedin-post-generator.html",
    badge: "",
    features: [
      "Bold & Italic formatting",
      "Emoji picker",
      "Professional icons",
      "Hashtag & Mention support",
      "Real-time preview",
      "Character counter"
    ]
  }
]

export const headerData = [
  {
    type: "top",
    contactInfo: [
      {
        icon: "flaticon-call",
        link: `tel:${mobileNo}`,
        text: `(+91) ${mobileNo}`,
      },
      {
        icon: "flaticon-email-1",
        link: `mailto:${email_}`,
        text: email_,
      },
      { icon: "flaticon-pin", link: "#", text: address },
    ],
    menu: [
      { link: "/contact.html", text: "Support" },
      { link: "/contact.html", text: "Help" },
    ],
    language: {
      name: "English",
      options: [{ flag: "/assets/img/uk.png", link: "#", text: "English" }],
    },
  },
  {
    type: "bottom",
    brand: {
      link: "/",
      lightText: logo_name,
      darkText: logo_name,
      lightColor: "black",
      darkColor: "white",
      font: "Calistoga",
      size: "5vh",
    },
    navItems: [
      { link: "/", text: "Home", active: true, hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/projects.html", text: "Projects", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/tools.html", text: "My Tools", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/about.html", text: "About Me", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/blog.html", text: "Blog", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/contact.html", text: "Contact", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "/contact.html", text: "Hire me", hasDropdown: false, extraClass: "btn style1", parentClass: "xl-none" },
    ],
    hireMe: { link: "/contact.html", text: "Hire Me" },
  },
]

export const footerData = [
  {
    type: 'logo',
    logoName: logo_name,
    description: comp_desc,
    socialLinks: [
      { platform: 'Facebook', icon: 'ri-facebook-fill', link: 'https://www.facebook.com/epabitra3' },
      { platform: 'Twitter', icon: 'ri-twitter-fill', link: 'https://twitter.com/e_pabitra' },
      { platform: 'LinkedIn', icon: 'ri-linkedin-fill', link: 'https://www.linkedin.com/in/epabitra/' },
      { platform: 'Instagram', icon: 'ri-instagram-fill', link: 'https://www.instagram.com/epabitra3/' }
    ]
  },
  {
    type: 'skills',
    title: 'My Skills',
    skills: [
      'Java Development',
      'Spring-boot Development',
      'UI Development',
      'Android Development',
      'Wordpress Development'
    ]
  },
  {
    type: 'links',
    title: 'Quick Links',
    links: [
      { text: 'Home', href: '/' },
      { text: 'Projects', href: '/projects.html' },
      { text: 'About Me', href: '/about.html' },
      { text: 'Blog', href: '/blog.html' },
      { text: 'Contact Me', href: '/contact.html' }
    ]
  },
  {
    type: 'address',
    title: 'Address',
    address: address,
    contact: {
      phone: mobileNo,
      email: email_
    }
  }
]
