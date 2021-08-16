import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateUser } from '../redux/actions/usersActions';

export default function EditUser({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserInfo({...userInfo,[e.target.name] :e.target.value} );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser( userInfo._id, userInfo));
  };
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"gray"}} >Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  style={{ marginLeft:100}}>
            <input
              type='text'
              value={userInfo.role}
              placeholder='Role'
             name='role'
              onChange={handleChange}
            />
            <button type='submit' onClick={handleSubmit}>
              Save
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}