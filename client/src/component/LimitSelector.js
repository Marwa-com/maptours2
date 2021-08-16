import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { getvalidatedPost } from '../redux/actions/postActions';

export default function LimitSelector({ setLimit }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const handleClose = (e) => {
        dispatch(getvalidatedPost(1, +e.target.value))
        setLimit(+e.target.value)
    };

    return (
        <div>
       <Menu
                id="simple-menu"
                keepMounted
                onClose={handleClose}
            > 
                 <MenuItem value={5} onClick={handleClose}>5</MenuItem>
         </Menu> 
        </div>
    );
}