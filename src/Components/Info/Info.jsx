import React from 'react'
import "./Info.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faPaperPlane} from '@fortawesome/free-solid-svg-icons';



export const Info = () => {
  return (
    <div className="info-section">
        <div className="num">
            <span className="icon"><FontAwesomeIcon icon={faPhone} className="white-icon" /></span>
            <h2 className='phone'>+92 341 4427668</h2>
            </div>
        <div className="email">
        <span className="icon"><FontAwesomeIcon icon={faPaperPlane} className="white-icon" /></span>
        <h2 className='email'>mahadashraf.850@gmail.com</h2>
        </div>
        <div className="email">
        <h2 className='email'>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</h2>
        </div>
       
    </div>
  )
}