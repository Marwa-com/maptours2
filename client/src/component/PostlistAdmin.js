import React from 'react'
import PostAdmin from './PostAdmin'
import {useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
const ListPostAdmin = () => {
    const postList = useSelector(state => state.posts.postList)
    return (
        <div className="container" style={{marginTop:30, marginBottom:50 }}> 
         <h5 style={{ color:"rgba(0,0,0,.55)",marginBottom:30 , marginLeft:35 ,fontWeight:700}}>   List of valitated posts : </h5> 
        <div className="container" style={{display: "grid", gridTemplateColumns:"repeat(3,30%)", gridGap: "25mm", marginBottom:30 }}>   
           {postList.length && postList.map((post, index) => <PostAdmin key={index} post={post}></PostAdmin>).reverse()}
        </div>
        <Link to="/Profileadmin" style={{marginLeft:40 }}  > dashboard </Link>
        </div>
    )
}
export default ListPostAdmin 

