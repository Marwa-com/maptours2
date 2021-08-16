 import React, { useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux'
import { getUsers,deleteUser  } from '../redux/actions/usersActions';
import EditUser from './EditUser'
import {Button, Table} from 'react-bootstrap'
import { Link} from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());    
    }, []);
   const userslist  = useSelector((state) => state.users.users);
  
    return (
        <div style={{marginTop:50, width:"90%", marginLeft:70, marginBottom:50   }} >
          <h5 style={{ color:"rgba(0,0,0,.55)",marginBottom:30 ,fontWeight:700}}> List of users :</h5>   
          <Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th>nickname</th>
    <th>id</th>
    <th> Role</th>
    <th> points</th>
    <th> Edit_role</th>
    <th> Delete</th>
  </tr>
</thead>
<tbody>  
{ userslist &&
       userslist.map((user) =>
<tr >
      <td>{user.nickname}</td>
      <td>{user._id} </td>
      <td>{user.role}</td>
      <td>{user.points}</td>
      <td> <EditUser user={user}/> </td>
      <td>  <Button  variant="danger" onClick={() => dispatch(deleteUser(user._id))}>delete</Button>  </td>
    </tr>
       )}
</tbody>
</Table>
<Link to="/Profileadmin"> dashboard </Link>
        </div>
    )
}
export default UserList  




