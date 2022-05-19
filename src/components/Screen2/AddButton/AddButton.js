import React from 'react';
import './AddButton.css';

const AddButton = () => (
    <div className='InputMargin'>
        <select className='ANDSelect'><option>AND</option></select>
        <input type='submit' value='Add Condition' className='AddButton' />
        <input type='submit' value='Add Group' className='AddButton' />
        <input type='submit' value='x' className='DeleteButton' />
    </div>
)

export default AddButton;