import React from 'react'
import AboutHome from '../AboutHome'
import { Testimony } from '../Testtimony/Testimony'
import { Subscribe } from '../Subscribe/Subscribe'
import { Packages } from '../Packages/Packages'
import AboutContent from '../AboutContent'
import Customers from '../Customers'

export const About = () => {
  return (
    <div>
        <AboutHome />
       
        <AboutContent />
       
        <Subscribe background="bg-light" />  
        <Customers />
        <Testimony />
        <br />
        <br />
        <br />
        <br />
        <Packages  background="about-background" />

    </div>
  )
}

