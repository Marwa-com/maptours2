import "./css_component/Navbar.css";
import React, { useState, useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/authActions'; 
import maptours  from './maptours.PNG'
const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    const auth = useSelector(state => state.auth)
    const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      
    if (auth.isAuth && auth.user) setnavbarUserIsLogged(true);
        
      }, [auth.isAuth , auth.user]);

    return (
     <>  
     {!navbarUserIsLogged ? ( 
<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed" ,width:"100% ",top: 0,  zIndex:9999}} >
  <a class="navbar-brand" href=""> 
   <img src={maptours} width="65" height="50"  class="d-inline-block align-top" alt="maptours.png"/> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active" >
        <a class="nav-link" href="/"> <span  style={{color: "rgb(207, 64, 12)", fontWeight:700}}>  Home</span>  </a>
      </li>
     <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:20}}></span>
      <li class="nav-item">
        <a class="nav-link" href="/Ambassador">AMBASSADORS</a>
      </li>
      <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:380}}></span>
      <li class="nav-item">
        <a class="nav-link" href="/LoginPage" style={{marginLeft:20}}>Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/registerPage"> SIGN-UP</a>
      </li>
    <span style={{marginLeft:30, marginTop:10 ,color:'rgb(207, 64, 12)', fontWeight:700}}> ENG</span>
    </ul>
  </div>
</nav>) : (
 
 <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed" ,width:"100% ",top: 0,  zIndex:9999}}>
  <a class="navbar-brand" href=""> 
  <img src={maptours} width="65" height="50" class="d-inline-block align-top" alt="maptours.png"/>  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/"><span  style={{color: "rgb(207, 64, 12)", fontWeight:700}}>  Home</span>  </a>
      </li>
      <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:20}}></span>
      <li class="nav-item">
        <a class="nav-link" href="/Ambassador">AMBASSADORS</a>
      </li>
      <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:320}}></span>
      <li class="nav-item">
      <a class="nav-link"  href={ user.role=='admin'? "/Profileadmin" :"/Profile"}> <Image  src={user.image.url}  width="40" height="40" style={{marginLeft:20}} roundedCircle/></a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href=""> <Button variant="primary" onClick={() => dispatch(logout())}  > Logout </Button> </a>
      </li>
      <span style={{marginLeft:30, marginTop:15 ,color:'rgb(207, 64, 12)', fontWeight:700}}> ENG</span>
    </ul>
  </div>
</nav>
)}
</> 
)}
export default Navbar



