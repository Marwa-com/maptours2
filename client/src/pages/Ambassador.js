import React from 'react'
import Navbottom from '../component/Navbottom'
import Navbar from '../component/Navbar'
import  '../component/css_component/Ambassador.css'
const Ambassador = () => {
    return (
        <div  className="ambssador"  >
        <div >
        <Navbar/>
        </div>
        
        <div className="ambss" >
        <h1  > Ambassador </h1>
        <img className="img_ambassador"
        src="https://thumbs.dreamstime.com/b/brand-ambassador-abstract-concept-vector-illustration-official-representative-trademark-marketing-strategy-media-figure-public-205991164.jpg"
        alt="LOGO"
        className="LOGO"
          />
        <p > Become an ambassador by helping us to list the good and specific addresses in your town 📝<br/>
            
            👉 To become an Map-Tours ambassador, it'simple ! All you have to do is sign up and share your experience with a nice picture and a well-written description for being added with our posts.<br/>
            

            👉 After every validation of post suggestion, the  post's owner get a point.<br/>

            
            👉 Every month, we have a gift(spending weekend in hotel / a dinner... ) to the ambassador who has the best score.<br/>
            
                
            👉 From your very first validated place suggestion, you join the great family of ambassadors. Don't wait any longer !

           </p> 
           
        </div>
        <div>
        <Navbottom />
        </div>
        </div>
    )
}

export default Ambassador