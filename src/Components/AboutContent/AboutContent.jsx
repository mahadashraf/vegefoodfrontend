import React from 'react'
import './AboutContent.css'

import { IonIcon } from '@ionic/react';
import { playOutline } from 'ionicons/icons'; 

export const AboutContent = () => {
  return (
    <div className="about-content">
        <div className="two-container">
        <div
      className="img-about"
      style={{ 
        backgroundImage: 'url(https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '70%',
        height: '600px',
        position: 'relative',
      }}
    >
      <a
        href="https://vimeo.com/45830194"
       className='video-link'
      >
         
           <IonIcon icon={playOutline} className="icon" /> {/* Use IonIcon with playOutline */}
      </a>
   
    </div>
    <div className="about-context">
    <h1>Welcome to Vegefoods an eCommerce website</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
   <button className="estimate">Shop Now</button>
    </div>
    </div>
    </div>
  )
}
