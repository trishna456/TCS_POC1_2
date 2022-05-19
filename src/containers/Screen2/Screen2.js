import React, { useRef, useState } from 'react';
import AddButton from '../../components/Screen2/AddButton/AddButton';
import Inputs from '../../components/Screen2/Inputs/Inputs';
import './Screen2.css';

class Screen2 extends React.Component {
  state = {
    evidenceData: {
      title: '',
      conditionName: undefined,
      childElements: [
        //  { title: '', conditionName: 'conditional', childElements: [] },
        {
          title: '',
          conditionName: [],
          childElements: [
            {
              title: '',
              conditionName: 'conditional',
              childElements: [
                {
                  title: '',
                  conditionName: 'conditional',
                  childElements: [
                    // {
                    //   title: '',
                    //   conditionName: 'conditional',
                    //   childElements: [
                    //     {
                    //       title: '',
                    //       conditionName: 'conditional',
                    //       childElements: [],
                    //     },
                    //   ],
                    // },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    tempList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  };

  /* const [evidenceData, setData] = useState({
    title: '',
    conditionName: undefined,
    childElements: [
      { title: '', conditionName: 'conditional', childElements: [] },
      {
        title: '',
        conditionName: undefined,
        childElements: [
          { title: '', conditionName: 'conditional', childElements: [] },
        ],
      },
    ],
  });*/

  /*const AddConditionHandler = (groupNumber) => {
    console.log(groupNumber);
    groups.map((item) => {});
  };

  const AddGroupHandler = () => {
    setGroups([
      ...groups,
      {
        dropdown: 'AND',
        button1: 'Add Condition',
        button2: 'Add Group',
        condition: [
          {
            conceptID: '',
            equals: '',
            textInput: '',
          },
        ],
        groupNumber: groups.length + 1,
      },
    ]);
  };
  */

  // const addStuff = () => {

  //     console.log('dom', document.getElementsByClassName('groupHolder')[document.getElementsByClassName('groupHolder').length - 1])
  //     console.log('ref', groupElement.current)

  //     groups.map((k, v) => {
  //         // let lastGroupHolder = groupElement.current
  //         let lastGroupHolder = document.getElementsByClassName('groupHolder')[document.getElementsByClassName('groupHolder').length - 1]
  //         lastGroupHolder.innerHTML = `<div className='groupHolder'><div className='InputMargin'><select className='ANDSelect'><option>AND</option></select><input type='submit' value='Add Condition' className='AddButton' /><input onClick=addStuff type='submit' value='Add Group' className='AddButton' /></div></div>`;
  //     })
  // }

  render() {
    const evidenceUI = function (list) {
      //console.log('list: ', list);
      let subLists = list.map(
        (row, i) => {
          // <React.Fragment>
          {
            true && (
              <div key={i} className='Container'>
                <span></span>
                <button>Add Condition</button>
                <button>Add Group</button>
              </div>
            );
          }
          // {
          //   /* {row.childElements.length > 0 && evidenceUI(row.childElements)} */
          // }
          // {
          /* {row.childElements.length === 0 && (
              <div key={i} className='Container'>
                <span></span>
                <button>Add Condition</button>
                <button>Add Group</button>
              </div>
            )} */
        }
        // </React.Fragment>;

        /*      if (row.childElements.length > 0) {
          <div key={i} className='Container'>
            <span></span>
            <button>Add Condition</button>
            <button>Add Group</button>
          </div>;
        }
        if (row.childElements.length === 0) {
          <div key={i} className='Container'>
            <input></input>
            <input></input>
          </div>;
        }*/
      );

      return (
        <React.Fragment>
          <div>{subLists}</div>
        </React.Fragment>
      );
    };
    return <div>{evidenceUI(this.state.evidenceData.childElements)}</div>;
  }

  //     <div className='Screen2Container'>
  //       <p className='Conatraints'>Constraints</p>
  //       <p className='Mandatory'>All fields are mandatory</p>

  //       {/* <div className="groupHolder" ref={groupElement} >
  //                 <div className='InputMargin'>
  //                     <select className='ANDSelect'><option>AND</option></select>
  //                     <input type='submit' value='Add Condition' className='AddButton' />
  //                     <input onClick={AddGroupHandler} type='submit' value='Add Group' className='AddButton' />
  //                 </div>

  //             </div> */}

  //       <div className='Container'>
  //         {groups.map((item) => (
  //           <div className='InputMargin'>
  //             <select className='ANDSelect'>
  //               <option>AND</option>
  //             </select>
  //             <input
  //               onClick={() => AddConditionHandler(item.groupNumber)}
  //               type='submit'
  //               value='Add Condition'
  //               className='AddButton'
  //             />
  //             <input
  //               onClick={AddGroupHandler}
  //               type='submit'
  //               value='Add Group'
  //               className='AddButton'
  //             />
  //             {item.condition[0] &&
  //               item.condition.map((input) => (
  //                 <div className='InputMargin'>
  //                   <select className='Input'>
  //                     <option>Concept ID</option>
  //                   </select>
  //                   <select className='Input'>
  //                     <option>equals (case-sensitive)</option>
  //                   </select>
  //                   <input type='text' className='Input' />
  //                   <input type='submit' value='x' className='DeleteButton' />
  //                 </div>
  //               ))}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
}

export default Screen2;
