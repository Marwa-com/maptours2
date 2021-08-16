import React,{useEffect} from 'react';
import { logout } from '../redux/actions/authActions';
import {useDispatch, useSelector } from 'react-redux'
import UserList from '../component/UserList'
import { Link, Route, Switch } from 'react-router-dom';
import ListPostAdmin from '../component/PostlistAdmin'
import PostListTovalidate from '../component/PostListTovalidate'
import {getInvalidatedPost, getvalidatedPost}  from '../redux/actions/postActions'
import {Navbar, Nav, Container, Image, Button} from 'react-bootstrap'
import maptours  from '../component/maptours.PNG'
import Navbottom from '../component/Navbottom'

const Profileadmin = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getInvalidatedPost ())
    dispatch(getvalidatedPost ())
}, [])
    return (
      <>
        <div style={{display:"flex", flexDirection: "column",minHeight:'100vh'}}>          
<Navbar   bg="light" expand="lg"   sticky="top" style={{padding:0}} >   
   <Container >
    <img src={maptours} width="65" height="50" class="d-inline-block align-top" alt="maptours.png" style={{marginBottom:10}} />
   <Link to="/" style={{color: "rgb(207, 64, 12)", fontSize:20  ,textDecoration:'none'}}>
    <img src="https://img.icons8.com/fluency/48/000000/home-page.png"/></Link>
    <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:50}}></span>
   <Image src={user.image.url} alt="profile picture" roundedCircle style={{width:50, height:40,marginBottom:15,marginLeft:25 }}  /> 
   <Link style={{ color:'rgba(0,0,0,.55)', textDecoration:'none', fontSize:15,marginBottom:15,marginLeft:10 }} >  {user.firstname} {user.lastname} <br/> 
    <span  style={{color:'rgb(207, 64, 12)'}} >{user.role} </span> 
   </Link>
   <Nav  className="me-auto" style={{ marginLeft:80, textDecoration:'none' }}>
    <ul >
     <li ><img src="https://img.icons8.com/officexs/16/000000/moleskine.png"/><Link style={{ color:'rgba(0,0,0,.55)', textDecoration:'none', fontSize:15,marginLeft:0 }}  to={`/Profileadmin/UserList`} >List of Users</Link></li>
     <li><img src="https://img.icons8.com/officexs/16/000000/moleskine.png"/><Link style={{ color:'rgba(0,0,0,.55)', textDecoration:'none', fontSize:15,marginLeft:0  }}  to={`/Profileadmin/PostListTovalidate`} >List of Invalidated Posts </Link></li>
     <li><img src="https://img.icons8.com/officexs/16/000000/moleskine.png"/><Link style={{ color:'rgba(0,0,0,.55)', textDecoration:'none', fontSize:15 ,marginLeft:0 }}  to={`/Profileadmin/ListPostAdmin`} >List of Validated Posts </Link></li>
    </ul>
     <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:150,marginTop:15}}></span> 
    </Nav>
    <Button onClick={() => dispatch(logout())}>logout</Button>
     <span style={{marginLeft:40, marginTop:10 ,color: "rgb(207, 64, 12)", fontSize:20,marginRight:10}}> ENG</span>
    </Container>
  </Navbar>
 <Switch  >
    <Route  path={`/Profileadmin/UserList`} render= {(props) =>{ return (<UserList {...props}/>)}}/> 
    <Route path={`/Profileadmin/ListPostAdmin`}  render= {(props) =>{ return (<ListPostAdmin {...props} />)}}/> 
    <Route path={`/Profileadmin/PostListTovalidate`}  render= {(props) =>{ return (<PostListTovalidate {...props} />)}}/>  
</Switch>
         <PostListTovalidate/>
         <Navbottom/>
       </div>
       </>
    )
}
export default Profileadmin