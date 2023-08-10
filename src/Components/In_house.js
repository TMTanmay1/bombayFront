import React, { useState, useEffect } from "react";
import "../Styles/In_house.css";
import { useDispatch } from "react-redux";

import { add } from "../store/slice/userSlice";

function In_house() {
  const [salary, setSalary] = useState("");
  const [workDays, setWorkDays] = useState("");
  const [answer, setAnswer] = useState("");
  const [timerId, setTimerId] = useState(null);

  const dispatch = useDispatch();

  const handleSalaryChange = (event) => {
    const value = event.target.value;
    setSalary(value);
    if (value !== "") {
      setSalary(Math.round(value / 30));
    } else {
      setSalary("");
    }
  };

  const handleWorkDaysChange = (event) => {
    const value = event.target.value;
    setWorkDays(value);
  };

  const calculateTotal = (salary, workDays) => {
    if (salary !== "" && workDays !== "") {
      const total = salary * workDays;

      // dispatch(add(total));

      // setAnswer(total);

      return total;
    } else {
      return "";
    }
  };

  const handleCalculateClick = () => {
    const total = calculateTotal(salary,workDays);
    if (total !== "") {
      // Dispatch the total value
      dispatch(add(total));
    }
  };

  // useEffect(() => {
  //   calculateTotal(salary, workDays);
  // }, [salary ]);

  // useEffect(() => {
  //   // Clear the existing timeout when salary or workDays change
  //   if (timerId) {
  //     clearTimeout(timerId);
  //   }

  //   // Start a new timeout of 2 seconds
  //   const newTimerId = setTimeout(() => {
  //     calculateTotal(salary, workDays);
  //   }, 2000);

  //   // Save the new timerId
  //   setTimerId(newTimerId);

  //   // Clean up: clear the timeout when the component unmounts
  //   return () => {
  //     if (timerId) {
  //       clearTimeout(timerId);
  //     }
  //   };
  // }, [salary, workDays]);

  return (
    <div className="in_house_container">
      <div className="form-field">
        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          type="number"
          onChange={handleSalaryChange}
          placeholder="Enter Salary"
          min={0}
        />
      </div>

      <div className="form-field">
        <label htmlFor="per_day">Per Day:</label>
        <input
          id="per_day"
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          placeholder="Per Day"
          readOnly
        />
      </div>

      <div className="form-field">
        <label htmlFor="work-days">Work Days:</label>
        <input
          id="work-days"
          type="number"
          onChange={handleWorkDaysChange}
          placeholder="Enter Work Days"
          min={0}
        />
      </div>
      <div className="form-field">
        <label htmlFor="total">Total:</label>
        <input id="total" type="text" value={calculateTotal(salary,workDays)} readOnly />
      </div>

      <div className="form-field">
        <button className="button" onClick={handleCalculateClick}>Calculate</button>
      </div>
      
    </div>
  );
}

export default In_house;