import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActions, CardMedia, Typography, CardActionArea, CardContent, IconButton, Box} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import { useDispatch } from 'react-redux';
import { updatelike } from '../redux/actions/postActions';

const useStyles = makeStyles((theme) =>({
    root: {
      maxWidth: 345,
      backgroundColor:"#023c57",
      marginLeft:20,
    },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white', 
 backgroundColor:'#023c57', 
  },
  rate:{
    marginLeft:100,
   },
    media: {
    height:0,
    paddingTop: "56.25%", 
    marginTop:0,
    }
  })
);

const Post = ({post}) => {

  const dispatch = useDispatch();
  const classes = useStyles();
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
        <Typography variant="body2"  color="textSecondary"  component="p" style={{color:"white"}}>
           {post.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{color:"orange"}} onClick={() => dispatch(updatelike(post._id))} >
          <FavoriteIcon style={{color:"red", fontSize:40 }} /> <span style={{marginLeft:140 }}> {post.likecount}  Likes </span>
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default Post