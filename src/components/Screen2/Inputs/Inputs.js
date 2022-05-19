import React from 'react';
import './Input.css';

const Inputs = () => (
    <div className='InputMargin'>
        <select className='Input'><option>Concept ID</option></select>
        <select className='Input'><option>equals (case-sensitive)</option></select>
        <input type='text' className='Input' />
        <input type='submit' value='x' className='DeleteButton' />
    </div>
)

export default Inputs;