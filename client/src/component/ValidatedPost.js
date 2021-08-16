import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@material-ui/lab'
import LimitSelector from './LimitSelector'
import {getvalidatedPost, getPostCount} from '../redux/actions/postActions'
import ListofPost from './PostList'
import Filtre from './Filtre'
import AddPost from './addpost'
import {Link} from 'react-router-dom';
import maptours  from './maptours.PNG'

const ValidatedPost = () => {
const postList = useSelector(state => state.posts.postList)
const count = useSelector(state => state.posts.count)
const dispatch = useDispatch()
const [page, setPage] = useState(1)
const [limit, setLimit] = useState(4)
const [addword,setAddword] = useState("")
const [catword, setCatword] = useState("")

useEffect(() => {
    dispatch(getPostCount())
   dispatch(getvalidatedPost(page, limit))
}, [])
const handlePageChange = (e, p) => {
    setPage(p)
    dispatch(getvalidatedPost(p, limit))
}
  const  Address=(add)=>{ 
    setAddword(add==="select address of post"? "":add)
  }
 const  Category=(cat)=>{
    setCatword(cat==="select category of post"? "":cat)
  }
return (
    <div  >
     <div style={{backgroundColor:"#f2f2f8", marginLeft:280 , display:"flex" ,padding:8, position:"fixed",
       width:"90% ",top: 0, zIndex:9999}} >
       <img src={maptours} width="65" height="50" class="d-inline-block align-top" alt="maptours.png" 
       style={{marginRight:20,marginLeft:60}} />
     <Link to="/" >
       <img src="https://img.icons8.com/fluency/48/000000/home-page.png"/></Link>
       <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:40}}></span>
     <Link to="/Ambassador" style={{marginTop:20, marginLeft:50,textDecoration:'none', color:'rgba(0,0,0,.55)',
       fontSize:15 }} > Become an ambassador </Link>
       <span style={{ backgroundColor:"#023c57" ,height:50,width:5,marginLeft:280}}></span>
       <a href="#BottomOfPage" style={{marginTop:20, marginLeft:40,textDecoration:'none', color:'rgba(0,0,0,.55)',
       fontSize:15}} > add your post  </a>
       <span style={{marginLeft:30, marginTop:15 ,color: "rgb(207, 64, 12)", fontSize:20,marginRight:50}}> ENG</span>
      </div>
        <Filtre Address={Address} Category={Category}  />
        <ListofPost postList={postList.filter(el=>el.address.includes(addword) && el.Category.includes(catword)) } />
        <a name="BottomOfPage">  </a>
        <Pagination count={Math.ceil(count / limit)} onChange={handlePageChange} />
        <AddPost />  
        <LimitSelector setLimit={setLimit} />  
 
    </div>
)}
export default ValidatedPost

