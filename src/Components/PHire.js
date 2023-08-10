import React, { useState ,useEffect } from 'react';
import '../Styles/PHire.css'
import { useDispatch } from 'react-redux';
import { add4 } from "../store/slice/PuserSlice2";


function PHire() {
  const [selectedOption, setSelectedOption] = useState('');
  const [perDayInputVisible, setPerDayInputVisible] = useState(false);
  const [flatInputVisible, setFlatInputVisible] = useState(false);
  const [perDaySalary, setPerDaySalary] = useState('');
  const [perDayWorkDays, setPerDayWorkDays] = useState('');
  const [flatSalary, setFlatSalary] = useState('');
  const [timerId, setTimerId] = useState(null);

  const dispatch = useDispatch();

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

  const calculateTotal = (perDaySalary, perDayWorkDays, flatSalary) => {
    if (perDaySalary !== "" && perDayWorkDays !== "") {
      const total = perDaySalary * perDayWorkDays;
      dispatch(add4(total));
      return total;
    } else if (flatSalary !== "") {
      const total = parseInt(flatSalary);
      dispatch(add4(total));
      return total;
    } else {
      return "";
    }
  };

  const handleCalculateClick = () => {
    calculateTotal(perDaySalary,perDayWorkDays,flatSalary);
  };

  // useEffect(() => {
  //   // Clear the existing timeout when salary or workDays change
  //   if (timerId) {
  //     clearTimeout(timerId);
  //   }

  //   // Start a new timeout of 2 seconds
  //   const newTimerId = setTimeout(() => {
  //     calculateTotal(perDaySalary, perDayWorkDays, flatSalary);
  //   }, 2000);

  //   // Save the new timerId
  //   setTimerId(newTimerId);

  //   // Clean up: clear the timeout when the component unmounts
  //   return () => {
  //     if (timerId) {
  //       clearTimeout(timerId);
  //     }
  //   };
  // }, [perDaySalary, perDayWorkDays, flatSalary]);

  

  return (
    <div className='hire_container'>
      <div className='hi'>
      <div className='h'>
        <div className='form-field'>
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
      </div>
      </div>
      <div className='p'>
      {perDayInputVisible && (
        <div className='per_day_container'>
          <div className='form-field'>
          <label htmlFor='perDaySalary'>Per Day :</label>
          <input
            id='perDaySalary'
            type='number'
            value={perDaySalary}
            placeholder='Per Day'
            min={0}
            onChange={(e) => setPerDaySalary(e.target.value)}
          />
          </div>
          <div className='form-field'>
          <label htmlFor='perDayWorkDays'>Work Days:</label>
          <input
            id='perDayWorkDays'
            type='number'
            value={perDayWorkDays}
            placeholder='Work Days'
            min={0}
            onChange={(e) => setPerDayWorkDays(e.target.value)}
          />
          </div>
          <div className='form-field'>
          <label htmlFor='perDayTotal'>Total:</label>
          <input
            id='perDayTotal'
            type='number'
            value={perDaySalary * perDayWorkDays}
            readOnly
          />
          </div>
          <div className="form-field">
        <button className="button" onClick={handleCalculateClick}>Calculate</button>
         </div>
        </div>
      )}
      </div>

      {flatInputVisible && (
        <div className='flat_container'>
          <div className='form-field'>
          <label htmlFor='flatSalary'>Flat Salary:</label>
          <input
            id='flatSalary'
            type='number'
            value={flatSalary}
            min={0}
            onChange={(e) => setFlatSalary(e.target.value)}
          />
          </div>
          <div className='form-field'>
          <label htmlFor='flatTotal'>Total:</label>
          <input
            id='flatTotal'
            type='number'
            value={flatSalary}
            readOnly
          />
          </div>
          <div className="form-field">
        <button className="button" onClick={handleCalculateClick}>Calculate</button>
         </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default PHire;
