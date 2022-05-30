import { useRef, useState, useEffect } from 'react'
import {Form, FloatingLabel, Button, Alert} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import images from '../../Images'
import './index.scss'

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
    const [errMsg,setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)

    useEffect(() => {
        const result = NAME_REGEX.test(userContact.name)
        setValidName(result)
    }, [userContact.name,isValidName])

    useEffect(() => {
        const result = PHONE_REGEX.test(userContact.phone)
        setValidPhone(result)
    }, [userContact.phone,isValidPhone])

    useEffect(() => {
        const result = EMAIL_REGEX.test(userContact.email)
        setValidEmail(result)
    }, [userContact.email,isValidEmail])

    useEffect(() => {
        console.log("EL VALOR DE SUCCESS ANTES DE LA VALIDACION ES")
        console.log(success)
        // isValidName && isValidPhone && isValidEmail ? setSuccess(true) : setSuccess(false)
        if(isValidName && isValidPhone && isValidEmail){
            console.log("Entramos para cambiar success a true")
            setSuccess(true)
            console.log(success)
        }else if (success === true){
            console.log("Entramos para cambiar success a false")
            setSuccess(false)
        }else{
            console.log("No hacemos nada ya que success es falso ya")
            console.log(success)
        }
        
        
        console.log("EL VALOR DE SUCCESS LUEGO DE LA VALIDACION ES")
        console.log(success)
    }, [isValidName,isValidPhone,isValidEmail])


    const displayMsg = (msg) => {
            success
                ?   toast.success('The contact request has been sent successfully! We will get in touch as soon as possible', 
                {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                :   toast.error(`${msg}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }) 
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
            displayMsg(errMsg)
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
                console.log(response.status)
                if(response?.status === 500){
                    console.log("ENTRAMOS AL IF Y CAMBIAMOS EL SUCCESS A FALSE") 
                    setSuccess(false)
                    console.log(success)
                    setErrMsg("No hay conexion con el Servidor")
                    console.log(errMsg)
                    displayMsg(errMsg)
                    return
                } 
                
                console.log(json)
                displayMsg()          
                document.getElementById("contact-form").reset();
            } catch (err) {
                console.log("ENTRAMOS AL CATCH") 
                if(!err?.response || err.response?.status === 500){
                    console.log("ENTRAMOS AL IF Y CAMBIAMOS EL SUCCESS A FALSE") 
                    setSuccess(false)
                    setErrMsg("No hay conexion con el Servidor")
                    displayMsg(errMsg)
                } 
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
                        limit={2}
                        theme={"dark"}  
                    />
                </Form>
            </div>
            <img className='d-block contact-image' src={images.ghostContact} alt="First slide"/>
        </section>
    )
}

export default FormS5;