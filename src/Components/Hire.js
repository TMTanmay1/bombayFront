import React, { useState } from 'react';
import '../Styles/Hire.css'

function Hire() {
  const [selectedOption, setSelectedOption] = useState('');
  const [perDayInputVisible, setPerDayInputVisible] = useState(false);
  const [flatInputVisible, setFlatInputVisible] = useState(false);
  const [perDaySalary, setPerDaySalary] = useState('');
  const [perDayWorkDays, setPerDayWorkDays] = useState('');
  const [flatSalary, setFlatSalary] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Reset input values and visibility on option change
    setPerDayInputVisible(false);
    setFlatInputVisible(false);
    setPerDaySalary('');
    setPerDayWorkDays('');
    setFlatSalary('');

    // Show the appropriate input boxes based on the selected option
    if (selectedValue === 'perDay') {
      setPerDayInputVisible(true);
    } else if (selectedValue === 'flat') {
      setFlatInputVisible(true);
    }
  };

  return (
    <div className='hire_container'>
      <label htmlFor='hireOption'>Hire:</label>
      <select
        id='hireOption'
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value=''>Select an option</option>
        <option value='perDay'>Per Day</option>
        <option value='flat'>Flat</option>
      </select>

      {perDayInputVisible && (
        <div className='per_day_container'>
          <label htmlFor='perDaySalary'>Per Day Salary:</label>
          <input
            id='perDaySalary'
            type='text'
            value={perDaySalary}
            onChange={(e) => setPerDaySalary(e.target.value)}
          />

          <label htmlFor='perDayWorkDays'>Work Days:</label>
          <input
            id='perDayWorkDays'
            type='text'
            value={perDayWorkDays}
            onChange={(e) => setPerDayWorkDays(e.target.value)}
          />

          <label htmlFor='perDayTotal'>Total:</label>
          <input
            id='perDayTotal'
            type='text'
            value={perDaySalary * perDayWorkDays}
            readOnly
          />
        </div>
      )}

      {flatInputVisible && (
        <div className='flat_container'>
          <label htmlFor='flatSalary'>Flat Salary:</label>
          <input
            id='flatSalary'
            type='text'
            value={flatSalary}
            onChange={(e) => setFlatSalary(e.target.value)}
          />

          <label htmlFor='flatTotal'>Total:</label>
          <input
            id='flatTotal'
            type='text'
            value={flatSalary}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default Hire;
