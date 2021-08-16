import React from "react";
import { Row, Col } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Homecarousel from "./Homecarousel";
import './css_component/HomePage.css'
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 1,2,1 ),
    justifyContent:"center",
    marginRight:80,
  },
  col1:{
    marginTop:80,
  },
  map:{
    marginRight:30,
    color:"#023c57",
    fontFamily:" var(--bs-font-sans-serif)",
   fontSize:" 1.3rem",
  fontWeight: 400,
 lineHeight: 1.5,
  },
  tours:{
    marginLeft:65,
    textAlign:"justify",
    width: 465,
 	fontFamily:" var(--bs-font-sans-serif)",
   fontSize:" 1.2rem",
  fontWeight: 400,
 lineHeight: 1.5,
  },
  like:{
color:"#023c57",
fontFamily:" var(--bs-font-sans-serif)",
fontSize:" 1.3rem",
fontWeight: 400,
 lineHeight: 1.5,
 marginLeft:30,
 marginBottom:40
},
idea:{
textAlign:"center",
fontFamily:" var(--bs-font-sans-serif)",
fontSize:" 1.2rem",
fontWeight: 400,
lineHeight: 1.5,
width:1000,
marginLeft:140,
},
title:{
color:"#023c57",
fontFamily:" var(--bs-font-sans-serif)",
fontSize:" 1.3rem",
fontWeight: 400,
lineHeight: 1.5,
marginLeft:50
}
}));
function HomePage() {
  const classes = useStyles();
  return (
    <main >
      <div className={classes.heroContent} >
      <div className="Container">
        <Container>
          <Row className="Row1" > 
          <Col className={classes.col1}>
            <Homecarousel />
            </Col>      
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col style={{justifyContent:"center"}}>
              <Typography
              className={classes.map}
                component="h5"
               variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              
              >
             Map-Tours
              </Typography>
              <Typography
             className={classes.tours}
             variant="h6"
             color="textSecondary"
             paragraph
              >
              Map-Tours is the sustainable and responsible city guide in the form of a web site that helps you choose your next destination.Do not hesitate to join us and do not miss the adventure of discovery new places.
        
              </Typography>
            </Col>
            <Col>
            <Typography
                 className={classes.map}
                component="h5"
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              >
             Map-Tours's principle
              </Typography>
            <Typography
            className={classes.tours}
            variant="h6"
            color="textSecondary"
            paragraph
            >
           With Map-Tours Travel with pleasure,and Have Positive experiences,every day.
           We are here to provide you with the most beautiful places to spend the most enjoyable times
            </Typography>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Typography
           className={classes.like}
            component="h5"
            variant="h5"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Why you'll like  Map-Tours
          </Typography>
          <br />
          
          <Row>
          <Col className="icons1" >
          <div className="icons" >
              <i class="bi bi-person-fill"></i>
              <Typography
                variant="h6"
                align="center"
               color="textSecondary"
                paragraph
              >
              <span style={{color:'white'}}> RESPONSIBLE</span>
              </Typography>
              <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph  
            >
            <img src="https://img.icons8.com/ios/50/ffffff/check-all--v2.png"/>
            </Typography> 
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
              <span style={{color:'white'}}>
              Discover responsible content with<br/> quality addresses each validated and verified<br/> in accordance with our selection criteria.
              </span>
              </Typography>
              </div>
            </Col>
            <Col className="icons2">
            <div className="icons" >
              <i class="bi bi-file-earmark-person-fill"></i>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
              <span style={{color:'white'}}>EASY</span>
              </Typography>
              <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
            <img src="https://img.icons8.com/ios/50/ffffff/easy.png"/>
            </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
              <span style={{color:'white'}}>Get inspired and book responsible and local offers in a few clicks</span>
              </Typography>
              </div>
            </Col>
            <Col className="icons3" >
            <div className='icons'>
              <i class="bi bi-hand-thumbs-up-fill"></i>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
             <span style={{color:'white'}}> COMMUNITY</span>
              </Typography>
              <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph 
            >
            <img src="https://img.icons8.com/dotty/80/ffffff/teamwork.png"/>
            </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
              <span style={{color:'white'}}>Share your experiences and friendly addresses to create an active community</span>
              </Typography>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Typography  className={classes.title}
            component="h5"
            variant="h5"
            align="center"
            color="textPrimary"
            gutterBottom
          >
          Map-Tours’idea
          </Typography>
          <Typography
          className={classes.idea}
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
          Map-Tours’idea is simple: to make it easier to find a hotel, a restaurant, a pretty coffee, an arts and crafts store. Already there are many places referenced in Tunisia. 
          This sustainable and responsible city guide will be your best companion to select your next trip.
          </Typography>
        </Container>
        </div>
      </div>
    </main>
  );
}

export default HomePage;