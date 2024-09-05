import React from 'react'
import "./Home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1, // Show 3 slides at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade:true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1, // Show 2 slides for medium screens
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, // Show 1 slide for small screens
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    
    <div className="home-secttion">

      <Slider {...settings}>
    <div className="home-section1">
     <div className="content">
        <h1>We Serve Fresh Vegetables and Fruits</h1>
        <h2>We Deliver Organic Vegetables and Fruits</h2>
        <p>
            <a href="/" className='details'>View Details</a>
        </p>
        
        </div>  
    </div>
    <div className="home-section2">
     <div className="content">
        <h1>100% Fresh & Organic Foods </h1>
        <h2>We Deliver Organic Vegetables and Fruits</h2>
        <p>
            <a href="/" className='details'>View Details</a>
        </p>
        
        </div>  
    </div>
    </Slider>
    </div>
  
  )

}

