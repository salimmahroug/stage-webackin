import React, { useContext, useState } from 'react';
import './css/SearchBar.css';
import { Button } from './Button';
import { contex } from '../AppContex';

function SearchBar({ onFilterChange, calcule }) {
    const data = useContext(contex)
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase());
    };

    const handleClick = () => {
        const filtered = data.filter(
            (item) =>
                item.discription.toLowerCase().includes(inputValue) ||
                item.numbre.toString().toLowerCase().includes(inputValue)
        );
        onFilterChange(filtered);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div className='search flex'>
            <input
                type="text"
                placeholder="Enter keywords"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <Button onClick={handleClick} />
            <h1 className='calc'>{calcule.length}</h1>
        </div>
    );
}

export default SearchBar;
