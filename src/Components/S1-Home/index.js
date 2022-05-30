import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import images from '../../Images'
import {Link} from 'react-scroll' 
import './index.scss'

function Home (){
    return(
        <section id="home" className="landing-container">
            <Carousel className="landing-carousel" controls={false}>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 id="landing-h1"> Sed ut perspiciatis unde omnis iste natus </h1>
                        <p id="landing-p"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. </p>
                        <Link to="about" spy={true} smooth={true} exact='true' duration={500} offset={-80}>
                            <Button id="landing-btn" variant="primary" type="submit">
                                Read More
                            </Button>
                        </Link>
                    </Carousel.Caption>
                    <img className='d-block w-100 img-fluid' src={images.slider1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 id="landing-h1"> Sed ut perspiciatis unde omnis iste natus </h1>
                        <p id="landing-p"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. </p>
                        <Link to="discover" spy={true} smooth={true} exact='true' duration={500} offset={-80}>
                            <Button id="landing-btn" variant="primary" type="submit">
                                Read More
                            </Button>
                        </Link>
                    </Carousel.Caption>
                    <img className='d-block w-100 img-fluid' src={images.slider2} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 id="landing-h1"> Sed ut perspiciatis unde omnis iste natus </h1>
                        <p id="landing-p"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. </p>
                        <Link to="FAQ" spy={true} smooth={true} exact='true' duration={500} offset={-80}>
                            <Button id="landing-btn" variant="primary" type="submit">
                                Read More
                            </Button>
                        </Link>
                    </Carousel.Caption>
                    <img className='d-block w-100 img-fluid' src={images.slider3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home;