import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Homecarousel() {
  return ( 
    <div  style={{minWidth:"100vh" }} >
    <Carousel  style={{ width:'1290px',height:'500px', marginTop:10, justifyContent: "center",borderStyle:"solid",borderWidth: "0px 15px 0px 15px" }}>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://i1.wp.com/www.leconomistemaghrebin.com/wp-content/uploads/2017/11/tourisme-l-economiste.jpg?fit=1200%2C736&ssl=1"
        alt="First slide"
        style={{width:'500px',height:'500px'}}
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="http://www.lediplomate.tn/wp-content/uploads/2017/08/BN26114patrimoine-tunisie.jpg"
        alt="Second slide"
        style={{width:'500px',height:'500px'}}
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item >
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://www.albawaba.com/sites/default/files/styles/d08_standard/public/im_new/rimshami/Tunisia_Apr21_shutterstock.png?h=c71d0c67&itok=RMpMfDcE&mrf-size=m"
        alt="Third slide"
        style={{width:'300px',height:'500px'}}
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item >
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://www.planetware.com/photos-large/TUN/tunisia-tunis-olive-tree-mosque-rooftop-terrace.jpg"
        alt="Forth slide"
        style={{width:'300px',height:'500px'}}
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item >

    <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.adequatetravel.com/blog/wp-content/uploads/2020/02/El-Djem.jpg"
      alt="5th slide"
      style={{width:'300px',height:'500px'}}
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item >

  <Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://tunisie.co/uploads/images/content/matmata-040316-5.jpg"
    alt="6th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://upload.wikimedia.org/wikipedia/commons/5/50/SidBS_%2847%29.JPG"
    alt="7th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://media-cdn.tripadvisor.com/media/photo-s/01/40/09/07/route-de-ain-draham.jpg"
    alt="8th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://www.voyage-tunisie.info/wp-content/uploads/2017/11/loisir-tabarka5-800x500.jpg"
    alt="9th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://tripvoyages.com/wp-content/uploads/2019/12/desert.jpg"
    alt="10th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://www.lechotouristique.com/wp-content/uploads/2020/06/sidebyside-4604270_1280.jpg"
    alt="11th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bardo_Museum_-_Carthage_room.jpg/1200px-Bardo_Museum_-_Carthage_room.jpg"
    alt="12th slide"
    style={{width:'300px',height:'500px'}}
  />
  <Carousel.Caption> 
  </Carousel.Caption>
</Carousel.Item >
  </Carousel>
    </div>
  )
}
export default Homecarousel ;