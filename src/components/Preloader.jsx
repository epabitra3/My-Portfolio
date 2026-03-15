import { useEffect, useState } from 'react'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.classList.remove('js-preloader')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loader js-preloader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Preloader
