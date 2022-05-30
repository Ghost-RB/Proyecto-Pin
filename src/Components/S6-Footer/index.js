import './index.scss';
import {animateScroll as scroll} from 'react-scroll' 
import { Link } from 'react-router-dom';


function Footer(){
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return(
        <section className='page-footer'>
            <p>2022 © All rights reserved.</p>
            <Link to='/' onClick={toggleHome} className='logo-footer'/>
        </section>
    )
}

export default Footer;