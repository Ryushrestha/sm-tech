import React from 'react'
import BodySection from './components/Body/BodySection'
import LowerSection from './components/LowerBody.js/LowerSection'
import Navbar from './components/Heading/Navbar'

const Home = () => {
  return (
    <div>
          <Navbar />
        <BodySection/>
        <LowerSection/>
    </div>
  )
}

export default Home