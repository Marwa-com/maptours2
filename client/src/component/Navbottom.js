import React from 'react'
import { Link } from 'react-router-dom';
import './css_component/Navbottom.css';
import maptours  from './maptours.PNG'
function Navbottom() {
  return (
      <div>
      <footer class="footer" style={{ backgroundColor:' #023c57',marginTop:'0' }}>
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> CONTACT US </span> Contact us or come visit us for a coffee, we are always available to learn more about our users and your needs. </p>
          <div class="icons">
          <a style={{ marginLeft:'140px', backgroundColor:' #023c57' }}  href="/">
          <img src="https://img.icons8.com/fluency/48/000000/home-page.png"/></a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span> 14 street Freedom</span> Sousse, Tunisia</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+216) 0088 765 431</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p style={{color:'orangered'}}> office@map-tours.com</p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
      <img  className="map" src={maptours} alt ='monphoto'/>
        <p class="menu">
          <a href='/'> HOME</a> |
          <a href="/Ambassador"> AMBASSADORS</a> 
        </p>
        <p class="name"> map-tours &copy; 2021</p>
      </div>
    </footer>   
      </div>
  )
}
export default Navbottom