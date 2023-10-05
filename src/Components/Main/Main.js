import React from 'react'
import topext from '../../img/Top Extension for Logo.svg'
import banner from '../../img/Presenting Banner@3x.png'
// import leftbar from '../../img/Left Bar.svg'
import './Main.css'

function Main() {
  return (
    <div >
      <img src={topext} alt="" srcset="" className='topext' />
      <img src={banner} alt="" srcset="" className='banner'/>
      {/* <img src={leftbar} alt="" srcset="" className='leftbar'/> */}
    </div>
  )
}

export default Main
