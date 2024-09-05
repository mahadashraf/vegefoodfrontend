import React from 'react'
import './ShopProducts.css'
import ShopHome from '../ShopHome'
import Subscribe from '../Subscribe'
import ShopCategory from '../ShopCategory'


export const ShopProducts = () => {
  return (
    <div>
    <ShopHome /> 
    <ShopCategory />      
    <br />
    <br />
    <br />
    <Subscribe background="bg-light" />
    </div>
  )
}
