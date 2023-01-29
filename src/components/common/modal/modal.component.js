import React from 'react'
import classes from './modal.module.css'
import Lab12 from '../../../assets/photos/Lab 1.2.jpeg'
import Lab11 from '../../../assets/photos/Lab 1.1.jpeg'
import Lab13 from '../../../assets/photos/Lab 1.3.jpeg'
import Lab14 from '../../../assets/photos/Lab 1.4.jpeg'
import Lab21 from '../../../assets/photos/Lab 2.1.jpeg'
import Lab22 from '../../../assets/photos/Lab 2.2.jpeg'
import Lab23 from '../../../assets/photos/Lab 2.3.jpeg'
import Lab24 from '../../../assets/photos/Lab 2.4.jpeg'
import Lab25 from '../../../assets/photos/Lab 2.5.jpeg'
import Lab31 from '../../../assets/photos/Lab 3.1.jpeg'
import Lab32 from '../../../assets/photos/Lab 3.2.jpeg'
import Lab33 from '../../../assets/photos/Lab 3.3.jpeg'
import Lab34 from '../../../assets/photos/Lab 3.4.jpeg'
import Lab41 from '../../../assets/photos/Lab 4.1.jpeg'
import Lab42 from '../../../assets/photos/Lab 4.2.jpeg'
import Lab43 from '../../../assets/photos/Lab 4.3.jpeg'
import Lab44 from '../../../assets/photos/Lab 4.4.jpeg'
import Lab45 from '../../../assets/photos/Lab 4.5.jpeg'
import { Carousel } from 'react-responsive-carousel'

const ModalComponent = ({lab,setShowModal}) => {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.backdrop} onClick={()=>setShowModal(false)}>

            </div>
            <h3>Photos for lab {lab}</h3>
            {lab === 1 && 
            <div className={classes.Slide}>
                <Carousel showThumbs={false}> 
    

                <div className={classes.img}>
                <img src={Lab11} />
                </div>

                <div className={classes.img}>
                <img src={Lab12}/>
                </div>

                <div className={classes.img}>
                <img src={Lab13} />
                </div>

                <div className={classes.img}>
                <img src={Lab14} />
                </div> 

            
            </Carousel>
            </div>}
            {lab === 2 && 
            <div className={classes.Slide}>
            <Carousel showThumbs={false}>
    

                <div className={classes.img}>
                <img src={Lab21} />
                </div>

                <div className={classes.img}>
                <img src={Lab22}/>
                </div>

                <div className={classes.img}>
                <img src={Lab23} />
                </div>

                <div className={classes.img}>
                <img src={Lab24} />
                </div> 

                <div className={classes.img}>
                <img src={Lab25} />
                </div> 

            
            </Carousel>
            </div>}
            {lab === 3 && 
            <div className={classes.Slide}>
            <Carousel showThumbs={false}>
            

                <div className={classes.img}>
                <img src={Lab31} />
                </div>

                <div className={classes.img}>
                <img src={Lab32}/>
                </div>

                <div className={classes.img}>
                <img src={Lab33} />
                </div>

                <div className={classes.img}>
                <img src={Lab34} />
                </div> 

            
            </Carousel>
            </div>}
            {lab === 4 && 
            <div className={classes.Slide}>
            <Carousel showThumbs={false}>
        

                <div className={classes.img}>
                <img src={Lab41} />
                </div>

                <div className={classes.img}>
                <img src={Lab42}/>
                </div>

                <div className={classes.img}>
                <img src={Lab43} />
                </div>

                <div className={classes.img}>
                <img src={Lab44} />
                </div> 

                <div className={classes.img}>
                <img src={Lab45} />
                </div> 

            
            </Carousel>
            </div>}
        </div>
    )
}

export default ModalComponent
