import React, { useState } from 'react';
import '../Styles/ExtendTalent.css';
import Hire from '../Components/Hire';

function ExtendTalent() {
  const [talentType, setTalentType] = useState('in-house');
  const [salary, setSalary] = useState('');
  const [workDays, setWorkDays] = useState('');

  const handleTalentTypeChange = (event) => {
    setTalentType(event.target.value);
  };

  const handleSalaryChange = (event) => {
    const value = event.target.value;
    setSalary(value);
    if (value !== '') {
      setSalary(Math.round(value / 30));
    } else {
      setSalary('');
    }
  };

  const handleWorkDaysChange = (event) => {
    const value = event.target.value;
    setWorkDays(value);
  };

  const calculateTotal = () => {
    if (salary !== '' && workDays !== '') {
      return salary * workDays;
    }
    return '';
  };

  return (
    <div className='extend-talent-container'>
      <div className='form-field'>
        <label htmlFor='talent-type'>Talent Type:</label>
        <select id='talent-type' value={talentType} onChange={handleTalentTypeChange}>
          <option value='in-house'>In-house</option>
          <option value='hire'>Hire</option>
        </select>
      </div>
      <div className='form-field'>
        <label htmlFor='salary'>Salary:</label>
        <input
          id='salary'
          type='number'
          onChange={handleSalaryChange}
          placeholder='Enter Salary'
        />
      </div>

      <div className='form-field'>
        <label htmlFor='per_day'>Per Day:</label>
        <input
          id='per_day'
          type='number'
          value={salary}
          onChange={handleSalaryChange}
          placeholder='Per Day'
          readOnly
        />
      </div>

      <div className='form-field'>
        <label htmlFor='work-days'>Work Days:</label>
        <input
          id='work-days'
          type='number'
          onChange={handleWorkDaysChange}
          placeholder='Enter Work Days'
        />
      </div>
      <div className='form-field'>
        <label htmlFor='total'>Total:</label>
        <input id='total' type='text' value={calculateTotal()} readOnly />
      </div>

      {talentType === 'hire' && <Hire />}
    </div>
  );
}

export default ExtendTalent;