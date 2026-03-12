import React from 'react';

const ThemeToggle = ({darkMode, setDarkmode}) => {
    return (
       <button className='btn btn-light' onClick={()=> setDarkmode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}

       </button>
    );
};

export default ThemeToggle;