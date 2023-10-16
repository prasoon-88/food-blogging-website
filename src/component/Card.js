import React from 'react'

const Card = ({card}) => {
  return (
    <div className="card">
    <img src={card.img} alt="" />
    <div className="content">
      <h2>{card.h2}</h2>
      <p>{card.p}</p>
    </div>
    <div className="buttonContainer">
      <button>Read More</button>
    </div>
  </div>
  )
}

export default Card