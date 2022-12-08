import React from 'react'
import { Carousel } from "react-responsive-carousel";
//import img1 from "../home/rbh_1x850.jpeg"
//import img2 from "../home/rbh_2x850.jpeg"
//import img3 from "../home/scanner_h1x850.jpeg"


  

const Carrusel = () => {
  return (
    <>
      <Carousel autoPlay={true} showIndicators={false} infiniteLoop={true} showArrows={false} showStatus={false}  showThumbs={false}>
      {/*<Carousel infiniteLoop={true} showArrows={false} showStatus={false}  showThumbs={false}>*/}
      {/*<Carousel infiniteLoop={true}>*/}
        <div>
          <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_1x850_mlh3ck.jpg" />
          {/*<img alt="" src={img1} />*/}
        </div>
        <div>
          <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_2x850_nwxrmp.jpg" />
          {/*<img alt="" src={img2} />*/}
        </div>
        <div>
          <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/scanner_h1x850_oa9nzc.jpg" />
          {/*<img alt="" src={img3} />*/}
        </div>
    </Carousel>
    </>
  )
}

export default Carrusel