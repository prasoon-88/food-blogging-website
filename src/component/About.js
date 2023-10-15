import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className="main">
        <div className="part1">
          <img src="/assets/aboutImg.png" alt="" />
        </div>
        <div className="part2">
          <div className="content">
            <h1>About Us</h1>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</h5>
            <button>Read More </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About