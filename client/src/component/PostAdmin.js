import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {Card, CardActions, CardMedia, Typography, CardActionArea, CardContent, IconButton, Box} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import EditPost from './EditPost'
import { deletePost} from '../redux/actions/postActions';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor:"#023c57",
      marginLeft:20,
    },
    rate:{
     marginLeft:100,
    },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white', 
 backgroundColor:'#023c57', 
  },
    media: {
    height:0,
      paddingTop: "56.25%", 
    marginTop:0, 
    }
  })
);

const PostAdmin = ({ post}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(post)
  return (
     <Card className={classes.root}> 
      <CardActionArea > 
      <CardMedia
        className={classes.media}
        image={post.image.url} 
      />
       <div  className={classes.rate}> 
       <Box component="fieldset" mb={1} borderColor="transparent" >
          <Rating name="read-only" value={post.Rate}  readOnly />
        </Box>
       </div>
      <CardContent>
      <Typography className={classes.overlay} gutterBottom variant="body1"  component="h2"  >
            {post.title}
          </Typography>
          <Typography variant="body1"  color="textSecondary"  component="p" style={{color:"black"}}>
           {`${post.address}, ${post.Category}`}
        </Typography>
        <Typography variant="body2"  color="textSecondary"  component="p" style={{color:"white"}}>
           {post.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton size="small" color="primary" style={{color:"red"}}  onClick={() => dispatch(deletePost(post._id))} ><DeleteIcon fontSize="small" /> Delete</IconButton>
      {!post.isValidate && <EditPost  post={post}   /> } 
      </CardActions>
    </Card>
  );
};
export default PostAdmin ;








