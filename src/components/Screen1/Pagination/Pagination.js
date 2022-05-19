import React, { useState } from 'react';
import { TableData } from '../Table/TableData';
import './Pagination.css'

const Pagination = () => {

    const [recordsCount, setRecordsCount] = useState(10)

    return (
        <div className='PaginationContainer'>
            <label className='PageInputLabel'>Records per page: </label>
            <input
                className='PageInput'
                value={recordsCount}
                onChange={(event) => setRecordsCount(event.target.value)}
            />
            <p>
                Showing <span className='PageCount'>1-10/{TableData.length}</span>
            </p>
            <div className='Pagination'>
                <p>First</p>
                <p>Prev</p>
                <p>1</p>
                <p>2</p>
                <p>Next</p>
                <p>Last</p>
            </div>
        </div>
    )
}

export default Pagination;