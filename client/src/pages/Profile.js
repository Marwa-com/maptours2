import React, { useEffect } from 'react';
import ValidatedPost from '../component/ValidatedPost'
import ProfileNavbar from '../component/ProfileNavbar'
const Profile = () => {
  
    return (
        <div style={{ display:"flex", flexDirection:"column"  , margin:0 ,backgroundColor:"white"}} >  
          <ProfileNavbar  />
          <ValidatedPost />    
        </div>
    )
}
export default Profile