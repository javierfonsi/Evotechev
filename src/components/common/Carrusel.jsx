import React from 'react'
import { Carousel } from "react-responsive-carousel";
//import img1 from "../home/rbh_1x850.jpeg"
//import img2 from "../home/rbh_2x850.jpeg"
//import img3 from "../home/scanner_h1x850.jpeg"

  

const Carrusel = ({imgBack}) => {
  return (
    <>
      <Carousel autoPlay={true} showIndicators={false} infiniteLoop={true} showArrows={false} showStatus={false}  showThumbs={false}>
        <div>
          <img alt="" src={imgBack[0]} />
          {/*<img alt="" src={img1} />*/}
        </div>
        <div>
          <img alt="" src={imgBack[1]} />
          {/*<img alt="" src={img2} />*/}
        </div>
        <div>
          <img alt="" src={imgBack[2]} />
          {/*<img alt="" src={img3} />*/}
        </div>
      </Carousel>
    </>
  )
}

export default Carrusel