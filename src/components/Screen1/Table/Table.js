import React, { useState, useEffect } from 'react';
import { TableHeadings, TableData } from './TableData';
import './Table.css';

const Table = () => {

  // Pagination states
  const [recordsPerPage, setrecordsPerPage] = useState(10);
  const [lowerEnd, setLowerEnd] = useState(0);
  const [upperEnd, setUpperEnd] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4]);

  // Table states
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Tags, setTags] = useState('');
  const [CreatedBy, setCreatedBy] = useState('');
  const [Active, setActive] = useState('');
  const [tableData, setTableData] = useState(TableData.slice(lowerEnd, recordsPerPage));
  const [count, setCount] = useState(0);



  useEffect(() => {

    if (TableData.length - lowerEnd < recordsPerPage) setUpperEnd(TableData.length)
    else setUpperEnd(lowerEnd + recordsPerPage);

    setPageCount(Math.ceil(TableData.length / recordsPerPage))

  }, [tableData, lowerEnd, upperEnd, recordsPerPage])



  // PAGINATION
  const onFirstClick = () => {
    setLowerEnd(0)

    let table = TableData.slice(lowerEnd, upperEnd)
    setTableData(table)

    console.log('lowerEnd', lowerEnd)
    console.log('upperEnd', upperEnd)
  }

  const onPreviousClick = () => {
    if (lowerEnd <= recordsPerPage) setLowerEnd(0)
    else setLowerEnd(lowerEnd - recordsPerPage)

    console.log('lowerEnd', lowerEnd)
    console.log('upperEnd', upperEnd)

    if (lowerEnd !== 0) {
      let table = TableData.slice(lowerEnd - recordsPerPage, upperEnd - recordsPerPage)
      setTableData(table)
    }

  }

  const onNextClick = () => {
    if (upperEnd < TableData.length) setLowerEnd(upperEnd)

    if (upperEnd < TableData.length) {
      let table = TableData.slice(lowerEnd + recordsPerPage, upperEnd + recordsPerPage)
      setTableData(table)
    }

    console.log('lowerEnd', lowerEnd)
    console.log('upperEnd', upperEnd)
  }

  const onLastClick = () => {
    setLowerEnd(recordsPerPage * 3)

    if (upperEnd < TableData.length) {
      let table = TableData.slice(recordsPerPage * 3, TableData.length)
      setTableData(table)
    }
  }

  const onNumberClick = (number) => {
    setLowerEnd(recordsPerPage * (number - 1))
    console.log('lowerEnd', lowerEnd)

    let table = TableData.slice(lowerEnd, upperEnd)
    setTableData(table)
  }






  // TABLE
  const onHeadClick = (heading) => {

    let sortTableData = [...tableData]
    console.log('sortTableData 1', sortTableData)

    let x = '';
    let y = '';

    if (count === 0) {
      console.log('i am in count 0')

      setCount(1)
      sortTableData.sort((a, b) => {

        if (heading === 'Name') {
          x = a.Name;
          y = b.Name
        }
        if (heading === 'Description') {
          x = a.Description;
          y = b.Description
        }
        if (heading === 'Tags') {
          x = a.Tags;
          y = b.Tags
        }
        if (heading === 'CreatedBy') {
          x = a.CreatedBy;
          y = b.CreatedBy
        }
        if (heading === 'Active') {
          x = a.Active;
          y = b.Active
        }

        let fa = x.toLowerCase(),
          fb = y.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }

    if (count === 1) {
      console.log('i am in count 1')
      setCount(0)
      sortTableData.sort((a, b) => {

        if (heading === 'Name') {
          x = a.Name;
          y = b.Name
        }
        if (heading === 'Description') {
          x = a.Description;
          y = b.Description
        }
        if (heading === 'Tags') {
          x = a.Tags;
          y = b.Tags
        }
        if (heading === 'CreatedBy') {
          x = a.CreatedBy;
          y = b.CreatedBy
        }
        if (heading === 'Active') {
          x = a.Active;
          y = b.Active
        }

        let fa = x.toLowerCase(),
          fb = y.toLowerCase();


        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    }


    console.log('sortTableData 2', sortTableData)
    console.log('setCount', count)

    setTableData(sortTableData)
  }


  const CreateRuleSet = () => {

    const FilteredTable = TableData.filter((item) => (
      item.Name === Name ||
      item.Description === Description ||
      item.Tags === Tags ||
      item.CreatedBy === CreatedBy ||
      item.Active === Active
    ))

    setTableData(FilteredTable)
  }



  return (
    <div className='TableContainer'>

      <div className='PaginationContainer'>
        <label className='PageInputLabel'>Records per page: </label>
        <input
          className='PageInput'
          defaultValue={recordsPerPage}
        // readOnly
        />
        <p>
          Showing <span className='PageCount'>{lowerEnd + 1}-{upperEnd}/{TableData.length}</span>
        </p>
        <div className='Pagination'>
          <p onClick={onFirstClick}>First</p>
          <p onClick={onPreviousClick}>Prev</p>
          {pages.map((item) => <p onClick={() => onNumberClick(item)}>{item}</p>)}

          <p onClick={onNextClick}>Next</p>
          <p onClick={onLastClick}>Last</p>
        </div>
      </div>


      <table className='Table'>
        <thead>
          <tr>
            {TableHeadings.map((item) => (
              <th onClick={() => onHeadClick(item)}>{item}</th>
            ))}
          </tr>
        </thead>

        <tr>
          <td className='TDWidth'>
            <input
              onChange={(event) => setName(event.target.value)}
              className='InputBox'
              type='text'
            />
          </td>
          <td>
            <input
              className='InputBox'
              type='text'
              onChange={(event) => setDescription(event.target.value)}
            />
          </td>
          <td>
            <input
              className='InputBox'
              type='text'
              onChange={(event) => setTags(event.target.value)}
            />
          </td>
          <td>
            <select
              name=''
              className='InputBox'
              onChange={(event) => setCreatedBy(event.target.value)}
            >
              <option>Select...</option>
            </select>
          </td>
          <td>
            <select
              name='Active'
              className='InputBox'
              onChange={(event) => setActive(event.target.value)}
            >
              <option>Choose...</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </td>
          <td>
            <p
              className='CreateRuleSetButton'
              onClick={CreateRuleSet}
            >Create Rule Set</p>
          </td>
        </tr>

        {tableData.map((item) => (
          <tr>
            <td className='TableContent'>{item.Name}</td>
            <td className='TableContent'>{item.Description}</td>
            <td className='TableContent'>{item.Tags}</td>
            <td className='TableContent'>{item.CreatedBy}</td>
            <td className='TableContent'>{item.Active}</td>
            <td className='TableContent'>{item.Actions}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
