import React from 'react'
import './css/NavBar.css'
import left from '../assets/left.svg'
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <div className='navbar'>
            <Link className='link-to' to='/'>
                <img className="icones-left" src={left} alt="" />
                BACK
            </Link>
            <p>Start cascading with:</p>
            <label className="checkbox">
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark">
                    <strong>NAICS</strong>{" "}
                </span>
            </label>
            <label className="checkbox">
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark">
                    <strong>SIC</strong>{" "}
                </span>
            </label>
            <label className="checkbox">
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark">
                    <strong>NACE</strong>{" "}
                </span>
            </label>
        </div>
    )
}

export default NavBar