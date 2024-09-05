import React from 'react';

const Button = ({info}) => {
    return (
       <button className='bg-transparent border-black border-b-2 py-3 px-4 rounded hover:bg-[#bb8506da] uppercase'>{info}</button>
    );
};

export default Button;