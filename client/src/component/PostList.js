import React from 'react'
import Post from './Post'
import LoadingComponent from './LoadingComponent'

const ListofPost = ({postList}) => {
    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,50%)", gridGap: "5mm", marginLeft:370, width:"70%",marginTop:20}}> 
                <LoadingComponent/>
                {postList.length && postList.map((post, index) => <Post key={index} post={post}> </Post>).reverse() }      
        </div>
       )
}

export default ListofPost