import React from 'react'
import footerbase from '../../img/Footer Base (1).svg'
import bandlandlogo from '../../img/Bandland Logo.svg'
import icons from '../../img/Social Icons.svg'
import navigation from '../../img/Navigation.png'
import './Footer.css'


function Footer() {
  return (
    <div>
      <img src={footerbase} className="footerbase" alt="" srcset="" />
      <img src={bandlandlogo} alt="" srcset="" className="bandlandlogo"/>
      <img src={icons} alt="" srcset="" className="icons" />
      <img src={navigation} alt="" srcset="" className="footernav" />
    </div>
  )
}

export default Footer
