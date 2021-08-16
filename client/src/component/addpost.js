import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'
import Compressor from 'compressorjs'
import { Button, makeStyles, TextareaAutosize, TextField, Grid, Box, Typography, Container, CssBaseline} from "@material-ui/core"
//import Icon from '@material-ui/core/Icon';
import DropDown from './DropDown'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       border: "solid, 3, darkslateblue",
    },
    
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddPost = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [newPost, setNewPost] = useState({title: "", description: "", Category: "", address:"", Rate:""  })

    const handleImageChange = (e) => {
        if (e.target.files.length) {
            const myImage = e.target.files[0]
            new Compressor(myImage, {
                quality: 0.8,
                success(result) {
                    const reader = new FileReader()
                    reader.readAsDataURL(result)
                    reader.onloadend = () => {
                        setSelectedImage(reader.result)
                        setNewPost({ ...newPost,image: reader.result })
                    }
                }
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( selectedImage) {
        dispatch(addPost(newPost));
        alert("post added !"); 
        clear();
    }
        else {
            alert("echec!");   
        }
   
    }
    const handleChange = (e) => {
     setNewPost({ ...newPost, [e.target.name]: e.target.value })
    }
    const handleDropDownChange =(value)=>{
     setNewPost({ ...newPost,  ... value })

    }
      const clear = () => {
    setNewPost({selectedImage: '',title: '', description: '', Category: '', address:'', Rate:''  });
  };
    return (
          <Container component="main" maxWidth="xs" style={{marginBottom:"20px"}}>
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h5">
                    Add a post 
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit  }
             noValidate> 
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column" }}>
                {selectedImage && <img name="preview" style={{ height: "200px" }} src={selectedImage} alt="preview"></img>}
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
                  </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="title"
                                name="title"
                                variant="outlined"
                                required
                                fullWidth
                                id="Name"
                                label=" Name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="Rate"
                                name="Rate"
                                variant="outlined"
                                required
                                fullWidth
                                id="Rate"
                                label=" Rate"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                <Grid item xs={12}  >        
                            <DropDown label="address" itemList={["select address of post","Sousse","Monastir","Mahdia"]} handleItemChange={handleDropDownChange}/>
                        </Grid>
              <Grid item xs={12} >
                          
                             <DropDown label="Category" itemList={["select category of post","restaurants and cafes","Hotels and parks","craft center"]} handleItemChange={handleDropDownChange}/>
                        </Grid>
                  <Grid item xs={12} >
                <TextareaAutosize aria-label="Post description"
                name="description"
                    placeholder="Post Description"
                    style={{ height: "100px", width: "100%", boxShadow: "5px 5px grey" }}
                    onChange={handleChange}
                />
                </Grid>
                </Grid>
                <Button type="submit"  variant="contained" color="primary" className={classes.submit} fullWidth >send  </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
             </div>
      </Container>
    );
}
export default AddPost