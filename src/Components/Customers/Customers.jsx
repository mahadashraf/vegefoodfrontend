import React, { useEffect } from 'react';
import "./Customers.css";

export const Customers = () => {

  useEffect(() => {
    const counters = document.querySelectorAll('.numberr');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-number');
        const c = +counter.innerText;
        const increment = target / 1000;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="customer-section">
      <div className="customer-content">
        <div className="customer-text">
          <div className="texts">
            <strong className="numberr" data-number="10000">0</strong>
            <p className='textss'>Happy Customers</p>
          </div>
        </div>
        <div className="customer-text">
          <div className="texts">
            <strong className="numberr" data-number="100">0</strong>
            <p className='textss'>Branches</p>
          </div>
        </div>
        <div className="customer-text">
          <div className="texts">
            <strong className="numberr" data-number="1000">0</strong>
            <p className='textss'>Partner</p>
          </div>
        </div>
        <div className="customer-text">
          <div className="texts">
            <strong className="numberr" data-number="100">0</strong>
            <p className='textss'>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
