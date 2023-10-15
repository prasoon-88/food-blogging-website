import React from 'react'
import Jumbotron from '../component/Jumbotron'
import About from '../component/About'
import LatestArticle from '../component/LatestArticle'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Jumbotron/>
      <About/>
      <LatestArticle/>
      <Footer/>
    </div>
  )
}

export default Home