import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  updatePostUser } from '../redux/actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function EditPost({ post }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [postvalidated, setPostvalidated] = useState(post);
  const dispatch = useDispatch();

 const handleChange = (e) => {
    setPostvalidated({...postvalidated, isValidate:e.target.value} );
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePostUser( postvalidated._id, postvalidated));
  };
  return (
    <>
      <Button variant='primary' onClick={handleShow} 
      style={{ marginLeft:200 }}  > 
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}  > 
        <Modal.Header closeButton  >
          <Modal.Title  style={{color:"gray" }} > Validate Post </Modal.Title>
        </Modal.Header>
        <Modal.Body  >
          <form >  
                   
    <form className="flex-column-center"  onChange={handleChange} >
            <select class="form-select" aria-label="isValidate?" style={{backgroundColor:"grey", color:"white" }}>
            <option value="isValidate?"> isValidate? </option>
             <option value="false"> false </option>
             <option value="true">true </option>
            </select>
            </form>  

            <button type='submit' onClick={handleSubmit} 
            style={{backgroundColor:"blue", color:"white",marginLeft:200 }} >
              Save
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}