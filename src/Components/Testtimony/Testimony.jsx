import React from 'react'
import './Testimony.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Testimony = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Show 2 slides for medium screens
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
    <section className="testimonials">
        <span className="headin">Testimony</span>
   <div className="upper-section">
   <h2>Our satisfied customer says</h2>
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts. Separated they live in
    </p>
   </div>
   
    <Slider {...settings}>
    
      <div className="testimonial-item">
        <img src="../person_1.jpg" alt="Customer" />
        <blockquote>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </blockquote>
        <h3>Garreth Smith</h3>
        <span>SYSTEM ANALYST</span>
      </div>
      <div className="testimonial-item">
        <img src="../person_2.jpg" alt="Customer" />
        <blockquote>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </blockquote>
        <h3>Garreth Smith</h3>
        <span>MARKETING MANAGER</span>
      </div>
      <div className="testimonial-item">
        <img src="../person_3.jpg" alt="Customer" />
        <blockquote>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </blockquote>
        <h3>Garreth Smith</h3>
        <span>INTERFACE DESIGNER</span>
      </div>
      <div className="testimonial-item">
        <img src="../person_4.jpg" alt="Customer" />
        <blockquote>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </blockquote>
        <h3>Garreth Smith</h3>
        <span>WEB DEVELOPER</span>
      </div>
      <div className="testimonial-item">
        <img src="../person_1.jpg" alt="Customer" />
        <blockquote>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </blockquote>
        <h3>Garreth Smith</h3>
        <span>UX DESIGNER</span>
      </div>
      
    </Slider>
   
  </section>
  )
}

