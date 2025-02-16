'use client';
import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AosInit = () => {

  React.useEffect(() => {
    Aos.init()
  }, [])

  return null
}

export default AosInit