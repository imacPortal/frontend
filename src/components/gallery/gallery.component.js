import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header3Component from '../common/header3/header3.component';
import classes from './gallery.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Pic from '../../assets/loginimg.png';


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
             <img src={Pic} />
            </div>

            <div className={classes.img}>
            <img src={Pic}/>
            </div>

            <div className={classes.img}>
            <img src={Pic} />
            </div>

            <div className={classes.img}>
            <img src={Pic} />
            </div>

            <div className={classes.img}>
            <img src={Pic} />
            </div>

            <div className={classes.img}>
            <img src={Pic} />
            </div>
                      
          </Carousel>
      

      </div>
    </div>
  )
}

export default GalleryComponent
