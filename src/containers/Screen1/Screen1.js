import React from 'react';
import Header from '../../components/Screen1/Header/Header';
import Table from '../../components/Screen1/Table/Table';
import './Screen1.css';

const Screen1 = () => {
    return (
        <>
            <Header />

            <p className='TabTitle'>Rule set Authoring</p>

            <Table />
        </>
    )
}

export default Screen1;