import { Link } from 'react-router-dom'
import { img } from '../utils/assets'

const Breadcrumb = ({ title, items = [], heroImage, titleTag = 'h2' }) => {
  const heroSrc = heroImage ? img(heroImage) : img('img/breadcrumb/breadcrumb-1.png')
  const TitleTag = titleTag

  return (
    <div className="breadcrumb-wrap bg-spring">
      <img
        src={img('img/breadcrumb/br-shape-1.png')}
        alt=""
        className="br-shape-one xs-none"
      />
      <img
        src={img('img/breadcrumb/br-shape-2.png')}
        alt=""
        className="br-shape-two xs-none"
      />
      <img
        src={img('img/breadcrumb/br-shape-3.png')}
        alt=""
        className="br-shape-three moveHorizontal sm-none"
      />
      <img
        src={img('img/breadcrumb/br-shape-4.png')}
        alt=""
        className="br-shape-four moveVertical sm-none"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8 col-sm-8">
            <div className="breadcrumb-title">
              <TitleTag>{title}</TitleTag>
              <ul className="breadcrumb-menu list-style">
                {items.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link}>{item.text}</Link>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-4 col-sm-4 xs-none">
            <div className="breadcrumb-img">
              <img
                src={img('img/breadcrumb/br-shape-5.png')}
                alt=""
                className="br-shape-five animationFramesTwo"
              />
              <img
                src={img('img/breadcrumb/br-shape-6.png')}
                alt=""
                className="br-shape-six bounce"
              />
              <img src={heroSrc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
