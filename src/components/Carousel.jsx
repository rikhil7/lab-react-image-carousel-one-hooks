import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [count,setCount] = useState(0)

    const next = ()=>{
        if (count<images.length-1){
            setCount(count+1)
        }else{
            setCount(0)
        }
    }

    const prev = ()=>{
        if (count>0){
            setCount(count-1)
        }else{
            setCount(images.length-1)
        }
    }

    return(
        <div id="carousel">
            <div className="arrow left">
                <ArrowBackIosIcon style={{color:"white", cursor:"pointer"}} onClick={prev}/>
            </div>
            <div className="img">
                <div className="title">{images[count].title}</div>
                <img src={images[count].img} alt="" />
                <div className="subtitle">{images[count].subtitle}</div>
            </div>
            <div className="arrow right">
                <ArrowForwardIosIcon style={{color:"white", cursor:"pointer"}} onClick={next}/>
            </div>
        </div>
    )
}

export default Carousel;