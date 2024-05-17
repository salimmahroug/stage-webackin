import React from 'react'
import './css/LoginCard.css'
import { useNavigate } from "react-router-dom";
import right from '../assets/right.svg'
import mail from '../assets/mail.svg'



function LoginCard() {
    const navigate = useNavigate()
    const handleclic = ()=>{
        navigate("/dashboard");
    }
    return (
        <div className='card'>
            <h3 className="title"> Let’s get started:</h3>
            <button className="link" onClick={handleclic}>
                <strong>I know my client</strong>
                <img className="icones" src={right} alt="icone" />
                <i className="fa-solid fa-angle-right" />
            </button>
            <button className="link">
                <strong>Find similar classification</strong>
                <img className="icones" src={right} alt="icone" />
            </button>
            <button className="mail-button">
                Can’t find my client{" "}
                <img className="icones-mail" src={mail} alt="" />
            </button>
        </div>
    )
}
export default LoginCard