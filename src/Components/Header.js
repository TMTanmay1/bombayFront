import React from 'react'
import { useState , useEffect } from 'react';
import '../Styles/Header.css'

function Header() {
    const currentDate = new Date().toLocaleDateString('en-GB');

    const [validThroughDate, setValidThroughDate] = useState('');

  useEffect(() => {
    const currentDateObj = new Date();
    const validThroughDateObj = new Date(currentDateObj.setDate(currentDateObj.getDate() + 45));
    setValidThroughDate(validThroughDateObj.toLocaleDateString('en-GB'));
  }, []);

  return (
    <div className="header">
      <div className="field">
        <label htmlFor="date">Date:</label>
        <input id="date" type="text" value={currentDate} readOnly />
        
      </div>
      <div className="field">
        <label htmlFor="companyName">BombayCat Flims</label>
        
      </div>
      <div className="field">
        <label htmlFor="validThrough">Valid Through:</label>
        <input id="validThrough" type="text" value={validThroughDate} readOnly/>
      </div>
      
    </div>
  )
}

export default Header
