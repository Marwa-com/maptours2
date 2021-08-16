import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory,Link } from 'react-router-dom'
import { login } from '../redux/actions/authActions'
import {Avatar,Button, CssBaseline ,TextField,Grid ,Box , Typography ,Container,styles,makeStyles }from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const LoginPage = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
  const auth = useSelector(state => state.auth)
  const classes = useStyles();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))
    }
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth && auth.user)
       auth.user.role==="admin"? history.push('/Profileadmin'):  history.push('/Profile')
            
    }, [auth.isAuth, auth.user])   
   
    return (
        <div style={{marginTop:50}} > 
            <Navbar/>
        <Container component="main" maxWidth="xs" style={{ marginBottom:55}}>
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
            
            <Typography component="h1" variant="h5"  >
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                   
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setInfo({ ...info, email: e.target.value }) }
                           
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
                            onChange={(e) => setInfo({ ...info, password: e.target.value })}
                         
                        />
                    </Grid>

                    <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                submit  
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link to="/registerPage" variant="body2">
                        you haven't any account? Sign up
                    </Link>
                </Grid>
            </Grid>
                </Grid>
                
                </Grid>
                
                
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
    </Container>
     <Navbottom />  
     </div>
);
}
export default LoginPage