import React from 'react'
import CartHome from '../CartHome'
import ProductTable from '../ProductTable'
import Checkout from '../Checkout'

export const MyCart = () => {
  return (
    <div>
        <CartHome />
        <ProductTable />
        <Checkout />
    </div>
  )
}

