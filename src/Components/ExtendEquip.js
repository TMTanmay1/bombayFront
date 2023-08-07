import React, { useState } from 'react';
import '../Styles/ExtendEquip.css';
import EHire from '../Components/EHire';
import EIn_house from '../Components/EIn_house.js';

function ExtendEquip() {
    const [talentType, setTalentType] = useState('in-house');
      
    
    const handleTalentTypeChange = (event) => {
      setTalentType(event.target.value);
    };
  
    return (
      <div className='extend-talent-container'>
        <div className='form-field'>
          {/* <label htmlFor='talent-type'>Talent Type:</label> */}
          <select id='talent-type' value={talentType} onChange={handleTalentTypeChange}>
            <option value='in-house'>In-house</option>
            <option value='hire'>Hire</option>
          </select>
        </div>
        <div className='form-field'>
        {talentType === 'hire' && <EHire />}
        {talentType === 'in-house' && <EIn_house />}
        </div>
      </div>
    );
  }
  
  export default ExtendEquip;