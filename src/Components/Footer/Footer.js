import React from 'react'
import footerbase from '../../img/Footer Base (1).svg'
import bandlandlogo from '../../img/Bandland Logo.svg'
import icons from '../../img/Social Icons.svg'
import navigation from '../../img/Navigation.png'
import orange from '../../img/Orange Pattern for BG(1).svg'
import './Footer.css'


function Footer() {
  return (
    <div className="footer">
      <img src={orange} alt=""  />
      <img src={footerbase} className="footerbase" alt=""  />
      <img src={bandlandlogo} alt=""  className="bandlandlogo"/>
      <img src={icons} alt=""  className="icons" />
      <img src={navigation} alt=""  className="footernav" />
    </div>
  )
}

export default Footer
