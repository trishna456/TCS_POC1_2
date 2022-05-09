import React from 'react';
import AddButton from '../../components/Screen2/AddButton/AddButton';
import Inputs from '../../components/Screen2/Inputs/Inputs';
import './Screen2.css';

const Screen2 = () => {
    return (
        <div className='Screen2Container'>
            <p className='Conatraints'>
                Constraints
            </p>
            <p className='Mandatory'>
                All fields are mandatory
            </p>
            <div className='Container'>
                <div className='InputMargin'>
                    <select className='ANDSelect'><option>AND</option></select>
                    <input type='submit' value='Add Condition' className='AddButton' />
                    <input type='submit' value='Add Group' className='AddButton' />
                </div>
                <Inputs />
                <Inputs />

                <div className='Container'>
                    <AddButton />
                    <div className='Container'>
                        <AddButton />
                        <Inputs />
                        <Inputs />
                        <div className='Container'>
                            <AddButton />
                        </div>
                    </div>
                    <Inputs />
                    <Inputs />
                </div>
            </div>

        </div>
    )
}

export default Screen2;