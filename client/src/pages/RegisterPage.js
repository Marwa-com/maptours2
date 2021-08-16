import React, { useEffect, useState } from 'react';
import Compressor from 'compressorjs';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import Navbottom from '../component/Navbottom'
import Navbar from '../component/Navbar'
function Copyright() {
    return (
       
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
            map-Tours
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    paper: {
       marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
       
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

export default function RegisterPage() {
    const classes = useStyles();
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [info, setInfo] = useState({
        firstname: "",
        lastname: '',
        nickname: '',
        email: '',
        password: ''
    })

    const handleInfoChange = (e) => {
     setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(info))
    }

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
                        setInfo({ ...info,image: reader.result })
                    }

                }
            })
        }
    }
      useEffect(() => {
        if (auth.isAuth && auth.user) {
             history.push('/Profile')
        }
    }, [auth.isAuth && auth.user])

    return (
        <div style={{marginTop:30}} >
        <Navbar/>
        <Container component="main" maxWidth="xs" style={{marginBottom:30}}  >
            <CssBaseline />
            <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={selectedImage && handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column" }}>
                            {selectedImage && <img name="preview" style={{ height: "120px", width: "80px" }} src={selectedImage } alt="preview"></img>}
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span" style={{marginLeft:150}} >
                                    Upload
                                </Button>
                            </label>

                        </Grid>
                        <Grid item xs={12} sm={6}> 
                            <TextField
                             
                                autoComplete="fname"
                                name="firstname"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="lname"
                                name="lastname"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="last Name"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="nname"
                                name="nickname"
                                variant="outlined"
                                required
                                fullWidth
                                id="nickName"
                                label="nick Name"
                                autoFocus
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInfoChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create your APP Account
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/LoginPage" variant="body2">
                                Already have an account? login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
        <Navbottom/>
        </div>
      
    );
}