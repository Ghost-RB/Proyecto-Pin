import CardGhost from '../CardGhost';
import Carousel from 'react-grid-carousel'
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

function Images(){
    return(
        <section id="discover" className='slider-container'>
            <Carousel cols={2} rows={2} gap={0} containerClassName="pruebaCarouselGrid" loop={true}
            className="slider-carousel">
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost1} alt="First slide"/> */}
                    <CardGhost image={images.ghost1} {...ghostOne}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost2} alt="Second slide"/> */}
                    <CardGhost image={images.ghost2} {...ghostTwo}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost3} alt="First slide"/> */}
                    <CardGhost image={images.ghost3} {...ghostThree}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost4} alt="Second slide"/> */}
                    <CardGhost image={images.ghost4} {...ghostFour}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost5} alt="Second slide"/> */}
                    <CardGhost image={images.ghost5} {...ghostFive}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost6} alt="Second slide"/> */}
                    <CardGhost image={images.ghost6} {...ghostSix}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost7} alt="Second slide"/> */}
                    <CardGhost image={images.ghost7} {...ghostSeven}/>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img className="d-block img-fluid ghostsImgCarousel" src={images.ghost7} alt="Second slide"/> */}
                    <CardGhost image={images.ghost8} {...ghostEight}/>
                </Carousel.Item>
            </Carousel>
            <div className='slider-div'>
                <p id="title"> Sed ut perspiciatis </p>
                <h1> Nemo Enim </h1>
                <p id="legend"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
            </div>
        </section>
    )
}

export default Images;