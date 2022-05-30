import Navbar from '../Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from "../Components/S1-Home";
import Description from '../Components/S2-Description';
import Images from '../Components/S3-Images';
import Slider from '../Components/S4-Slider(Acordeon)';
import FormS5 from "../Components/S5-Form";
import Footer from '../Components/S6-Footer';
import './index.scss'
import SideBar from '../Components/SideBar';
import { useState } from 'react';

const PIN = () => {
    const [isOpen,setIsOpen] = useState(true)
    // console.log("Valor de isOpen", isOpen)

    const toggle = () => {
        // console.log("Entramos al toggle, valor de isOpen es ", isOpen)
        const body = document.querySelector('body');
        // console.log("Se asigna el body ", body)
        const menuAside = body.querySelector('.sideBarContainer');
        // console.log("Se asigna el aside ", menuAside)
        setIsOpen(!isOpen)      
        // console.log("Se seteo el setIsOpen ",isOpen)
        if (isOpen) {
            // console.log("Entramos al If por positivo ", isOpen)
            menuAside.classList.add("isOpen") 
        }else{
            // console.log("Entramos al If por negativo ", isOpen)
             menuAside.classList.remove("isOpen")
        }
    }
  return (
    <>
        <BrowserRouter>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Home/>
            <Description/>
            <Images/>
            <Slider/>      
            <FormS5/>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default PIN