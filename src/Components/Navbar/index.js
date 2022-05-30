import { animateScroll as scroll, Link } from 'react-scroll'
import './index.scss'


const NavBar = ( {toggle} ) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const disappear = () =>{
        let ghosts = document.querySelectorAll('i.bx-ghost');
        ghosts.forEach(element => {
            element.classList.remove("bx-tada");
            element.classList.add("bx-fade-left")
        });
    }
    const appear = () =>{
        let ghosts = document.querySelectorAll('i.bx-ghost');
        ghosts.forEach(element => {
            element.classList.remove("bx-fade-left")
            element.classList.add("bx-tada");
        });
    }
  return (
    <section className='nav' >
            <div className="navBarContainer">
                <Link className="navLogo" to="home" onClick={toggleHome}>
                    <i className='bx bx-ghost bx-tada' onMouseOver={disappear} onMouseLeave={appear}></i>
                        GhostShell
                    <i className='bx bx-ghost bx-tada' onMouseOver={disappear} onMouseLeave={appear}></i>
                </Link>
                <div className="mobileIcon" onClick={toggle}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className="navMenu">
                    <div className="navItem">
                        <Link className="navLinks" to="home" spy={true} smooth={true} exact='true' duration={500} offset={-80}
                        >Home</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLinks" to="about" spy={true} smooth={true} exact='true' duration={500} offset={-80}
                        >About</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLinks" to="discover" spy={true} smooth={true} exact='true' duration={500} offset={-80}
                        >Discover</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLinks" to="FAQ" spy={true} smooth={true} exact='true' duration={500} offset={-80}
                        >FAQ</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLinks" to="contact" spy={true} smooth={true} exact='true' duration={500} offset={-80}
                        >Contact Us</Link>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default NavBar