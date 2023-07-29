import React ,{useState} from 'react'
import '../Styles/In_house.css'

function In_house() {
    
    const [salary, setSalary] = useState('');
    const [workDays, setWorkDays] = useState('');
  
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
    <div className='in_house_container'>
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
    </div>
  )
}

export default In_house
