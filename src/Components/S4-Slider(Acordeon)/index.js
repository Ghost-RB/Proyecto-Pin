import Accordion from 'react-bootstrap/Accordion'
import images from '../../Images'
import './index.scss'

function Slider(){
    return(
        <section id="FAQ" className="container-accordion">
                <img className='d-block accGhost' src={images.section4} alt="First slide"/>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why are we the best choice to do this job?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are we WorldWide?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is there any problem with the type of Ghost?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}

export default Slider;