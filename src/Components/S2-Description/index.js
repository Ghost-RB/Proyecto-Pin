import images from '../../Images'
import './index.scss'; 

function Description(){
    return(
        <section id="about" className="description-container">
            <img className='d-block descGhost' src={images.ghost} alt="First slide"/>
            <div className="description-div">
                <h2 className="primary-h2"> We Help Everyone </h2>
                <h2 className="secondary-h2"> Ensuring safety</h2>
                <p id="description-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            </div>
        </section>
    )
}

export default Description;