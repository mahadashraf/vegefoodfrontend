import React from 'react'
import './Checkout.css';


export const Checkout = () => {
  return (
    <div className="checkout-container">
        
      <div className="coupon-code">
      <div className="couponitems">

        <h3>Coupon Code</h3>
        <p>Enter your coupon code if you have one</p>
        <span className='text1'>Coupon Code</span>
        <input type="text" placeholder="Coupon code" />
        
      </div>
      <button className="apply-coupon">Apply Coupon</button>
      </div>
      <div className="estimate-shipping">
        <div className="shippingitems">

        <h3>Estimate shipping and tax</h3>
        <p>Enter your destination to get a shipping estimate</p>
        <span className='text1'>Country</span>
        <input type="text" placeholder="Country" />
        <span className='text1'> State/Province</span>
        <input type="text" placeholder="State/Province" />
        <span className='text1'>Zip/Postal Code</span>
        <input type="text" placeholder="Zip/Postal Code" />
       
        </div>
        <button className="estimate">Estimate</button>
      </div>
      <div className="cart-totals">
        <div className="cartitems">

        <h3>Cart Totals</h3>
        <div className="totals-row">
          <span>Subtotal</span>
          <span>$20.60</span>
        </div>
        <div className="totals-row">
          <span>Delivery</span>
          <span>$0.00</span>
        </div>
        <div className="totals-row">
          <span>Discount</span>
          <span>$3.00</span>
          
        </div>
      <hr />
        <div className="totals-row total">
          <span>TOTAL</span>
          <span className='totalprice'>$17.60</span>
        </div>
        
        </div>
        <button className="checkout">Proceed to Checkout</button>
      </div>
      
    </div>
  )
}

