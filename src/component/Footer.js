import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='imgContainer'>
        <img src="/assets/foodtruck.png" alt="" />
      </div>
      <div className='contactus'>
        <h2>Contact Us</h2>
        <div>
          <p className='address'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
      </div>
      <div className='more'>
        <h2>More</h2>
        <div>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className='sociallink'>
        <h2>Social Links  </h2>
        <div id="links">
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-facebook-fill"></i>
        </div>
        <p className='cpy'>© 2022 Food Truck Example</p>
      </div>
    </div>
  )
}

export default Footer