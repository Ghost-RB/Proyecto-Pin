import CardGhost from '../CardGhost';
// import Carousel from 'react-grid-carousel'
import images from '../../Images'
import {
    ghostOne,
    ghostTwo,
    ghostThree,
    ghostFour,
    ghostFive,
    ghostSix,
    ghostSeven,
    ghostEight
} from './GhostData'
import './index.scss'
// import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from 'react';

function Images(){
    const [slideToView, setSlideToView] = useState(3)
    
    window.addEventListener('resize', function(event){
        const viewPortWidth = window.innerWidth
        // console.log("ENTRAMOS AL EVENT LISTENER CON VIEWPORT ", viewPortWidth)
        if (viewPortWidth > 600){
            // console.log("ENTRAMOS AL IF PORQUE ES 600")
            setSlideToView(3)
        }else if(viewPortWidth > 450 && viewPortWidth <= 600){
            setSlideToView(2)
        }else{
            setSlideToView(1)
        }
        // console.log("SLIDE TO VIEW ", slideToView)
    },true)
   
    

    return(
        <section id="discover" className='slider-container'>
            {/* CAROUSEL GRID */}
            {/* <Carousel cols={2} rows={2} gap={0} containerClassName="pruebaCarouselGrid" loop={true} */}
            {/* // className="slider-carousel"> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost1} alt="First slide"/> */}
                    {/* <CardGhost image={images.ghost1} {...ghostOne}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost2} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost2} {...ghostTwo}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost3} alt="First slide"/> */}
                    {/* <CardGhost image={images.ghost3} {...ghostThree}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost4} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost4} {...ghostFour}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost5} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost5} {...ghostFive}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost6} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost6} {...ghostSix}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost7} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost7} {...ghostSeven}/> */}
                {/* </Carousel.Item> */}
                {/* <Carousel.Item> */}
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost7} alt="Second slide"/> */}
                    {/* <CardGhost image={images.ghost8} {...ghostEight}/> */}
                {/* </Carousel.Item> */}
            {/* </Carousel> */}
            {/* CAROUSEL NORMAL */}
            {/* <Carousel className="carousel-ghosts" controls={false}>
                <Carousel.Item >
                    <CardGhost image={images.ghost1} {...ghostOne}/>
                    <CardGhost image={images.ghost2} {...ghostTwo}/>
                    <CardGhost image={images.ghost3} {...ghostThree}/>
                    <CardGhost image={images.ghost4} {...ghostFour}/>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <CardGhost image={images.ghost5} {...ghostFive}/>
                    <CardGhost image={images.ghost6} {...ghostSix}/>
                    <CardGhost image={images.ghost7} {...ghostSeven}/>
                    <CardGhost image={images.ghost8} {...ghostEight}/>
                </Carousel.Item> */}
            {/* </Carousel> */}
            {/* //SWIPPER REACT */}
            <div className='slider-div'>
                <p id="title"> Sed ut perspiciatis </p>
                <h1> Nemo Enim </h1>
                <p id="legend"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
            </div>
            <Swiper
            slidesPerView={slideToView}
            spaceBetween={20}
            loop={true}
            // centerSlide={true}
            // fade={true}
            grabCursor={true}
            modules={[]}
            className="mySwiper"
        >
                <SwiperSlide><CardGhost image={images.ghost1} {...ghostOne}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost2} {...ghostTwo}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost3} {...ghostThree}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost4} {...ghostFour}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost5} {...ghostFive}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost6} {...ghostSix}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost7} {...ghostSeven}/></SwiperSlide>
                <SwiperSlide><CardGhost image={images.ghost8} {...ghostEight}/></SwiperSlide>
            </Swiper>
            {/* <CardGhost image={images.ghost1} {...ghostOne}/> */}
            {/* <CardGhost image={images.ghost2} {...ghostTwo}/>
            <CardGhost image={images.ghost3} {...ghostThree}/>
            <CardGhost image={images.ghost4} {...ghostFour}/> */}
            
        </section>
    )
}

export default Images;
