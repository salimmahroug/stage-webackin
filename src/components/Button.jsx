import React from 'react';
import './css/Button.css';
export function Button({ onClick }) {
    return (
        <button className='submit-button' onClick={onClick}>
            Submit
        </button>
    );
}

export default Button; 
