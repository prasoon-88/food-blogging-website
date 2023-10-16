import React, { useEffect, useState, useRef } from 'react'
import Card from './Card';

const LatestArticle = () => {
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(0)
  const cardContainer = useRef(null)

  let cardArr = [
    {
      h2: "Grilled  Tomatoes at Home",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle1.png'
    },
    {
      h2: "Snacks for Travel",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle2.png'
    },
    {
      h2: "Post-workout Recipes",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle3.png'
    },
    {
      h2: "How To Grill Corn",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle4.png'
    },
    {
      h2: "Crunchwrap Supreme",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle5.png'
    },
    {
      h2: "Broccoli Cheese Soup",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      img: '/assets/latestArticle6.png'
    },

  ]

  useEffect(() => {
    if(window.innerWidth < 600){
      setTotalPage(cardArr.length)
    }else{
      setTotalPage(cardArr.length/3)
    }
  }, [page])

  const increasePage = () => {
    if (window.innerWidth < 600) {
      if (page === cardArr.length) {
        return
      }
      setPage(page+1);
      return cardContainer.current.style.transform += 'translate(-371px)';
    }
    if (page === cardArr.length / 3) {
      return
    }
    setPage(page + 1);
    cardContainer.current.style.transform += 'translate(-1330px)';
  }


  const decreasePage = () => {
    if (page === 1) {
      return
    }
    if (window.innerWidth < 600) {
      setPage(page-1);
      return cardContainer.current.style.transform += 'translate(371px)';
    }

    setPage(page - 1);
    cardContainer.current.style.transform += 'translate(1330px)';
  }

  return (
    <div className='latestArticles'>
      <h1>Latest Articles</h1>
      <div className="cardContainer">
        <div className="container" ref={cardContainer}>
          {
            cardArr.map((card) => (
              <Card card = {card}/>
             
            ))
          }
        </div>
      </div>
      <div className="pagination">
        <img src="/assets/left.png" onClick={decreasePage} />
        <div>
          <span>{page}</span>
          /
          <span>{totalPage}</span>
        </div>
        <img src="/assets/right.png" onClick={increasePage} />
      </div>
    </div>
  )
}

export default LatestArticle