import React, { useState } from 'react';
import '../Styles/Body.css';
import TalentReq from './TalentReq';
import Postproduction from './PostProduction.js';


function Body() {
  
  const [deliverables, setDeliverables] = useState([{ option: '', otherOption: '', id: 0 }]);
  const [time, setTime] = useState('');
  const [otherOption, setOtherOption] = useState('');

  const handleDeliverableChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDeliverables = [...deliverables];
    updatedDeliverables[index] = { ...updatedDeliverables[index], [name]: value };
    setDeliverables(updatedDeliverables);
  };

  const handleAddDeliverable = () => {
    setDeliverables([...deliverables, { option: '', otherOption: '', id: Date.now() }]);
  };

  return (
    <div>
      <div className='form-field'>
        <textarea id='proposalDetails' rows='6' placeholder='About Project'></textarea>
      </div>
      {deliverables.map((deliverable, index) => (
        <div key={deliverable.id} className='deliverable'>
          <div className='form-field'>
            <label className='d' htmlFor={`deliverable-${index}`}>Deliverable:</label>
            <select
              id={`deliverable-${index}`}
              name='option'
              value={deliverable.option}
              onChange={(e) => handleDeliverableChange(index, e)}
            >
              <option value=''>Select an option</option>
              <option value='2D Video'>2D Video</option>
              <option value='3D Video'>3D Video</option>
              <option value='Photography'>Photography</option>
              <option value='other'>Other</option>
            </select>
            {deliverable.option === 'other' && (
              <input
                type='text'
                name='otherOption'
                value={deliverable.otherOption}
                onChange={(e) => handleDeliverableChange(index, e)}
                placeholder='Enter other option'
              />
            )}
          </div>
          <div className='form-field'>
            <label htmlFor={`time-${index}`}>Time:</label>
            <input
              id={`time-${index}`}
              type='text'
              name='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor={`inputField-${index}`}>.</label>
            <input id={`inputField-${index}`} type='text' name='inputField' />
          </div>
          {deliverable.option && (
            <TalentReq key={deliverable.id} deliverable={deliverable.option} />
          )}
        </div>
      ))}
      <div className='form-field'>
        <button className='plus-button' onClick={handleAddDeliverable}>
          +
        </button>
      </div>
            <div className='form-field'>
              <div className='tt'>
                <label htmlFor='total_talent'>Total Talent Cost:</label>
                <input
                id='total_talent' 
                type='text'
                name='total_talent'
                
                readOnly/>
                </div>
            </div>
            <Postproduction></Postproduction>
    </div>
  );
}

export default Body;
