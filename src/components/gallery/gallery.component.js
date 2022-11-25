import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header3Component from '../common/header3/header3.component';
import classes from './gallery.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Pic from '../../assets/loginimg.png';

import Img1 from '../../assets/photos/img1.jpeg'
import Img2 from '../../assets/photos/img2.jpeg'
import Img3 from '../../assets/photos/img3.jpeg'
import Img4 from '../../assets/photos/img4.jpeg'
import Img5 from '../../assets/photos/img5.jpeg'
import Img6 from '../../assets/photos/img6.jpeg'
import Img7 from '../../assets/photos/img7.jpeg'
import Img8 from '../../assets/photos/img8.jpeg'
import Img9 from '../../assets/photos/img9.jpeg'
import Img10 from '../../assets/photos/img10.jpeg'
import Img11 from '../../assets/photos/img11.jpeg'


const GalleryComponent = () => {
  return (
    <div>
      <Header3Component/>
      <div>
          <div className={classes.heading}>
            <h2>Gallery</h2>
          </div>

          <Carousel className={classes.Slide}>
            <div className={classes.img}>
             <img src={Img1} />
            </div>

            <div className={classes.img}>
            <img src={Img2}/>
            </div>

            <div className={classes.img}>
            <img src={Img3} />
            </div>

            <div className={classes.img}>
            <img src={Img4} />
            </div>

            <div className={classes.img}>
            <img src={Img5} />
            </div>

            <div className={classes.img}>
            <img src={Img6} />
            </div>

            <div className={classes.img}>
            <img src={Img7} />
            </div>

            <div className={classes.img}>
            <img src={Img8} />
            </div>

            <div className={classes.img}>
            <img src={Img9} />
            </div>

            <div className={classes.img}>
            <img src={Img10} />
            </div>

            <div className={classes.img}>
            <img src={Img11} />
            </div>
                      
          </Carousel>
      

      </div>
    </div>
  )
}

export default GalleryComponent
