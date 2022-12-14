import React, { useState, useEffect } from 'react'
import './carousel.css'

const Carousel = (props) => {
   const { children, show, infiniteLoop } = props

   const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
   const [length, setLength] = useState(children.length)

   // Estableix la longitud perquè coincideixi amb els "children" actuals dels "props".
   useEffect(() => {
      setLength(children.length)
   }, [children])

   const next = () => {
      if (currentIndex < (length -1)) {
            setCurrentIndex(prevState => prevState + 1)
      }
   }

   const prev = () => {
      if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
      }
   }

   return (
      <div className="carousel-container">
         <div className="carousel-wrapper">
            <button onClick={prev} className="leftArrow">&lt;</button>
            <div className="carousel-content-wrapper">
               <div
                  className="carousel-content"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
               >
                  {children}
               </div>
            </div>
            <button onClick={next} className="rightArrow">&gt;</button>
         </div>
      </div>
   )
}

export default Carousel
