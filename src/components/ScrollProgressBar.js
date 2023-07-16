import React, { useEffect, useState } from 'react'

function ScrollProgressBar () {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isProgressBarVisible, setProgressBarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      if (progress <= 4) {
        setProgressBarVisible(false)
      } else {
        setProgressBarVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const progressStyle = {
    width: `${scrollProgress}%`
  }

  return (
    <div
      className={`scroll-progress-bar ${isProgressBarVisible ? '' : 'hidden'}`}
    >
      <div className='progress' style={progressStyle}></div>
    </div>
  )
}

export default ScrollProgressBar
