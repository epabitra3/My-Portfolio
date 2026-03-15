// Utility to load external scripts dynamically
export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export const initializeAOS = () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 1000,
      once: true,
    })
  }
}

export const initializeOwlCarousel = (selector, options = {}) => {
  if (window.$ && window.$.fn.owlCarousel) {
    const defaultOptions = {
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      ...options
    }
    window.$(selector).owlCarousel(defaultOptions)
  }
}

export const initializeFancybox = () => {
  if (window.Fancybox) {
    window.Fancybox.bind('[data-fancybox]', {
      // Fancybox options
    })
  }
}
