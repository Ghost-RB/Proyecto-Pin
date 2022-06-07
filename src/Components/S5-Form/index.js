import { useState, useEffect } from 'react'
import {Form, FloatingLabel, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import images from '../../Images'
import './index.scss'
// import axios from 'axios';

function FormS5(){

    const [userContact,setUserContact] = useState({
        name: "",
        email:"",
        phone:"",
        message:""
    });

    const PHONE_REGEX = /^[0-9][0-9]{9,49}$/;
    const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{3,49}$/;
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    // const errRef = useRef();

    const [isValidName,setValidName] = useState(false)
    const [isValidPhone,setValidPhone] = useState(false)
    const [isValidEmail,setValidEmail] = useState(false)
    const [showMsg,setShowMsg] = useState(false)
    const [errMsg,setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)

    useEffect(() => {
        const resultName = NAME_REGEX.test(userContact.name)
        setValidName(resultName)
        // if(isValidName && showMsg){
        //     displayMsg("The name is valid!", "congrats")
        //     setShowMsg(false)
        // }
        setShowMsg(isValidName)
    }, [userContact.name,isValidName])

    useEffect(() => {
        
        const resultPhone = PHONE_REGEX.test(userContact.phone)
        setValidPhone(resultPhone)
        // if(isValidPhone){
        //     displayMsg("The phone is valid!", "congrats")
        //     setShowMsg(false)
        // }
        setShowMsg(isValidPhone)
    }, [userContact.phone,isValidPhone])

    useEffect(() => {
        const resultEmail = EMAIL_REGEX.test(userContact.email)
        setValidEmail(resultEmail)
        // if(isValidEmail){
        //     displayMsg("The email is valid!", "congrats")
        //     setShowMsg(false)
        // }
        setShowMsg(isValidEmail)
    }, [userContact.email,isValidEmail])

    useEffect(() => {
        // isValidName && isValidPhone && isValidEmail ? setSuccess(true) : setSuccess(false)
        if(isValidName && isValidPhone && isValidEmail){
            console.log("Entramos para cambiar success a true")
            setSuccess(true)
        }else if (success === true){
            console.log("Entramos para cambiar success a false")
            setSuccess(false)
        }else{
            console.log("No hacemos nada ya que success es falso ya")
        }
    }, [isValidName,isValidPhone,isValidEmail])


    const displayMsg = (msg,intention) => {
        if(intention === "msgSent"){
            toast.success('The contact request has been sent successfully! We will get in touch as soon as possible', 
                {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }else if(intention === "congrats"){
            toast.success(`${msg}`, 
                {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }else{
            toast.error(`${msg}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
           
    }

    const pruebaFuncionTimeOut = (response,json) =>{
        console.log("Entramos en la funciona para la espera")
        if(response?.status === 500){
            console.log("ENTRAMOS AL IF Y CAMBIAMOS EL SUCCESS A FALSE") 
            setSuccess(false)
            console.log(success)
            setErrMsg("No hay conexion con el Servidor")
            console.log(errMsg)
            displayMsg(errMsg,"error")
            return
        } 
        
        console.log(json)
        displayMsg("","msgSent")          
        document.getElementById("contact-form").reset();
    }

    const sendData = async event => {
        console.log(success)
        event.preventDefault()
        console.log(event)
        const v1 = NAME_REGEX.test(userContact.name)
        const v2 = PHONE_REGEX.test(userContact.phone)
        const v3 = EMAIL_REGEX.test(userContact.email)

        if (!v1 || !v2 || !v3){
            setSuccess(false)
            setErrMsg("Hubo un error en los datos. No se pueden cargar ");
            displayMsg(errMsg,"error")
            return;
        }else{
            try {
                let config = {
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userContact)
                }
    
                let response = await fetch('http://localhost/contactPin/public/index.php/api/RegisterContact',config)
                let json = await response.json()
                console.log("La respuesta es ")
                console.log(response.status)
                
                setTimeout(pruebaFuncionTimeOut(response,json), 5000)
                
            } catch (err) {
                console.log("ENTRAMOS AL CATCH") 
                console.log("EL ERROR", err)
                console.log("ERROR RESPONSE ", err.response)
                setSuccess(false)
                setErrMsg(err)
                displayMsg(errMsg,"error")
                // console.log("ERROR RESPONSE STATUS ", err.response.status)
                // if(!err?.response || err.response?.status === 500){
                //     console.log("ENTRAMOS AL IF Y CAMBIAMOS EL SUCCESS A FALSE") 
                //     setSuccess(false)
                //     console.log("Valor de SUCCESS LUEGO DEL SET", success)
                //     setErrMsg("No hay conexion con el Servidor")
                //     console.log(errMsg)
                //     displayMsg(errMsg)
                // } 
            }
        }

        
    }
    
    const handleChange = function(event){
        const property = event.target.name
        const value = event.target.value
        
        setUserContact({...userContact, [property]: value})
        // console.log(userContact)
        
    }

    //console.log(userContact)
    
    // const disabled = !(userContact.name.length && userContact.email.length && userContact.phone && userContact.message) 
    const disabled = !(isValidName && isValidEmail && isValidPhone && userContact.message) 

    return(
        <section id="contact" className="form-container">
            <div className="contact-container">
                <div className="contact-titles">
                    <h2 className="form-primary-h2"> Get In Touch </h2>
                    <h2 className="form-secondary-h2"> We are always on the hunt! </h2>
                </div>
                <Form id="contact-form" onSubmit={sendData} autoComplete="off">
                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control onChange={handleChange} name="name" size="sm" type="text" 
                        placeholder="Write your name" required/>  
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control onChange={handleChange} name="email" size="sm" type="email" 
                        placeholder="Write your email" required />  
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                        <Form.Control onChange={handleChange} name="phone" size="sm" type="text" 
                        placeholder="Write your phone" required />  
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                        <Form.Control onChange={handleChange} name="message" as="textarea" 
                        placeholder="Leave a comment here" required />
                    </FloatingLabel>
                    <Button id="form-btn" disabled={disabled} variant="primary" type="submit">
                        Send
                    </Button>
                    <ToastContainer 
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                        theme={"dark"}  
                    />
                </Form>
            </div>
            <img className='d-block contact-image' src={images.ghostContact} alt="First slide"/>
        </section>
    )
}

export default FormS5;