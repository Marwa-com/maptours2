import { logout } from '../redux/actions/authActions'; 
import  {React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/authActions";
import { Image } from "react-bootstrap";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import {ProSidebar, Menu, MenuItem, SidebarHeader,SidebarFooter,SidebarContent} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./css_component/ProfileNavbar.css";
const ProfileNavbar = () => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProfile());   
    }, []);

    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <div  >
      <div id="header"  >
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}  >
        <SidebarHeader>
        <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
          {menuCollapse ? (
            <FiArrowRightCircle/>
            ) : (
            <FiArrowLeftCircle/>
          )}
        </div>
      </SidebarHeader>
          <SidebarContent >
            <Menu iconShape="square" >
              <MenuItem active={true} style={{marginBottom:"0px",height:"1040px"}} >
          <MenuItem >  
              <Image
               src=  {user.image.url} 
               alt="profile picture"
               width="100"
               height="90"
               roundedCircle
             /> 
            </MenuItem>  
              <MenuItem icon={<img src="https://img.icons8.com/fluency/48/ffffff/user-location.png"/>}>
                {user.nickname}</MenuItem>
              <MenuItem icon={<img src="https://img.icons8.com/plumpy/24/ffffff/user.png"/>}>
                {user.role}</MenuItem>
              <MenuItem icon={<img src="https://img.icons8.com/color/24/000000/counter.png"/>}>{user.points}
              </MenuItem>
              <MenuItem onClick={() => dispatch(logout())}  icon={<LockTwoToneIcon/>}>Logout</MenuItem> 
              <Image src="https://i.pinimg.com/originals/df/1d/88/df1d88f9c5d301213482037f0c246be8.jpg" 
               style={{width:190, marginLeft:10, marginTop:20,height:280 }} />               
              </MenuItem>  
            </Menu>
          </SidebarContent>  
        </ProSidebar>
      </div>
    </div>
  );
};
export default ProfileNavbar