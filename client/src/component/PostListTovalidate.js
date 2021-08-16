import React from 'react'
import PostAdmin  from './PostAdmin'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom';
const PostListTovalidate = () => {

    const postListTovalidate = useSelector(state => state.postTovalidate.postListTovalidate)
    return (
        <div style={{ width:"80%",marginTop:30 , marginBottom:50 }}>
         <h5 style={{ color:"rgba(0,0,0,.55)",marginBottom:30 , marginLeft:70,fontWeight:700}}>   List of invalitated posts : </h5>   
        <div style={{ display: "grid", gridTemplateColumns:"repeat(3,30%)", gridGap: "25mm", marginBottom:30, marginLeft:50}}>
            {postListTovalidate.length && postListTovalidate.map((post, index) => 
            <PostAdmin  key={index} post={post}></PostAdmin>).reverse()}
        </div>
        <Link to="/Profileadmin" style={{marginLeft:70 }} > dashboard </Link>
        </div>
    )
}

export default PostListTovalidate