import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { name_, comp_desc } from '../data/constants'
import { img } from '../utils/assets'
import './BlogDetailsJourney3LpaTo8Lpa.css'

const BlogDetailsJourney3LpaTo8Lpa = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb
        title="From 3 LPA to 8 LPA: When the Worst Phase Became My Best Training Ground"
        titleTag="h4"
        items={[
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog.html' },
          { text: 'Career Journey' }
        ]}
        heroImage="img/blog/journey-3lpa-8lpa.png"
      />

      <div className="blog-details-wrap ptb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <article>
                <ul className="post-metainfo list-style">
                  <li><i className="flaticon-user"></i><a>{name_}</a></li>
                  <li><i className="flaticon-calendar"></i><a>Career &amp; Motivation</a></li>
                  <li><i className="flaticon-bubble-chat"></i>No Comment</li>
                </ul>

                <h2 className="mb-4">
                  From 3 LPA to 8 LPA: When the Worst Phase of My Career Became My Best Training Ground
                </h2>

                <div className="post-para">
                <p className="lead">
                  This is a personal story for every junior developer and anyone visiting my portfolio—especially for those who feel stuck, blamed, or moved to a role they never asked for. I hope it reminds you that the toughest phase can become your biggest advantage.
                </p>

                <hr className="my-4" />

                <h3 className="mt-5 mb-3">The Beginning</h3>
                <p>
                  In <strong>March 2023</strong>, I started my career with a <strong>3 LPA salary</strong> as a fresher. Like many fresh graduates, I was excited to start building real products and grow as a developer.
                </p>
                <p>
                  But within a few months, my journey took a very difficult turn.
                </p>

                <h3 className="mt-5 mb-3">The Tough Turn</h3>
                <p>
                  I joined one of the toughest client projects in my company. The team was extremely strict, help was minimal, and as the newest member I often became the easiest person to blame when something went wrong.
                </p>
                <p>
                  Many days I was scolded for hours for small mistakes. Sometimes even for mistakes that weren’t mine.
                </p>
                <p>
                  Eventually, I was moved out of development completely and assigned to <strong>manual testing</strong>.
                </p>
                <p>
                  For many people, that moment might feel like the end of their developer journey.
                </p>

                <h3 className="mt-5 mb-3">I Chose to Prepare, Not Give Up</h3>
                <p>
                  Instead of giving up, I decided to use the situation differently.
                </p>
                <p>
                  While doing testing during office hours, I started <strong>studying the entire codebase silently</strong>. I tried to understand how the system worked, how bugs appeared, and how developers fixed them.
                </p>
                <p>
                  At night, after office hours, I started learning <strong>Spring Boot, Microservices, and React</strong> on my own.
                </p>
                <p>
                  Most nights I slept only <strong>4 hours</strong>.
                </p>
                <p>
                  Everyone around me believed I had been pushed out of development. But I was preparing.
                </p>

                <h3 className="mt-5 mb-3">The Break</h3>
                <p>
                  Then one day, a developer in our team suddenly left the company. Management had only a few days to decide whether to hire someone new.
                </p>
                <p>
                  During those few days, I was given a few development tasks.
                </p>
                <p>
                  Because I had already studied the codebase deeply, I was able to complete them successfully.
                </p>
                <p>
                  Instead of hiring a new developer, the team started trusting me with <strong>both testing and development responsibilities</strong>.
                </p>

                <h3 className="mt-5 mb-3">Visibility Matters</h3>
                <p>
                  But the journey was still not easy. A new team lead took over, and despite my development contributions, my reports were still being submitted to HR mainly as a <strong>tester</strong>. Even though I was contributing in development, my work was not fully visible in the official reports.
                </p>
                <p>
                  Still, I didn’t stop learning. During that year I kept improving my technical stack and strengthened my skills in <strong>Spring Boot, Microservices, and React</strong>.
                </p>
                <p>
                  When the next appraisal cycle came, despite the difficult situation, I managed to secure a <strong>30% hike</strong>. It wasn’t huge, but it was proof that persistence was starting to pay off.
                </p>
                <p>
                  That moment also taught me an important lesson about corporate life: <strong>Working silently is not enough. Your work must also be visible.</strong>
                </p>
                <p>
                  So I changed my strategy. I started participating more actively in meetings, helping juniors, and making my work more transparent to the team.
                </p>

                <h3 className="mt-5 mb-3">Upgrading and AI</h3>
                <p>
                  At the same time, I continued upgrading my skills. I learned technologies like <strong>AWS, Docker, Kubernetes, Jenkins, Terraform</strong>, and started using <strong>AI tools to improve development productivity</strong>. AI helped me write cleaner code faster and automate many development tasks.
                </p>
                <p>
                  Later, I even conducted a seminar in my office where I introduced <strong>20+ AI tools for developers</strong>.
                </p>
                <p>
                  My development speed increased dramatically, and I built a reputation for delivering features with <strong>no production issues</strong>.
                </p>

                <h3 className="mt-5 mb-3">Testing My Value</h3>
                <p>
                  But financially, I was still underpaid compared to my responsibilities. So I decided to test my value in the market.
                </p>
                <p>
                  After months of preparation, I successfully cracked an <strong>external job offer of 10 LPA</strong>.
                </p>
                <p>
                  When I submitted my resignation, my company realized the value I had built over the past three years. They immediately offered me a <strong>100% salary hike</strong> to retain me.
                </p>
                <p>
                  <strong>From 4 LPA → 8 LPA.</strong>
                </p>

                <h3 className="mt-5 mb-3">Three Lessons I Want to Share</h3>
                <p>Looking back, the journey taught me three powerful lessons:</p>
                <ol className="list-style" className="mt-3 mb-4">
                  <li className="mb-2"><strong>Sometimes the worst phase of your career becomes your biggest training ground.</strong></li>
                  <li className="mb-2"><strong>Never stop learning, even when your role doesn’t reflect your potential.</strong></li>
                  <li className="mb-2"><strong>Your real market value appears when you challenge yourself outside your comfort zone.</strong></li>
                </ol>

                <p>
                  The journey is still ongoing. But every difficult phase I faced early in my career helped build the foundation for the growth I am experiencing today.
                </p>

                <div className="journey-cta-box mt-5 p-4 rounded text-center">
                  <p className="mb-0">
                    If you’re a junior or someone going through a tough phase—remember: <strong>you’re not stuck forever. You’re preparing.</strong>
                  </p>
                </div>

                </div>

                <div className="mt-5 pt-4 border-top">
                  <Link to="/blog.html" className="link style1">
                    <i className="flaticon-right-arrow me-2" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}></i>
                    Back to Blog
                  </Link>
                </div>
              </article>
              <div className="post-author">
                <div className="post-author-img">
                  <img src={img('img/blog/my pic.jpg')} alt="Author" />
                </div>
                <div className="post-author-info">
                  <h4>{name_}</h4>
                  <p>{comp_desc}</p>
                  <ul className="social-profile style2 list-style">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/epabitra3">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/e_pabitra">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/epabitra/">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsJourney3LpaTo8Lpa
