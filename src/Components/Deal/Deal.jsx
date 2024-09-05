import React from 'react'
import "./Deal.css"
export const Deal = () => {
  return (
    <div className="deal-section">
        <div className="text">
            <span className="subheading">Best Price For you</span>
            <h2 className="textt">Deal of the day</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <p><a href="" className='newtext'>Spanich</a></p>
            <span className="price">$10<span className="insidetext">Now $5</span></span>


                <div className="timer">
                    <div className="days">
                        <h1 className='timee'>1622</h1><span className='time-2'> days</span>
                    </div>
                    <div className="hours">
                    <h1 className='timee'>22</h1><span className='time-2'> Hours</span>
                    </div>
                    <div className="minutes">
                    <h1 className='timee'>12</h1><span className='time-2'> Minutes</span>
                    </div>
                    <div className="seconds">
                    <h1 className='timee'>44</h1><span className='time-2'> Seconds</span>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

