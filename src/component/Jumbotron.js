import React from 'react'

const Jumbotron = () => {
    return (
        <div className='Jumbotron'>
            <div className='part1'>
                <div className="truckContainer">
                    <img src="/assets/foodTruck.png" id='foodTruck' />
                </div>
                <div className="headingContainer">
                    <div className="heading">
                        Discover the <span>Best</span> Food and Drinks
                    </div>
                    <div className='subHeading'>
                        Naturally made Healthcare Products for the better care & support of your body.
                    </div>
                </div>
                <div className="exploreContainer">
                    <button>Explore Now!</button>
                </div>
            </div>
            <div className='part2'>
                <button id='getInTouch'>Get In Touch</button>
                <img src="/assets/vector.png" id='vector' />
                <img src="/assets/mainPizza.png" id='mainPizza' />
            </div>
        </div>
    )
}

export default Jumbotron